import React from 'react'
import { Image } from 'expo-image'
import { StyleSheet, TouchableOpacity, View } from 'react-native'


export default props => {
    return (
        <View>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
                <Image style={styles.backButton} source={require('../../../assets/buttons/backButton.png')} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
        backButton: {
        width: 20,
        height: 20,
        marginHorizontal: 20,
        marginTop: 20
    },
})