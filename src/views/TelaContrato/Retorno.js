import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LogoInitial from "../../components/LogoInitial/LogoInitial";

const Retorno = () => {
  const navigation = useNavigation();

  const handleReturnToLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
         <LogoInitial marginTop={0} />
      <Text style={styles.texto}>Cadastro realizado com sucesso!</Text>
      <TouchableOpacity
        style={styles.botao}
        onPress={handleReturnToLogin}
      >
        <Text style={styles.textoBotao}>Retornar para o Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontSize: 20,
    marginBottom: 20,
  },
  botao: {
    backgroundColor: '#7DBA07',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderRadius: 50,
   
  },
  textoBotao: {
    color: 'white',
    fontSize: 16,
  },
});

export default Retorno;
