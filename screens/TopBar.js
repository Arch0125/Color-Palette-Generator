import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const TopBar = () => {
    return (
        <View style={styles.container} >
            <Text style={styles.title} >Color Palette Generator</Text>
        </View>
    )
}

export default TopBar

const styles = StyleSheet.create({

    container:{
        
        marginTop:50,
        alignItems:"center",
        
    },
    title:{
        fontSize:30,
        fontWeight:"bold",
        color:"#070b47"
        
    }
})
