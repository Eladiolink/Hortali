import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons'; // ou a biblioteca de ícones de sua preferência

const Tab = createBottomTabNavigator();

import Home from "../Home/Home";
import Carrinho from "../Carrinho/Carrinho";
import Favoritos from "../Favoritos/Favoritos";
import Perfil from "../Perfil/Perfil";

export default ({ navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, tabBarActiveTintColor: "#7DBA07", tabBarIconStyle: { width: 38, height: 38 },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Perfil}
        options={{
          tabBarLabel: () => (null),
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" color={color} size={size} />
          ),
        }
        }
      />

      <Tab.Screen
        name="Favoritos"
        component={Favoritos}
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
        name="Perfil"
        component={Perfil}
        options={{
          tabBarLabel: () => (null),
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user-circle-o" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
