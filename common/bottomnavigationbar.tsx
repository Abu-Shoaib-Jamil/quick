import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NewsScreen from "../views/newsscreen";
import BookmarkScreen from "../views/bookmarkscreen";
import styles from "../styles";
import React from "react";
import BookmarkIcon from "./icons/bookmarkicon";
import NewsIcon from "./icons/newsicon";

const BottomNavBar = createBottomTabNavigator();

function BottomNavigationBar(){
    const iconsize = 20;
    const iconcolor = "white";
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
            <BottomNavBar.Screen name = "News" component={NewsScreen} options={{tabBarIcon:()=><NewsIcon iconsize={iconsize} iconcolor={iconcolor} />}}/>
            <BottomNavBar.Screen name="Bookmarks" component={BookmarkScreen} options={{tabBarIcon:()=><BookmarkIcon isBookmarked={true} iconsize={iconsize} iconcolor={iconcolor}/>}}/>
        </BottomNavBar.Navigator>
    );
}

export default BottomNavigationBar;