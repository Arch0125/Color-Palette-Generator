import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import Gen_button from './components/Gen_button';
import { useState } from 'react';
import TopBar from './screens/TopBar';
import { TouchableOpacity } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import Color_box from './components/Color_box';

const App = () => {

  const createAlert=()=>{
    Alert.alert("","Color Hex-code is copied");
  }
  

  const[hex1,setHex1]=useState("#fffff");
  const[hex2,setHex2]=useState("#fffff");
  const[hex3,setHex3]=useState("#fffff");
  const[hex4,setHex4]=useState("#fffff");

  const randomHex =()=>{
    const randomColor1 = "#" + Math.floor(Math.random() * 16777215).toString(16);
    const randomColor2 = "#" + Math.floor(Math.random() * 16777215).toString(16);
    const randomColor3 = "#" + Math.floor(Math.random() * 16777215).toString(16);
    const randomColor4 = "#" + Math.floor(Math.random() * 16777215).toString(16);

    setHex1(randomColor1);
    setHex2(randomColor2);
    setHex3(randomColor3);
    setHex4(randomColor4);
  }
  return (
    <View style={styles.container}>
      <TopBar/>
      <View style={styles.color_row} >
        
        <Color_box hexcode={hex1} onPress={()=>{Clipboard.setString(hex1);createAlert()}} />
        <Color_box hexcode={hex2}/>
        
      </View>

      <View style={styles.color_row} >
        <Color_box hexcode={hex3}/>
        <Color_box hexcode={hex4}/>
      </View> 

      <Text style={styles.subtitle} >Tap on the color code to copy !</Text>
      <Gen_button onPress={randomHex} />
      
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    
    flex:1,
    backgroundColor: '#eeecf1',
    alignItems: 'center',
    
    
  },
  button_container:{
    
    justifyContent:"center",
    alignItems:"center",
    width:"100%"

},
 
  subtitle:{
    marginBottom:20,
    color:"grey",
  },
  color_row:{
    flex:1,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",

    
  }
});
