import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import Gen_button from './components/Gen_button';
import { useState } from 'react';
import TopBar from './screens/TopBar';
import { TouchableOpacity } from 'react-native';
import * as Clipboard from 'expo-clipboard';


const App = () => {

  const createAlert=()=>{
    Alert.alert("","Color Hex-code is copied");
  }
  

  const[hex1,setHex1]=useState("#fffff");
  const[hex2,setHex2]=useState("#fffff");
  const[hex3,setHex3]=useState("#fffff");
  const randomHex =()=>{
    const randomColor1 = "#" + Math.floor(Math.random() * 16777215).toString(16);
    const randomColor2 = "#" + Math.floor(Math.random() * 16777215).toString(16);
    const randomColor3 = "#" + Math.floor(Math.random() * 16777215).toString(16);

    setHex1(randomColor1);
    setHex2(randomColor2);
    setHex3(randomColor3);
  }
  return (
    <View style={styles.container}>
      <TopBar/>
      <View style={styles.color_container} >
        <View style={[styles.color_bg,{backgroundColor:hex1}]} />
        <Text onPress={()=>{Clipboard.setString(hex1);createAlert()}} style={styles.color_hex} >{hex1}</Text>
      </View>

      <View style={styles.color_container} >
        <View style={[styles.color_bg,{backgroundColor:hex2}]} />
        <Text onPress={()=>{Clipboard.setString(hex2);createAlert()}} style={styles.color_hex} >{hex2}</Text>
      </View>

      <View style={styles.color_container} >
        <View style={[styles.color_bg,{backgroundColor:hex3}]} />
        <Text onPress={()=>{Clipboard.setString(hex3),createAlert()}} style={styles.color_hex} >{hex3}</Text>
      </View>
      
      <TouchableOpacity onPress={randomHex} style={styles.button_container} >
        <Gen_button onPress={()=>{createAlert()}} />
      </TouchableOpacity>
      <Text style={styles.subtitle} >Tap on the color code to copy !</Text>
      
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"column",
    backgroundColor: '#eeecf1',
    alignItems: 'center',
    
  },
  button_container:{
    
    justifyContent:"center",
    alignItems:"center",
    width:"100%"

},
  color_container:{
    backgroundColor:"white",
    width:"60%",
    height:"20%",
    marginTop:30,
    alignItems:"center",
    justifyContent:"flex-end",
    borderRadius:20,
   
    
  },
  color_hex:{
    fontSize:16,
    fontWeight:"bold",
    paddingBottom:5,
    textTransform:"uppercase",
    color:"#536878"
    
  },
  color_bg:{
    width:"90%",
    height:"78%",
    borderRadius:20,
    paddingTop:10,
    

  },
  subtitle:{
    marginTop:5,
    color:"grey",
  }
});
