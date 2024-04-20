import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default ( { price, installments } = props) => {
    return (
        <>
            <View style={[{paddingHorizontal:60}]}>
                <Text style={styles.title}>Preço Final</Text>
                <Text style={styles.vista}>R$ {price+6} (à vista)</Text>
                <Text style={styles.credito}>R$ {((price+6)*1.05).toFixed(2)} (crédito)</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    title:{
        color:"#7DBA07",
        fontFamily:"Sora-Bold",
        fontSize:16
    },
    vista:{
        color:"#8D8D8D",
        fontFamily:"Sora-SemiBold",
        fontSize: 14
    },
    credito:{
        color:"#8D8D8D",
        fontFamily:"Sora-Regular",
        fontSize: 13
    }
})

