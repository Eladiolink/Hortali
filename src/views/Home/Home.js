import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from "react-native";
import { FontAwesome, SimpleLineIcons, Ionicons, AntDesign } from '@expo/vector-icons'; // ou a biblioteca de ícones de sua preferência
import styles from "../Login/styles";
import Product from "../../components/principal/Product/Product";
import Filter from "../../components/principal/Filter/Filter";
import BellNotification from "../../components/BellNotification/BellNotification";
export default () => {
  const data = ['Cenoura', 'Cenoura Laranja', 'Cenoura Cenoura', 'Cenoura Cenoura', 'Cenoura Cenoura', 'Cenoura Cenoura', 'Cenoura Cenoura'];
  const filter = [{ item: "Fruta", enable: true }, { item: "Verdura", enable: false }, { item: "Vegetal", enable: false }, { item: "Fruta", enable: false }, { item: "Fruta", enable: false }, { item: "Fruta", enable: false }];
  var countNotifications = 2
  return (
    <>
      {/* Top */}
      <View style={Styles.backgroundTop}>
        {/* Location and Bell Notification */}
        <View style={Styles.locationBell}>
          <View style={Styles.location}>
            <Text style={Styles.localization}>Localização:</Text>
            <View style={Styles.localizationPropitiesContainer}>
              <Text style={Styles.localizationPropities}>Centro, Salgueiro</Text>
              <SimpleLineIcons style={[{ marginLeft: 10 }]} name="arrow-down" size={14} color="#FFFFFF" />
            </View>
          </View>
          
          <BellNotification number={5} />
        </View>

        {/* Search Input */}
        <View style={[{ flex: 1, alignItems: "center", justifyContent: "center" }]} >
          <View style={Styles.inputContainer}>
            <TouchableOpacity style={styles.SearchIcon}>
              <AntDesign name="search1" size={24} color="#7DBA07" />
            </TouchableOpacity>
            <TextInput placeholder="Pesquisar" style={Styles.inputSearch} />
            <TouchableOpacity style={Styles.BtnsContainer}>
              <Ionicons name="filter" size={24} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={[{ height: 65, alignContent: "center" }]}>
          {filter.map((item, index) => (
            <Filter key={index} filter={item.item} enable={item.enable} />
          ))}
        </ScrollView>

        {/* Products */}
        <ScrollView vertical showsVerticalScrollIndicator={false} style={Styles.productsContainer}>

          {data.map((item, index) => {
            if (index % 2 === 0) {
              return (
                <View key={index} style={[{ flexDirection: "row" }]}>
                  <Product />
                  {/* Verifica se existe um próximo item antes de renderizá-lo */}
                  {index + 1 < data.length && (
                    <Product />
                  )}
                </View>
              );
            }
            // Retorna null para índices ímpares
            return null;
          })}

        </ScrollView>


      </View>
    </>
  )
}

const Styles = StyleSheet.create({
  backgroundTop: {
    height: 180,
    backgroundColor: "gray",
    padding: 15
  },
  locationBell: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  location: {
    flexDirection: "column",
  },
  localization: {
    fontFamily: "Sora-Regular",
    fontSize: 14,
    color: "#B7B7B7"
  },
  localizationPropitiesContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  localizationPropities: {
    fontFamily: "Sora-SemiBold",
    fontSize: 16,
    color: "#FFFFFF"
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
    height: 50,
    marginHorizontal: "2%",
    paddingVertical: 5,
    paddingHorizontal: 10
  },
  inputSearch: {
    flex: 1,
    height: 35,
    marginHorizontal: 4,
    fontFamily: "Sora-Regular"
  },
  BtnsContainer: {
    backgroundColor: "#7DBA07",
    borderRadius: 50,
    width: 35,
    height: 35,
    justifyContent: "center",
    alignItems: "center"
  },
  SearchIcon: {
    height: 35,
    width: 35,
    alignContent: "center",
    justifyContent: "center"
  },


  // Filter
  filterContainer: {
    height: 45,
    borderRadius: 12,
    paddingHorizontal: 10,
    backgroundColor: "#7DBA07",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 8,
    marginTop: 10
  },
  filterText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontFamily: "Sora-SemiBold"
  },

  // Products
  productsContainer: {
    paddingHorizontal: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 245,
    marginTop: 0,
  },
})
