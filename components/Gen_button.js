import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native'

const Gen_button = () => {
    return (
        <View style={styles.genbutton} >
            
            <Text style={styles.buttontext} >Generate colour palette !</Text>

            
            
        </View>
    )
}

export default Gen_button

const styles = StyleSheet.create({
    button_container:{
        justifyContent:"center",
        alignItems:"center"

    },
    genbutton:{
        marginTop:50,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#070b47",
        width:350,
        borderRadius:15,
        height:50
        

    },
    buttontext:{
        fontWeight:"600",
        fontSize:20,
        color:"white",
    }
})
