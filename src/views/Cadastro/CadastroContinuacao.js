import React, { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import GoBack from "../../components/GoBack/GoBack";
import LogoInitial from "../../components/LogoInitial/LogoInitial";
import InputForm from "../../components/InputFom/InputForm";
import { Picker } from "@react-native-picker/picker";
import PickerForm from "../../components/PickerForm/PickerForm";
import MessageForm from "../../components/MessageForm/MessageForm";
import validaeCEP from "../../../utils/validaeCEP";


export default ({ navigation }) => {
    const [data, onChangeData] = useState('');
    const [telefone, onChangeTelefone] = useState('');
    const [rua, onChangeRua] = useState('')
    const [bairro, onChangeBairro] = useState('')
    const [numeroCasa, onChangeNumeroCasa] = useState('')
    const [cidade, onChangeCidade] = useState('')
    const [UF, onChangeUf] = useState('')
    const [complemento, onChangeComplemento] = useState('')
    const [CEP, onChangeCep] = useState('')

    const [message, setMessage] = useState("")

    validate = () => {
        if (
            data == "" ||
            telefone == "" ||
            rua == "" ||
            bairro == "" ||
            numeroCasa == "" ||
            cidade == "" ||
            UF == "" ||
            complemento == "" ||
            CEP == ""
        ) {
            setMessage("Os campos não podem ser vazios!")
            return
        }

        if(!validaeCEP(CEP)){
            setMessage("Informe um CEP válido!")
            return
        }

        console.log("OK")
    }

    return (
        <View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <GoBack navigation={navigation} />
                <LogoInitial marginTop={0} />

                <MessageForm message={message} />
                <InputForm label="Data de Nascimento" placeholder="dd/mm/aaaa" keyboardType="numeric" onChange={(text) => onChangeData(text)} />
                <InputForm label="Telefone/Celular" placeholder="(xx) xxxx-xxxx" keyboardType="numeric" onChange={text => onChangeTelefone(text)} />
                <InputForm label="Rua" placeholder="ex: Rua Osmundo..." onChange={text => onChangeRua(text)} />

                <View style={styles.Dual}>
                    <InputForm label="Bairro" placeholder="ex: Ibura" mr={5} flex={3} onChange={text => onChangeBairro(text)} />
                    <InputForm label="Nº" keyboardType="numeric" mr={5} flex={1} onChange={text => onChangeNumeroCasa(text)} />
                </View>

                <View style={styles.Dual}>
                    <InputForm label="Cidade" mr={5} flex={3} onChange={ text => onChangeCidade(text) } />
                    <InputForm label="UF" mr={5} flex={1} maxLength={2} onChange={ text => onChangeUf(text) } />
                </View>
                <InputForm label="Complemento" onChange={ text=>onChangeComplemento(text) } />
                <InputForm label="CEP" keyboardType="numeric" placeholder="xxxxxx-xxx" onChange={ text=>onChangeCep(text) } />
                <View style={styles.BtnContainer}>
                    <TouchableOpacity style={styles.TouchableContainerBtn} onPress={ validate }>
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