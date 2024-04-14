import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
export default (props) => {
    return (
        <>
            <TouchableOpacity style={props.enable? Styles.filterContainerEnable:Styles.filterContainerDisable} >
                <Text style={props.enable? Styles.filterTextEnabled: Styles.filterTextDisabled}>{props.filter}</Text>
            </TouchableOpacity>
        </>
    )
}

const Styles = StyleSheet.create({
    // Filter
    filterContainerEnable: {
        height: 45,
        borderRadius: 12,
        paddingHorizontal: 10,
        backgroundColor: "#7DBA07",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 8,
        marginTop: 10
    },
    filterTextEnabled: {
        color: "#FFFFFF",
        fontSize: 14,
        fontFamily: "Sora-SemiBold"
    },
    filterContainerDisable: {
        height: 45,
        borderRadius: 12,
        paddingHorizontal: 10,
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 8,
        marginTop: 10
    },
    filterTextDisabled: {
        color: "#2F4B4E",
        fontSize: 14,
        fontFamily: "Sora-SemiBold"
    },
})
