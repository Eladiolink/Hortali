import React from "react";
import { Button, Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


export default () => {
    return (
        <View>
            <View style={style.logoContainer}>
                <Image source={require("../../../assets/icon.png")} style={style.logo} resizeMode="contain" />
            </View>
            <View style={style.containerForm}>
                <TextInput placeholder="Login" style={[style.Input, style.login]} />
                <TextInput placeholder="Senha" style={[style.Input, style.senha]} />

                <View style={style.Links}>
                    <Text >Esqueceu a Senha?</Text>
                </View>

                <TouchableOpacity style={style.Button}>
                    <Text>Entrar</Text>
                </TouchableOpacity>

                <View style={style.Links}>
                    <Text >Ainda não tem login? cadastre-se</Text>
                </View>


                <TouchableOpacity style={style.Button}>
                    <Text>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const style = StyleSheet.create({
    containerForm: {
        flex: 2,
    },
    logoContainer: {
        marginTop: "30%",
        alignItems: "center",
    },
    logo: {
        width: Dimensions.get('window').width / 2.5,
        height: Dimensions.get('window').width / 2.5,
    },
    Input: {
        borderColor: "#000",
        borderWidth: 1,
        width: 250,
        height: 35,
        padding: 0,
        paddingHorizontal: 5,
        borderBottomWidth: 0
    },
    login: {
        marginTop: "30%"
    },
    senha: {
        marginTop: "10%",
    },
    Links:{
        alignItems: "center",
        marginTop: 30
    },

    Button:{
        borderWidth: 0.8,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 15,

    }
})