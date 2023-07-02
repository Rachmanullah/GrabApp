import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, Dimensions,StatusBar} from 'react-native';
import { Awan } from './assets';
class App extends Component {
  render() {
    return (
      <View>
        <StatusBar barStyle="dark-content" translucent backgroundColor="rgba(0,0,0,0)"/>
        <Image style={styles.header} source={Awan}/>
      </View>
    );
  }
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default App;

const styles = StyleSheet.create({
  header : {
    height: 150,
    width: windowWidth,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  }
})