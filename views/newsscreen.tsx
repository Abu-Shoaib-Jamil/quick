/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View } from "react-native";
import Header from '../common/header';
import NewsBuilder from '../common/newsbuilder';
import styles from '../styles';
import React from 'react';

function NewsScreen(){
    return (
        <View style ={styles.homescreen}>
            {/* <Text>
                News Screen
            </Text> */}
            <NewsBuilder />
        </View>
    );
}

export default NewsScreen;