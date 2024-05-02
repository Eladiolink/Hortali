import React from "react";
import { StyleSheet, View } from "react-native";

export default ({ph, color, mv} = props) => {


    return (
        <>
            <View style={[{paddingHorizontal:ph ? ph : 32,marginVertical: mv ? mv : 25}]}>
                <View style={[styles.line,{backgroundColor: color? color : "#B7B7B7"}]}></View>
            </View>

        </>
    )
}

const styles = StyleSheet.create({
    line: {
        height: 0.75,
        width: "100%", 
    }
})

