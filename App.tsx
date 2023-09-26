import React from 'react';
import {
  SafeAreaView, StyleSheet,
} from 'react-native';
import HomeScreen from './views/homescreen/homescreen';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.theme}>
      <HomeScreen></HomeScreen>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  theme :{
    backgroundColor : "#FFFFFF",
    flex:1,
  },
})

export default App;
