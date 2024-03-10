import { Image } from 'expo-image'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default (props) => {
    const marginTop = props.marginTop

    return (
        <View style={[styles.header, { marginTop : marginTop!=null ? marginTop : 100 }]}>
            <Image style={styles.logo} source={require('../../../assets/icon.png')} />
            <Text style={[styles.LogoText, { fontFamily: "Poppins-ExtraLight" }]}>Hortalí</Text>
        </View>
    )
}

const styles = StyleSheet.create({
     header: {
        alignItems: "center",
    },
    logo: {
        width: 95,
        height: 95
    },
    LogoText: {
        fontSize: 38,
        marginHorizontal: 5,
        color: '#148C00'
    }
})