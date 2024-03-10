import React, { useState } from "react";
import LogoInitial from "../../components/LogoInitial/LogoInitial";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Image } from "expo-image";
import { TextInput } from "react-native-gesture-handler";
import GoBack from "../../components/GoBack/GoBack";

export default ({ navigation }) => {
    const [email, onChangeEmail] = useState('');
    const [isFocusedEmail, setIsFocusedEmail] = useState(false);
    return (
        <View>
            <GoBack navigation={navigation}/>

            <LogoInitial />
            <View>
                <Text style={styles.inputLabel}>Email</Text>
                <TextInput
                    placeholder="Email"
                    style={[styles.input, { borderColor: isFocusedEmail ? 'black' : '#CECCCC' }]}
                    onFocus={() => setIsFocusedEmail(true)}
                    onBlur={() => setIsFocusedEmail(false)}
                    onChangeText={onChangeEmail}
                    value={email}></TextInput>

                <View style={styles.BtnContainer}>
                    <TouchableOpacity style={styles.TouchableContainerBtn} onPress={() => console.log("Login")}>
                        <Text style={styles.TouchableElementBtn}>Enviar</Text>
                    </TouchableOpacity>
                </View>

            </View>
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