/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View } from "react-native";
import Header from '../common/header';
import NewsBuilder from '../common/newsbuilder';
import styles from '../styles';
import React from 'react';
import BottomNavigationBar from "../common/bottomnavigationbar";

function HomeScreen(){
    return (
        <View style ={styles.homescreen}>
            <Header title="QuickGist" />
            <NewsBuilder />
            {/* <BottomNavigationBar/> */}
        </View>
    );
}

export default HomeScreen;