import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default props => {
     const [selectedValue, setSelectedValue] = useState('');

    return (
        <View>
            <Text style={styles.inputLabel}>{props.label}</Text>
            <View style={styles.input}>
                <Picker
                    selectedValue={selectedValue}
                    onValueChange={(itemValue, itemIndex) => {
                        setSelectedValue(itemValue)
                        props.onChange(itemValue)
                    }}>

                    {props.values.map((item, index) => (
                        <Picker.Item  key={index} label={item} value={item} />
                    ))}
                </Picker>
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
    }, input: {
        height: 40,
        justifyContent: "center",
        marginHorizontal: 50,
        borderRadius: 50,
        borderWidth: 0.8,
        borderColor: '#CECCCC',
    },
})