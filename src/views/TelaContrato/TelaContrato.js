import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LogoInitial from "../../components/LogoInitial/LogoInitial"
import GoBack from "../../components/GoBack/GoBack"

const LayoutTermosCondicoes = ({ isChecked, handleCheckBoxToggle, handleAcceptTerms }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={handleCheckBoxToggle}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View
            style={{
              width: 20,
              height: 20,
              borderWidth: 1,
              borderColor: 'black',
              marginRight: 10,
              backgroundColor: isChecked ? 'blue' : 'transparent',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {isChecked && <Text style={{ color: 'white' }}>✓</Text>}
          </View>
          <Text style={{ textDecorationLine: 'underline' }}>Estou ciente dos termos</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={!isChecked}
        style={{
          backgroundColor: isChecked ? '#7DBA07' : 'lightgray',
          marginVertical: 5,
          alignItems: "center",
          justifyContent: "center",
          width: 115,
          borderRadius: 50,
          height: 40
        }}
        onPress={handleAcceptTerms}
      >
        <Text style={{ color: 'white' }}>Finalizar</Text>
      </TouchableOpacity>
    </View>
  );
};

const TelaContrato = () => {
  const [isChecked, setIsChecked] = useState(false);
  const navigation = useNavigation();

  const handleCheckBoxToggle = () => {
    setIsChecked(!isChecked);
  };

  const handleAcceptTerms = () => {
    if (isChecked) {
      navigation.navigate("Retorno");
    }
  };

  return (
    <View style={styles.container}>
      <GoBack navigation={navigation} />
      <LogoInitial marginTop={0}/>
      <Text style={styles.titulo}>Termos de Serviço</Text>
      <View style={styles.caixaTextoContainer}>
        <View style={styles.caixaTextoWrapper}>
          <ScrollView>
            <View style={styles.caixaTexto}>
              <Text style={styles.texto}>
                <Text style={{color: '#7DBA07'}}><Text style={{fontWeight: 'bold'}}>1. Objetivo do Aplicativo:</Text></Text>
                {'\n'}
                O aplicativo "Hortalí" tem como objetivo fornecer uma plataforma para a compra e venda de produtos orgânicos, conectando produtores locais e consumidores interessados em alimentos saudáveis e sustentáveis.
                {'\n\n'}
                <Text style={{color: '#7DBA07'}}><Text style={{fontWeight: 'bold'}}>2. Uso Responsável:</Text></Text>
                {'\n'}
                Os usuários concordam em utilizar o aplicativo "Hortalí" de forma responsável e ética, respeitando os termos de serviço e as leis aplicáveis.
                {'\n\n'}
                <Text style={{color: '#7DBA07'}}><Text style={{fontWeight: 'bold'}}>3. Cadastro e Informações Pessoais:</Text></Text>
                {'\n'}
                Ao se cadastrar no aplicativo "Hortalí", os usuários concordam em fornecer informações precisas e atualizadas, incluindo nome, endereço, e outras informações relevantes para a compra e entrega dos produtos.
                {'\n\n'}
                <Text style={{color: '#7DBA07'}}><Text style={{fontWeight: 'bold'}}>4. Compra e Venda de Produtos:</Text></Text>
                {'\n'}
                Os usuários concordam em utilizar o aplicativo "Hortalí" apenas para fins de compra e venda de produtos orgânicos.
                Os produtores concordam em fornecer produtos de alta qualidade, cultivados de acordo com os padrões orgânicos e em conformidade com as regulamentações locais.
                {'\n\n'}
                <Text style={{color: '#7DBA07'}}><Text style={{fontWeight: 'bold'}}>5. Pagamentos e Transações:</Text></Text>
                {'\n'}
                Os usuários concordam em pagar pelos produtos adquiridos através do aplicativo "Hortalí" de acordo com os métodos de pagamento aceitos.
                O aplicativo "Hortalí" não se responsabiliza por transações financeiras entre usuários. Qualquer disputa relacionada a pagamentos deve ser resolvida entre as partes envolvidas.
                {'\n\n'}
                <Text style={{color: '#7DBA07'}}><Text style={{fontWeight: 'bold'}}>6. Política de Privacidade:</Text></Text>
                {'\n'}
                Os usuários concordam com a política de privacidade do aplicativo "Hortalí", que descreve como as informações pessoais são coletadas, utilizadas e protegidas.
                {'\n\n'}
                <Text style={{color: '#7DBA07'}}><Text style={{fontWeight: 'bold'}}>7. Responsabilidade do Usuário:</Text></Text>
                {'\n'}
                Os usuários são responsáveis por manter a segurança de suas contas e senhas, e por qualquer atividade realizada em suas contas.
                Os produtores são responsáveis por garantir a precisão das informações sobre seus produtos e pela qualidade dos produtos entregues aos consumidores.
                {'\n\n'}
                <Text style={{color: '#7DBA07'}}><Text style={{fontWeight: 'bold'}}>8. Cancelamento e Rescisão:</Text></Text>
                {'\n'}
                Os usuários têm o direito de cancelar suas contas no aplicativo "Hortalí" a qualquer momento, caso não desejem mais utilizar os serviços oferecidos.
                O aplicativo "Hortalí" reserva-se o direito de rescindir contas de usuários que violem os termos de serviço ou que pratiquem atividades fraudulentas ou ilegais.
                {'\n\n'}
                Ao concordar com estes termos, os usuários demonstram seu entendimento e aceitação das regras e responsabilidades associadas ao uso do aplicativo "Hortalí".
              </Text>
            </View>
          </ScrollView>
        </View>
      </View>
      <View style={styles.footer}>
        <LayoutTermosCondicoes isChecked={isChecked} handleCheckBoxToggle={handleCheckBoxToggle} handleAcceptTerms={handleAcceptTerms} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  texto: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify',
  },
  caixaTextoContainer: {
    flex: 1,
    marginBottom: 80,
  },
  caixaTextoWrapper: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginBottom: 20,
    overflow: 'hidden',
  },
  caixaTexto: {
    padding: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
  },
});

export default TelaContrato;
