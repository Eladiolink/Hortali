import React from "react";
import { StyleSheet, View } from "react-native";

export default () => {


    return (
        <>
            <View style={[{paddingHorizontal:32,marginVertical: 25}]}>
                <View style={styles.line}></View>
            </View>

        </>
    )
}

const styles = StyleSheet.create({
    line: {
        height: 0.75,
        width: "100%",
        backgroundColor: "#B7B7B7"
    }
})

