import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
export default () => {

    return (
        <>
            <View style={Styles.productContainer}>
                <TouchableOpacity>
                    <Image style={Styles.imageProduct} source={{ uri: "https://www.infoescola.com/wp-content/uploads/2010/08/cenoura_250834906.jpg" }} />
                </TouchableOpacity>
                <View style={Styles.infosContainer}>
                    <TouchableOpacity style={[{ justifyContent: "space-between" }]}>
                        <Text style={[Styles.textProduct, { color: "#2F2D2C" }]}>Cenoura</Text>
                        <Text style={[Styles.textProduct, { color: "#2F4B4E" }]}>R$2,75</Text>
                    </TouchableOpacity>
                    <View >
                        <TouchableOpacity style={[Styles.buttonsProduct, { marginBottom: 2 }]}><Text style={[{ color: "#FFFFFF" }]}>-</Text></TouchableOpacity>
                        <TouchableOpacity style={Styles.buttonsProduct}><Text style={[{ color: "#FFFFFF" }]}>+</Text></TouchableOpacity>
                    </View>
                </View>

            </View>
        </>
    )
}

const Styles = StyleSheet.create({
    // Products
    productsContainer: {
        borderWidth: 1,
        borderColor: "black",
        paddingHorizontal: 20
    },
    productContainer: {
        marginHorizontal: 20,
        width: 150,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 5,
        borderRadius: 16,
    },
    imageProduct: {
        borderRadius: 16,
        height: 115,
        width: 140
    },
    infosContainer: {
        width: 140,
        padding: 3,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    textProduct: {
        fontFamily: "Sora-SemiBold",
        fontSize: 15,
    },
    buttonsProduct: {
        backgroundColor: "#7DBA07",
        justifyContent: "center",
        alignItems: "center",
        width: 30,
        height: 30,
        borderRadius: 50
    }
})
