import {StyleSheet, Text, View } from "react-native";
import Header from "../common/header";

function HomeScreen(){
    return (
        <View style ={styles.homescreen}>
            <Header title="HomeScreen"></Header>
            <Text>"HomeScreen SCREEN"</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    homescreen : {
        display:"flex",
        flexDirection:"column",
        justifyContent:"flex-start",
    },
})

export default HomeScreen;