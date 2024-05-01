import React from 'react'
import { Image } from 'expo-image'
import { StyleSheet, TouchableOpacity, View } from 'react-native'


export default ( {navigation,mt} = props) => {
    return (
        <View style={{backgroundColor: 'transparent'}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image style={[styles.backButton,{marginTop: mt != null? mt : 20}]} source={require('../../../assets/buttons/backButton.png')} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
        backButton: {
        width: 20,
        height: 20,
        marginHorizontal: 20,
    },
})