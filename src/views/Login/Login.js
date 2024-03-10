import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import LogoInitial from "../../components/LogoInitial/LogoInitial";

export default function Login({ navigation }){
    const [email, onChangeEmail] = useState('');
    const [senha, onChangeSenha] = useState('');
    const [isFocusedEmail, setIsFocusedEmail] = useState(false);
    const [isFocusedSenha, setIsFocusedSenha] = useState(false);

    return (
        <View>
            <LogoInitial marginTop={130} />
            <View>
                <Text style={styles.inputLabel}>Email</Text>
                <TextInput
                    placeholder="Email"
                    style={[styles.input, { borderColor: isFocusedEmail ? 'black' : '#CECCCC' }]}
                    onFocus={() => setIsFocusedEmail(true)}
                    onBlur={() => setIsFocusedEmail(false)}
                    onChangeText={onChangeEmail}
                    value={email}></TextInput>

                <Text style={styles.inputLabel}>Senha</Text>
                <TextInput
                    placeholder="Senha"
                    secureTextEntry={true}
                    style={[styles.input, { borderColor: isFocusedSenha ? 'black' : '#CECCCC' }]}
                    onFocus={() => setIsFocusedSenha(true)}
                    onBlur={() => setIsFocusedSenha(false)}
                    onChangeText={onChangeSenha}
                    value={senha} ></TextInput>

                <TouchableOpacity style={[styles.TouchableContainerLink,{marginTop:20}]} onPress={ ()=> navigation.navigate("RememberPassword")}>
                    <Text style={styles.TouchableElementLink}>Esqueceu a senha?</Text>
                </TouchableOpacity>

                <View style={styles.BtnContainer}>
                    <TouchableOpacity style={styles.TouchableContainerBtn} onPress={()=> console.log("Login")}>
                        <Text style={styles.TouchableElementBtn}>Fazer Login</Text>
                    </TouchableOpacity>
                </View>
                
                <TouchableOpacity style={[styles.TouchableContainerLink,{marginTop:50}]} onPress={()=> navigation.navigate("Cadastro")}>
                    <Text style={styles.TouchableElementLink}>Ainda não possui conta? Cadastre-se aqui!</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}