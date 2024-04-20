import * as React from "react";
import { useFonts } from "expo-font";
import { StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Login from "./src/views/Login/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import EsqueceuSenha from "./src/views/EsqueceuSenha/EsqueceuSenha";
import Cadastro from "./src/views/Cadastro/Cadastro";
import CadastroContinuacao from "./src/views/Cadastro/CadastroContinuacao";
import TelaContrato from "./src/views/TelaContrato/TelaContrato";
import Retorno from "./src/views/TelaContrato/Retorno";
import Principal from "./src/views/Principal/Principal";


const Stack = createStackNavigator()

export default App = () => {
  const [fontsLoaded, error] = useFonts({
    "Poppins-ExtraLight": require("./assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Sora-Regular": require("./assets/fonts/Sora-Regular.ttf"),
    "Sora-SemiBold": require("./assets/fonts/Sora-SemiBold.ttf"),
    "Sora-Bold": require("./assets/fonts/Sora-Bold.ttf")

  });


  if (!fontsLoaded) return null
  var login = true
  if (login) {
    return (
      <SafeAreaView style={styles.container}>
        <Principal></Principal>
      </SafeAreaView>
    )
  } else {


    return (
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}  >

            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Cadastro" component={Cadastro} />
            <Stack.Screen name="CadastroContinuacao" component={CadastroContinuacao} />
            <Stack.Screen name="RememberPassword" component={EsqueceuSenha} />
            <Stack.Screen name="TelaContrato" component={TelaContrato} />
            <Stack.Screen name="Retorno" component={Retorno} />

          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
    fontFamily: "Poppins-Light"
  },
});
