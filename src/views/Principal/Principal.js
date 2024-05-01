import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from "react-native";
import { FontAwesome, MaterialIcons } from '@expo/vector-icons'; // ou a biblioteca de ícones de sua preferência

const Tab = createBottomTabNavigator();

import Home from "../Home/Home";
import Favoritos from "../Favoritos/Favoritos";
import Carrinho from "../Carrinho/Carrinho";
import Detalhes from "../Detalhes/Detalhes";

export default () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{ headerShown: false, tabBarActiveTintColor: "#7DBA07", tabBarIconStyle: { width: 38, height: 38 }, }}
      >
        <Tab.Screen
          name="Favoritos"
          component={Detalhes}
          options={{
            tabBarLabel: () => (null),
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="favorite" size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Carrinho"
          component={Carrinho}
          options={{
            tabBarLabel: () => (null),
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="shopping-cart" size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: () => (null),
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="home" color={color} size={size} />
            ),
          }
          }
        />

      </Tab.Navigator>
    </NavigationContainer>
  )
}
