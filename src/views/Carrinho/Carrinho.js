import React from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import BellNotification from "../../components/BellNotification/BellNotification";
import DetailsProduct from "../../components/Carrinho/DetailsProduct";
import DetailsPrice from "../../components/Carrinho/DetailsPrice";
import Line from "../../components/Carrinho/Line";
import Frete from "../../components/Carrinho/Frete";
import FinalPrice from "../../components/Carrinho/FinalPrice";

export default () => {
  return (
    <>
      {/* Top */}

      <ScrollView>

        <View style={styles.backgroundTop}>
          {/* Location and Bell Notification */}
          <View></View>
          <Text style={styles.topTest}>Carrinho</Text>
          <BellNotification number={5} />
        </View>

        {/* Carrinho Detalhes */}
        <View style={styles.productContainer}>

          <View style={styles.imageContainer}>
            <Image style={styles.productImage} source={{ uri: "https://www.infoescola.com/wp-content/uploads/2010/08/cenoura_250834906.jpg" }} />
            <View>

            </View>
          </View>

          <View>
            <Text style={styles.titleProduct}>Cenoura Laranja</Text>

            <DetailsProduct iconName="store_mall_directory" />
            <DetailsProduct iconName="alarm" />
            <DetailsProduct iconName="calendar_today" />
            <DetailsProduct iconName="store_mall_directory" />
            <DetailsPrice price={24.23} installments={29.54} />
          </View>

        </View>
        <Line />

        <Frete />

        <FinalPrice price={24.23} installments={29.54} />

        <Line />

        <View style={[{ alignItems: "center" }]}>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Continuar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

    </>
  )
}

const styles = StyleSheet.create({
  backgroundTop: {
    paddingTop: 22,
    paddingHorizontal: 15,
    paddingBottom: 5,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  topTest: {
    fontSize: 16,
    fontFamily: "Sora-SemiBold",
  },

  // Products
  productContainer: {
    flexDirection: "row",
    paddingHorizontal: 25
  },
  imageContainer: {
    marginHorizontal: 25
  },
  productImage: {
    width: 125,
    height: 125,
    marginTop: 10,
    borderRadius: 16
  },
  titleProduct: {
    fontFamily: "Sora-SemiBold",
    fontSize: 18,
    color: "#8D8D8D"
  },

  // Continuar Button
  buttonContainer: {
    backgroundColor: "#7DBA07",
    height: 30,
    width: 95,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50
  },
  buttonText: {
    color: "#FFFFFF",
    fontFamily: "Sora-SemiBold",
    fontSize: 16
  }
})

