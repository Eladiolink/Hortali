import { StyleSheet } from "react-native";

export default StyleSheet.create({
    header: {
        alignItems: "center",
        marginTop: 100
    },
    logo: {
        width: 95,
        height: 95
    },
    LogoText: {
        fontSize: 38,
        marginHorizontal: 5,
        color: '#148C00'
    },
    inputLabel:{
        marginTop: 20,
        fontSize: 15,
        marginHorizontal: 60,
        fontFamily: "Poppins-Regular"
    },
    input: {
        height: 40,
        marginHorizontal: 50,
        borderRadius: 50,
        padding: 10,
        borderWidth: 0.8, // Largura da borda
        borderColor: 'black', // Cor da borda (opcional)
    },
    TouchableContainerLink: {
        alignItems: "center"
    },
    TouchableElementLink: {
        color: "#148c00"
    },
    BtnContainer:{
        alignItems: "center",
        marginTop: 20
    },
    TouchableContainerBtn: {
        alignItems: "center",
        backgroundColor: "#CECCCC",
        width: 115,
        borderRadius: 50
    },
    TouchableElementBtn: {
        color: "black",
        fontFamily: "Poppins-ExtraLight",
        fontSize: 18
    }
})