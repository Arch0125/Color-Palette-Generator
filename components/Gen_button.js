import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native'

const Gen_button = ({...rest}) => {
    return (
        <TouchableOpacity style={styles.genbutton} {...rest} >
            
            <Text style={styles.buttontext} >Generate colour palette !</Text>

            
            
        </TouchableOpacity>
    )
}

export default Gen_button

const styles = StyleSheet.create({
    button_container:{
        justifyContent:"center",
        alignItems:"center"

    },
    genbutton:{
        
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#070b47",
        width:350,
        borderRadius:15,
        height:50,
        marginBottom:50
        

    },
    buttontext:{
        fontWeight:"600",
        fontSize:20,
        color:"white",
    }
})
