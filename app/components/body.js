import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";
import Profiles from "../../assets/Profiles";
import Themes from "../../assets/Themes";
import { palette } from "../../assets/Themes/palette";
import themes from "../../assets/Themes/themes";

const Body = () => {
    return (
        <View>
           <ImageBackground
            source={Profiles.mtl.image} 
            style={[styles.image, styles.shadowProp]} 
            imageStyle = {styles.imageStyle}
            >
            <Text style={styles.title}>{Profiles.mtl.name}</Text>
            <Text style={styles.subtitle}>{Profiles.mtl.caption}</Text>
           </ImageBackground>
        </View>
        
    );
};

const styles = StyleSheet.create({
    image: {
        width: "85%",
        height: undefined,
        aspectRatio: 1 / 1,
        justifyContent: "space-between",
        marginTop: 24,
        alignSelf: "center",
    },
    shadowProp: {
        shadowColor: themes.light.shadows.shadowColor,
        shadowOffset: themes.light.shadows.shadowOffset,
        shadowOpacity: themes.light.shadows.shadowOpacity,
        shadowRadius: themes.light.shadows.shadowRadius,
      },
    imageStyle: {
        borderRadius: 8,
        alignSelf: "center",
    },
    title: {
        fontFamily: "Sydney",
        fontSize: 32,
        padding: 8,
        color: "white",
    },
    subtitle: {
        fontFamily: "Sydney",
        fontSize: 18,
        padding: 8,
        color: "white",
    }
});
export default Body;