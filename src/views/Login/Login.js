import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import LogoInitial from "../../components/LogoInitial/LogoInitial";
import InputForm from "../../components/InputFom/InputForm";
import MessageForm from "../../components/MessageForm/MessageForm";

export default function Login({ navigation }) {
    const [email, onChangeEmail] = useState('');
    const [senha, onChangeSenha] = useState('');
    const [message, setMessage] = useState("")

    validate = () => {
        if (email == "" || senha == "") {
            setMessage("Os campos não podem ser vazios!")
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
            <LogoInitial marginTop={130} />
            <ScrollView showsVerticalScrollIndicator={false}>

                <MessageForm message={message} />
                <InputForm label="Email" placeholder="Email" onChange={(text) => onChangeEmail(text)} />

                <InputForm label="Senha" placeholder="Senha" isSecurity={true} onChange={text => onChangeSenha(text)} />

                <TouchableOpacity style={[styles.TouchableContainerLink, { marginTop: 20 }]} onPress={() => navigation.navigate("RememberPassword")}>
                    <Text style={styles.TouchableElementLink}>Esqueceu a senha?</Text>
                </TouchableOpacity>

                <View style={styles.BtnContainer}>
                    <TouchableOpacity style={styles.TouchableContainerBtn} onPress={validate}>
                        <Text style={styles.TouchableElementBtn}>Fazer Login</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={[styles.TouchableContainerLink, { marginTop: 50 }]} onPress={() => navigation.navigate("Cadastro")}>
                    <Text style={styles.TouchableElementLink}>Ainda não possui conta? Cadastre-se aqui!</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}
