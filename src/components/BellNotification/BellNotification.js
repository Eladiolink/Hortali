import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from "react-native";
import { FontAwesome, SimpleLineIcons, Ionicons, AntDesign } from '@expo/vector-icons'; // ou a biblioteca de ícones de sua preferência

export default ({ number } = props) => {
    var countNotifications = number
    return (
        <>
            <TouchableOpacity>
                {countNotifications > 0 && <View style={Styles.bellNotificationContainer}><Text style={[{ color: "#FFFFFF", lineHeight: 16 }]}>{countNotifications}</Text></View>}
                <FontAwesome name="bell" color={"black"} size={30} />
            </TouchableOpacity>
        </>
    )
}

const Styles = StyleSheet.create({
    bellNotificationContainer: {
        width: 14,
        height: 14,
        backgroundColor: "#FF9900",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        zIndex: 2,
        top: -10,
        left: 20
    },
})
