import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";


export default props => {
    const [isFocusedEmail, setIsFocusedEmail] = useState(false);

    return (
        <View style={[{flex: props.flex!= null ? props.flex: 1}]}>
            <Text style={[styles.inputLabel,{marginHorizontal: props.flex!=null ? 10 : 60}]}>{props.label}</Text>
            <TextInput
                keyboardType={props.keyboardType}
                placeholder={props.placeholder}
                style={[
                    styles.input,
                    { borderColor: isFocusedEmail ? 'black' : '#CECCCC' },
                    { marginHorizontal: props.mr!=null ? props.mr : 50 }
                ]}
                secureTextEntry={props.isSecurity}
                onFocus={() => setIsFocusedEmail(true)}
                onBlur={() => setIsFocusedEmail(false)}
                onChangeText={props.onChange}
                maxLength={props.maxLength}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputLabel: {
        marginTop: 20,
        fontSize: 15,
        fontFamily: "Poppins-Regular"
    },
    input: {
        height: 40,
        borderRadius: 50,
        padding: 10,
        borderWidth: 0.8,
        borderColor: 'black',
    },
})