import React from "react"
import { Text, View } from "react-native"
import LogoInitial from "../../components/LogoInitial/LogoInitial"
import GoBack from "../../components/GoBack/GoBack"

export default () => {
    return(
        <View>
            <GoBack/>
            <LogoInitial marginTop={0}/>

        </View>
    )
}