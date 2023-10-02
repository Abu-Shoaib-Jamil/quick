import React from 'react';
import {
  SafeAreaView, StyleSheet,
} from 'react-native';
import HomeScreen from './views/newsscreen';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigationBar from './common/bottomnavigationbar';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.theme}>
        <BottomNavigationBar/>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  theme :{
    backgroundColor : "#FFFFFF",
    flex:1,
  },
})

export default App;
