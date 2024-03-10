import React from "react";
import { Button, Text, View } from "react-native";
import GoBack from "../../components/GoBack/GoBack";
import LogoInitial from "../../components/LogoInitial/LogoInitial";

export default ({ navigation }) => {
    return (
        <View>
            <GoBack navigation={navigation}/>
            <LogoInitial marginTop={0}/>
        </View>
    )
}