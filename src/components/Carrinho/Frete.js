import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default ({ } = props) => {
    return (
        <>
            <View style={styles.freteContainer}>
                <View>
                    <Text style={styles.title}>Valor do Frete</Text>
                    <Text style={styles.subTitle}>R$ 32.00</Text>
                </View>
                <View>
                    <Text style={styles.title}>CEP</Text>
                    <TextInput keyboardType="numeric"  style={styles.input} placeholder="00.000-000"></TextInput>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    freteContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:60
    },
    title:{
        color:"#7DBA07",
        fontFamily:"Sora-Bold",
        fontSize:15
    },
    subTitle:{
        color:"#8D8D8D",
        fontFamily:"Sora-SemiBold",
        fontSize:14
    },
    input:{
        borderWidth: 1,
        borderRadius: 50,
        borderColor: "#8D8D8D",
        paddingHorizontal: 10,
        paddingVertical: 5,
        width: 125,
        height: 25,
        lineHeight: 25,
        fontFamily: "Sora-SemiBold",
        fontSize: 12
    }

})

