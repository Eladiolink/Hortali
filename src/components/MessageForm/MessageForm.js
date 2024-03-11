import React from "react";
import { StyleSheet, Text, View } from "react-native";


export default ({message}) => {
    return (
        <View style={styles.InfoContainer}><Text style={styles.Info}>{message}</Text></View>
    )
}

const styles = StyleSheet.create({
        InfoContainer:{
        alignItems:"center",
        marginTop:10
    },
    Info:{
        fontFamily:"Poppins-Light",
        color:"red"
    }
})