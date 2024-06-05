import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import LogoInitial from "../../components/LogoInitial/LogoInitial";


export default () => {
    return (
        <>
            {/* Header */}
            <View style={styles.header}>
                <View style={[{ alignItems:"center",justifyContent:"center" }]}>
                    <Image style={styles.logo} source={require('../../../assets/icon.png')} />
                    <Text>Perfil</Text>
                </View>
            </View>

            {/* Coisas */}
            <View style={[{ flex: 1 }]}>


            </View>
        </>
    )
}

const styles = StyleSheet.create({
    header: {
        alignItems: "center",
        justifyContent: "center"
    },
    logo: {
        marginTop: 5,
        width: 60,
        height: 60
    },
    LogoText: {
        fontSize: 38,
        marginHorizontal: 5,
        color: '#148C00'
    }
})