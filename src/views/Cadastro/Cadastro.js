import React, { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import GoBack from "../../components/GoBack/GoBack";
import LogoInitial from "../../components/LogoInitial/LogoInitial";
import InputForm from "../../components/InputFom/InputForm";
import PickerForm from "../../components/PickerForm/PickerForm";
import MessageForm from "../../components/MessageForm/MessageForm";
import validateCpfCnpj from "../../../utils/validateCpfCnpj";


export default ({ navigation }) => {
    const [nome, onChangeNome] = useState('');
    const [CpfCnpj, onChangeCpfCnpj] = useState('');
    const [genero, onChangeGenero] = useState('Homem');
    const [email, onChangeEmail] = useState('');
    const [senha, onChangeSenha] = useState('');
    const [senhaConfirm, onChangeSenhaConfirm] = useState('');
    const [message, setMessage] = useState("")

    validate = () => {
        if (
            nome == "" ||
            CpfCnpj == "" ||
            genero == "" ||
            email == "" ||
            senha == "" ||
            senhaConfirm == ""
        ) {
            setMessage("Os campos não podem ser vazios!")
            return
        }

        if(!validateCpfCnpj(CpfCnpj)){
            setMessage("Insira um CPF ou CNPJ válido!")
            return
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setMessage("Insira um email válido")
            return
        }

        if(senha.length<8){
            setMessage("A senha deve conter no mínimo 8 dígitos!")
            return
        }

        if(senha!=senhaConfirm){
            setMessage("As senhas devem ser iguais!")
            return
        }

        console.log("Genero:" + genero)
        navigation.navigate("CadastroContinuacao")
    }

    return (
        <View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <GoBack navigation={navigation} />
                <LogoInitial marginTop={0} />

                <MessageForm message={message} />

                <InputForm label="Nome Completo" placeholder="ex: João Nunes..." onChange={(text) => onChangeNome(text)} />
                <InputForm label="CPF/CNPJ" placeholder="CPF ou CNPJ" keyboardType="numeric" onChange={text => onChangeCpfCnpj(text)} />
                <PickerForm label="Gênero" values={["Homem", "Mulher", "Outro"]} onChange={text => onChangeGenero(text)} />
                <InputForm label="Email" placeholder="ex: joão@gmail.com" onChange={text => onChangeEmail(text)} />
                <InputForm label="Senha" placeholder="Senha" isSecurity={true} onChange={text => onChangeSenha(text)} />
                <InputForm label="Confirmação de Senha" placeholder="Senha" isSecurity={true} onChange={text => onChangeSenhaConfirm(text)} />


                <View style={styles.BtnContainer}>
                    <TouchableOpacity style={styles.TouchableContainerBtn} onPress={validate}>
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
    }
})