import React, { useState } from "react";
import LogoInitial from "../../components/LogoInitial/LogoInitial";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Image } from "expo-image";
import { TextInput } from "react-native-gesture-handler";
import GoBack from "../../components/GoBack/GoBack";
import InputForm from "../../components/InputFom/InputForm";
import MessageForm from "../../components/MessageForm/MessageForm";

export default ({ navigation }) => {
    const [email, onChangeEmail] = useState('')
    const [isFocusedEmail, setIsFocusedEmail] = useState(false)
    const [message, setMessage] = useState("")

    validate = () => {
        if (email == "") {
            setMessage("O campo não pode ser vazios!")
            return
        } else setMessage("")

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setMessage("Insira um email válido")
            return
        }

        console.log("OK")
    }

    return (
        <View>
            <GoBack navigation={navigation} />

            <LogoInitial />
            <ScrollView showsVerticalScrollIndicator={false}>

                <MessageForm message={message} />
                <InputForm label="Email" placeholder="Email" onChange={(text) => onChangeEmail(text)} />
                <View style={styles.BtnContainer}>
                    <TouchableOpacity style={styles.TouchableContainerBtn} onPress={validate}>
                        <Text style={styles.TouchableElementBtn}>Enviar</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    inputLabel: {
        marginTop: 20,
        fontSize: 15,
        marginHorizontal: 60,
        fontFamily: "Poppins-Regular"
    },
    input: {
        height: 40,
        marginHorizontal: 50,
        borderRadius: 50,
        padding: 10,
        borderWidth: 0.8,
        borderColor: 'black',
    },
    BtnContainer: {
        alignItems: "center",
        marginTop: 20
    },
    TouchableContainerBtn: {
        alignItems: "center",
        backgroundColor: "#CECCCC",
        width: 115,
        borderRadius: 50
    },
    TouchableElementBtn: {
        color: "black",
        fontFamily: "Poppins-ExtraLight",
        fontSize: 18
    }
})