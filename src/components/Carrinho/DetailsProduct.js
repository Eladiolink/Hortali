import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default ({ iconName } = props) => {
    var path
    var vendedor
    switch (iconName) {
        case "store_mall_directory":
            path = require("../../../assets/icons/store_mall_directory.png")
            vendedor = "Venda e Entrega por"
            break;
        case "alarm":
            path = require("../../../assets/icons/alarm.png")
            vendedor = "Desconto válido até"
            break;
        case "calendar_today":
            path = require("../../../assets/icons/calendar_today.png")
            vendedor = "Prazo de Entrega"
            break;
    }

    return (
        <>
            <View style={styles.venda_entrega}>
                <View style={[{ marginRight: 5}]}>
                    <Image style={styles.logo} source={path} />

                </View>

                <View style={styles.text}>
                    <Text style={styles.venda_entrega_text}>{vendedor}</Text>
                    <Text style={styles.text}>Agricultura Batosai</Text>
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
        fontFamily: "Sora-SemiBold",
        color: "#7DBA07"
    }
})

