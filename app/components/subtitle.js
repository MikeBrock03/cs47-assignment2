import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import Icons from "../../assets/Icons";
import themes from "../../assets/Themes/themes";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Subtitle = () => {
    return (
        <View style={[styles.header, styles.shadowProp]}>
            <Text style = {styles.title}>My hottest take</Text>
            <View style = {styles.subcaption}>
                <Image source={Icons.player.light} style={styles.playerIcon}/>
                <Image source={Icons.audioWave.light} style={styles.audioIcon}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create( {
    playerIcon: {
        height: windowWidth * 0.13,
        width: windowWidth * 0.13,
    },
    shadowProp: {
        shadowColor: themes.light.shadows.shadowColor,
        shadowOffset: themes.light.shadows.shadowOffset,
        shadowOpacity: themes.light.shadows.shadowOpacity,
        shadowRadius: themes.light.shadows.shadowRadius,
      },
    audioIcon: {
        flex: 1,
        width: undefined,
        height: windowWidth * .12,
        marginTop: 2,
        resizeMode: 'contain',
    },
    title: {
        fontFamily: "Sydney",
        fontSize: 25,
        paddingLeft: 10,
        paddingTop: 10,
    },

    header: {
        // tried to make the height of this proportional to the screen, but wasn't working :(
        marginBottom: 110,
        marginTop: 25,
        flex: 1,
        justifyContent: "space-between",
        width: windowWidth * .87,
        flexDirection: "column",
        alignContent: "flex-start",
        alignSelf: "center",
        padding: 10,
        borderRadius: 20,
        backgroundColor: "white",
    },
    subcaption: {
        flex: 1,
        flexDirection: "row",
        marginTop: 20,
        alignSelf: "center",
        justifyContent: "space-between",
    }
});

export default Subtitle;