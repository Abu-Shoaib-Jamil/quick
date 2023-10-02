import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NewsScreen from "../views/newsscreen";
import BookmarkScreen from "../views/bookmarkscreen";
import styles from "../styles";
import React from "react";
import IconBuilder from "./icon";

const BottomNavBar = createBottomTabNavigator();

function BottomNavigationBar(){
    return(
        <BottomNavBar.Navigator 
            initialRouteName="News" 
            screenOptions={
                {
                    headerTitle : "QuickGist",
                    headerTitleAlign : "center",
                    headerStyle : styles.header,
                    headerTintColor : "#FFFFFF",
                    headerTitleStyle : {
                        fontWeight : "bold",
                    }
                }}
        >
            <BottomNavBar.Screen name = "News" component={NewsScreen} options={{tabBarIcon:()=>IconBuilder({name : "news"})}}/>
            <BottomNavBar.Screen name="Bookmarks" component={BookmarkScreen} options={{tabBarIcon:()=>IconBuilder({name : "bookmark"})}}/>
        </BottomNavBar.Navigator>
    );
}

export default BottomNavigationBar;