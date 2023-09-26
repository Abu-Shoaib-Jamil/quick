import { StyleSheet } from "react-native";
const { View, Text } = require("react-native");
 
interface HeaderProps{
    title : string;
}

function Header({title}:HeaderProps){
    return (
        <View style = {[styles.header,styles.androidShadow]}>
            <Text>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header : {
        padding : 20,
        marginBottom:10,
        backgroundColor : '#FFFFFF',
        display:"flex",
        flexDirection: "row",
        alignContent:"center",
        justifyContent:"center",
        borderRadius : 10,
        
    },
    androidShadow : {
        elevation:10,
    },
    textstyle: {
        fontFamily:""
    }
});



export default Header;