import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default ({ price , installments} = props) => {
    var path = require("../../../assets/icons/attach_money.png")
    

    return (
        <>
            <View style={styles.venda_entrega}>
                <View style={[{ marginRight: 5}]}>
                    <Image style={styles.logo} source={path} />

                </View>

                <View style={styles.text}>
                    <Text style={styles.venda_entrega_text}>{"R$"+price+" (à vista)"}</Text>
                    <Text style={styles.text}>{"R$"+installments+" (crédito)"}</Text>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    venda_entrega: {
        flexDirection: "row",
        marginTop:10
    },
    venda_entrega_text: {
        fontSize: 14,
        fontFamily: "Sora-SemiBold",
        color: "#8D8D8D"
    },
    text: {
        fontSize: 14,
        fontFamily: "Sora-Regular",
        color: "#8D8D8D"
    }
})

