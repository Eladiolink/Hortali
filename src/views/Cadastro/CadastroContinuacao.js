import React, { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import GoBack from "../../components/GoBack/GoBack";
import LogoInitial from "../../components/LogoInitial/LogoInitial";
import InputForm from "../../components/InputFom/InputForm";
import { Picker } from "@react-native-picker/picker";
import PickerForm from "../../components/PickerForm/PickerForm";
import MessageForm from "../../components/MessageForm/MessageForm";


export default ({ navigation }) => {
    const [email, onChangeEmail] = useState('');
    const [senha, onChangeSenha] = useState('');
    const [message, setMessage] = useState("")

    return (
        <View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <GoBack navigation={navigation} />
                <LogoInitial marginTop={0} />

                <MessageForm message={message} />
                <InputForm label="Data de Nascimento" placeholder="dd/mm/aaaa" keyboardType="numeric" />
                <InputForm label="Telefone/Celular" placeholder="(xx) xxxx-xxxx" keyboardType="numeric" />
                <InputForm label="Rua" placeholder="ex: Rua Osmundo..." />

                <View style={styles.Dual}>
                    <InputForm label="Bairro" placeholder="ex: Ibura" mr={5} flex={3} />
                    <InputForm label="Nº" keyboardType="numeric" mr={5} flex={1} />
                </View>

                <View style={styles.Dual}>
                    <InputForm label="Cidade" mr={5} flex={3} />
                    <InputForm label="UF" mr={5} flex={1} />
                </View>
                <InputForm label="Complemento" />
                <InputForm label="CEP" keyboardType="numeric" placeholder="xxxxxx-xxx" />
                <View style={styles.BtnContainer}>
                    <TouchableOpacity style={styles.TouchableContainerBtn} onPress={() => console.log("Login")}>
                        <Text style={styles.TouchableElementBtn}>Continuar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    BtnContainer: {
        alignItems: "center"
    },
    TouchableContainerBtn: {
        marginVertical: 30,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#7DBA07",
        width: 115,
        borderRadius: 50,
        height: 40
    },
    TouchableElementBtn: {
        color: "white",
        fontFamily: "Poppins-Light",
        fontSize: 18
    },
    // News
    Dual: {
        flexDirection: "row",
        marginHorizontal: 50
    }
})