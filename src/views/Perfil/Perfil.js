import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, Dimensions, View } from "react-native";
const { width } = Dimensions.get('window');

export default () => {
    return (
        <>
            {/* Header */}
            <View style={styles.header}>
                <View style={[{ alignItems: "center", justifyContent: "center" }]}>
                    <Image style={styles.logo} source={require('../../../assets/icon.png')} />
                    {/* <Text>Perfil</Text> */}
                </View>
            </View>

            {/* Coisas */}
            <View style={[{ flex: 1 }]}>
                {/* User content */}
                <View style={styles.userContainer}>

                    <Image style={[{ height: 85, width: 85, marginVertical: 10 }]} source={require("../../../assets/Perfil-full.png")} />

                    <View style={[{ alignContent: "center", justifyContent: "center", marginVertical: 20 }]}>
                        <View>
                            <View style={[{ flexDirection: "row" }]}>
                                <Text style={[{ fontFamily: "Sora-SemiBold" }]}>Cebolinha Limonada</Text>
                                <Image style={[{ height: 15.1, width: 15.8, borderRadius: 50, marginHorizontal: 5, }]} source={require("../../../assets/icons/Verified.png")} />
                            </View>
                            <Text style={[{ textAlign: "center", fontFamily: "Sora-SemiBold", color: "#8D8D8D" }]}>Nível 7</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.userContainer}>
                    <Text style={[{ color: "#7DBA07", fontFamily: "Sora-SemiBold", fontSize: 14 }]}>Descrição</Text>
                    <Text style={[{ fontFamily: "Sora-SemiBold", fontSize: 12, textAlign: "justify", color: "#8D8D8D", padding: 5 }]}>A agricultura Cebolinhos é renomada na produção  de produtos orgânicos, sendo especializada na venda de cenoura, batata inglesa, macaxeira...</Text>
                    <TouchableOpacity><Text style={[{ color: "#7DBA07", fontFamily: "Sora-SemiBold", fontSize: 12 }]}>Continuar lendo.</Text></TouchableOpacity>
                </View>

                <View style={[styles.userContainer, { height: 1000, paddingTop:20 }]}>

                    <View style={styles.cc}>
                        <Image style={styles.icon} source={require('../../../assets/account_circle.png')} />
                        <TouchableOpacity style={styles.textC}>
                            <Text style={styles.text}>Dados Pessoais</Text>
                            <Image style={styles.icon} source={require('../../../assets/keyboard_arrow_right.png')} />
                        </TouchableOpacity>
                    </View>

                    <View style={[{borderWidth:0.2, marginVertical:5 ,width:250,borderColor:"#8D8D8D"}]}></View>

                    <View style={styles.cc}>
                        <Image style={styles.icon} source={require('../../../assets/library_books.png')} />
                        <TouchableOpacity style={styles.textC}>
                            <Text style={styles.text}>Serviços</Text>
                            <Image style={styles.icon} source={require('../../../assets/keyboard_arrow_right.png')} />
                        </TouchableOpacity>
                    </View>

                    <View style={[{borderWidth:0.2, marginVertical:5 ,width:250,borderColor:"#8D8D8D"}]}></View>

                    <View style={styles.cc}>
                        <Image style={styles.icon} source={require('../../../assets/collections_bookmark.png')} />
                        <TouchableOpacity style={styles.textC}>
                            <Text style={styles.text}>Termos e Documentos</Text>
                            <Image style={styles.icon} source={require('../../../assets/keyboard_arrow_right.png')} />
                        </TouchableOpacity>
                    </View>

                    <View style={[{borderWidth:0.2, marginVertical:5 ,width:250,borderColor:"#8D8D8D"}]}></View>

                    <View style={styles.cc}>
                        <Image style={styles.icon} source={require('../../../assets/group.png')} />
                        <TouchableOpacity style={styles.textC}>
                            <Text style={styles.text}>Convidart amigos</Text>
                            <Image style={styles.icon} source={require('../../../assets/keyboard_arrow_right.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    icon:{
        width: 35,
        height: 35,
        marginLeft: 20,
        marginRight: 15
    },
    cc: {
        flexDirection: "row"
    },
    textC: {
        flexDirection:"row",
        justifyContent: "space-between",
        alignItems:"center",
        // borderColor: "red",
        width: width - 100,
        // borderWidth: 2
    },
    text: {
        textAlign: "left",
        fontFamily: "Sora-SemiBold",
        color: "#7DBA07"
    },
    userContainer: {
        alignItems: "center",
        marginHorizontal: 20,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: "#FFF",
        borderStyle: 'solid',
        borderRadius: 12,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    header: {
        alignItems: "center",
        justifyContent: "center"
    },
    logo: {
        marginTop: 5,
        width: 60,
        height: 60
    },
    LogoText: {
        fontSize: 38,
        marginHorizontal: 5,
        color: '#148C00'
    }
})