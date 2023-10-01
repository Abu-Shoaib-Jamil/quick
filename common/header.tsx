const { View, Text } = require("react-native");
import styles from '../styles/index';
import HeaderProps from "../models/header";

function Header({title}:HeaderProps){
    return (
        <View style = {[styles.header,styles.androidShadow]}>
            <Text style = {styles.textStyle}>{title}</Text>
        </View>
    );
}

export default Header;