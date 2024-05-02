import React from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import BellNotification from "../../components/BellNotification/BellNotification";
import { AntDesign } from '@expo/vector-icons'; // ou a biblioteca de ícones de sua preferência
import Line from "../../components/Carrinho/Line";
import GoBack from "../../components/GoBack/GoBack";


export default ({navigation,route}) => {
    const { data } = route.params;

    console.log(data.id)
    return (
        <>
            {/* Top */}
            <View style={styles.backgroundTop}>
                {/* Location and Bell Notification */}
                <View style={[{justifyContent:"center"}]}><GoBack mt={0} navigation={navigation} /></View>
                <Text style={styles.topTest}>Detalhes</Text>
                <BellNotification number={5} />
            </View>

            {/* Conteúdo */}
            <View style={[{ paddingHorizontal: 50, flex: 1, justifyContent: "space-between" }]}>

                <View>
                    <Image style={styles.productImage} source={{ uri: "https://www.infoescola.com/wp-content/uploads/2010/08/cenoura_250834906.jpg" }} />

                    <View style={[{ flexDirection: "row", justifyContent: "space-between", marginTop: 5 }]}>
                        <TouchableOpacity style={[{ flexDirection: "row", alignItems: "center" }]}>
                            <AntDesign name="star" size={20} color={"#FBBE21"} />
                            <Text style={[{ fontFamily: "Sora-SemiBold", fontSize: 14, marginHorizontal: 3, color: "#2F2D2C" }]}>4.4</Text>
                            <Text style={[{ fontFamily: "Sora-Regular", fontSize: 11, color: "#8D8D8D" }]}>(329)</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image style={[{ height: 25, width: 25 }]} source={require("../../../assets/icons/Favorite.png")} />
                        </TouchableOpacity>
                    </View>

                    <Text style={[{ fontFamily: "Sora-SemiBold", color: "#2F2D2C", fontSize: 18 }]}>Cenoura Laranja</Text>

                    <Line ph={1} mv={10} />
                    {/* Perfil */}
                    <View style={[{ flexDirection: "row" }]}>
                        <View style={[{ marginRight: 10, paddingTop: 10 }]}>
                            <Image style={[{ height: 46, width: 46 }]} source={require("../../../assets/perfil.png")} />
                        </View>
                        <View>
                            <View style={[{ flexDirection: "row", justifyContent: "center", alignItems: "baseline", marginBottom: 2 }]}>
                                <Text style={[{ fontFamily: "Sora-SemiBold", color: "#2F2D2C", fontSize: 16, marginRight: 5 }]}>Cebolinha Limonada</Text>
                                <Image style={[{ height: 15.1, width: 15.8, borderRadius: 50 }]} source={require("../../../assets/icons/Verified.png")} />
                            </View>
                            <View style={[{ flexDirection: "row", marginVertical: 2 }]}>
                                <Image style={[{ height: 26, width: 26, borderRadius: 50, marginRight: 5 }]} source={require("../../../assets/icons/premium_1.png")} />
                                <Image style={[{ height: 26, width: 26, borderRadius: 50, marginRight: 5 }]} source={require("../../../assets/icons/premium_2.png")} />
                            </View>
                            <TouchableOpacity>
                                <Text style={[{ fontFamily: "Sora-Bold", fontSize: 11, color: "#7DBA07" }]}>Ver Perfil</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Line ph={1} mv={10} />
                    <Text style={[{ color: "#2F2D2C", fontSize: 13, fontFamily: "Sora-SemiBold" }]}>Descrição</Text>
                    <View style={[]}>
                        <Text>
                            Este campo é destinado a qualquer comentário que o produtor considere relevante para seu produto e que não tenha sido destacado...
                        </Text><TouchableOpacity style={[]}><Text style={[{ color: "#7DBA07", fontFamily: "Sora-SemiBold" }]}>Continuar lendo</Text></TouchableOpacity>
                    </View>
                </View>


            </View>
            {/* Preç */}
            <View style={styles.precoContainer}>
                <View style={[{marginRight:10}]}>
                    <Text style={[{fontFamily:"Sora-SemiBold",fontSize:16,color:"#7DBA07"}]}>Preço</Text>
                    <Text style={[{fontFamily:"Sora-SemiBold",fontSize:18,color:"#9B9B9B",marginTop:5}]}>R$ 44,00</Text>
                    <Text style={[{fontFamily:"Sora-SemiBold",fontSize:12,color:"#FF3200"}]}>20% desconto</Text>
                </View>
                <View style={[{marginRight:10}]}>
                    <Text style={[{fontFamily:"Sora-SemiBold",fontSize:16,color:"#7DBA07"}]}>Qtd.</Text>
                    <TextInput placeholder="ex: 2" keyboardType="numeric" style={styles.input}></TextInput>
                    <Text></Text>
                </View>
                <View>
                    <Text style={[{fontFamily:"Sora-SemiBold",fontSize:16}]}></Text>
                    <TouchableOpacity style={styles.adiconar}><Text style={[{color:"#FFFFFF",fontFamily:"Sora-SemiBold"}]}>Adicionar</Text></TouchableOpacity>
                    <Text></Text>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    backgroundTop: {
        paddingTop: 22,
        paddingHorizontal: 15,
        paddingBottom: 5,
        flexDirection: "row",
        alignContent:"center",
        justifyContent: "space-between"
    },
    topTest: {
        fontSize: 16,
        fontFamily: "Sora-SemiBold",
    },

    //   Product
    productImage: {
        width: "100%",
        height: 210,
        borderRadius: 12,
        marginTop: 20
    },

    // Preco
    precoContainer: {
        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 15,
        paddingHorizontal: 50,
        flexDirection:"row"
    },
    input:{
        marginTop:5,
        borderWidth:1,
        borderRadius:50,
        borderColor:"#9B9B9B",
        width: 80,
        height:35,
        alignContent:"center",
        paddingHorizontal: 20
    },
    adiconar:{
        backgroundColor:"#7DBA07",
        marginTop:5,
        height:35,
        alignItems:"center",
        justifyContent:"center",
        paddingHorizontal: 10,
        borderRadius:50,
    }
})

