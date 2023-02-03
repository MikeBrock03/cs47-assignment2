import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import Icons from "../../assets/Icons/";


const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Header = () => {
    return (
        <View style={styles.header}>
            <Image source = {Icons.menu.light} style={styles.headerIcons}/>
            <Text style = {styles.title}>ensom</Text>
            <Image source={Icons.sun} style={styles.headerIcons}/>
        </View>
    );
};

const styles = StyleSheet.create( {
    headerIcons: {
        height: windowWidth * 0.12,
        width: windowWidth * 0.12,
    },
    title: {
        fontFamily: "SydneyBold",
        fontSize: 32,
    },
    header: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: 'center',
        padding: 10,

    }
});

export default Header;