import React from 'react'
import { View,Text, TouchableOpacity } from 'react-native-web'
import { StyleSheet } from 'react-native-web'

const Color_box = ({hexcode,...rest}) => {
    return (
        <View style={styles.color_container} >
            <View style={[styles.color_bg,{backgroundColor:hexcode}]} />
            <TouchableOpacity {...rest} >
            <Text style={styles.color_hex} >{hexcode}</Text>

            </TouchableOpacity>
            
        </View>
    )
}

export default Color_box;

const styles = StyleSheet.create({

    color_container:{
        backgroundColor:"white",
        width:150,
        height:160,
        
        alignItems:"center",
        justifyContent:"flex-end",
        borderRadius:20,
        marginRight:20
       
        
      },
      color_hex:{
        fontSize:16,
        fontWeight:"bold",
        paddingBottom:5,
        textTransform:"uppercase",
        color:"#536878"
        
      },
      color_bg:{
        width:130,
        height:127,
        borderRadius:20,
        
        
    
      },

})
