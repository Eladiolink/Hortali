import React, { useState, memo } from 'react';
import { ScrollView, View, Text, TextInput, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Importe o ícone de coração
import BellNotification from "../../components/BellNotification/BellNotification";

const Favoritos = () => {
  const [produtos, setProdutos] = useState([
    { 
      id: '1', 
      nome: 'Cenoura laranja', 
      fornecedor: 'Agricultura Batosai', 
      disponivel: false, 
      imagem: 'https://www.infoescola.com/wp-content/uploads/2010/08/cenoura_250834906.jpg',
      estrelasAmarelas: 3,
      estrelasCinza: 2
    },
    { 
      id: '2', 
      nome: 'Couve-flor', 
      fornecedor: 'Agricultura Dois Sóis', 
      disponivel: true, 
      imagem: 'https://www.ceasacampinas.com.br/sites/ceasacampinas.com.br/files/styles/capa_da_dica/public/dicas/imagens/234840produto-102-1_0.jpg',
      estrelasAmarelas: 4,
      estrelasCinza: 1
    },
    { 
      id: '4', 
      nome: 'Mamão papaia', 
      fornecedor: 'Vila Rica S. A.', 
      disponivel: false, 
      imagem: 'https://img.freepik.com/fotos-gratis/mamao-fresco_144627-34201.jpg',
      estrelasAmarelas: 2,
      estrelasCinza: 3
    },
    { 
      id: '3', 
      nome: 'Batata inglesa', 
      fornecedor: 'Agricultura Dois Sóis', 
      disponivel: true, 
      imagem: 'https://ibassets.com.br/ib.item.image.large/l-fc3f67f0ea3541448cc0189ff11ff55f.jpeg',
      estrelasAmarelas: 5,
      estrelasCinza: 0
    },

    { 
      id: '5', 
      nome: 'Cenoura laranja', 
      fornecedor: 'Agricultura Batosai', 
      disponivel: false, 
      imagem: 'https://www.infoescola.com/wp-content/uploads/2010/08/cenoura_250834906.jpg',
      estrelasAmarelas: 3,
      estrelasCinza: 2
    },
    { 
      id: '7', 
      nome: 'Mamão papaia', 
      fornecedor: 'Vila Rica S. A.', 
      disponivel: false, 
      imagem: 'https://img.freepik.com/fotos-gratis/mamao-fresco_144627-34201.jpg',
      estrelasAmarelas: 2,
      estrelasCinza: 3
    },
  ]);

  const [termoBusca, setTermoBusca] = useState('');

  const produtosFiltrados = produtos.filter(produto => {
    const nomeMinusculo = produto.nome.toLowerCase();
    const termoMinusculo = termoBusca.toLowerCase();
    return nomeMinusculo.includes(termoMinusculo);
  });

  const renderStars = (estrelasAmarelas, estrelasCinza) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < estrelasAmarelas) {
        stars.push(<Star filled key={i} />);
      } else if (i < estrelasAmarelas + estrelasCinza) {
        stars.push(<Star key={i} />);
      } else {
        break;
      }
    }
    return stars;
  };

  const renderItem = ({ item }) => {
    const { nome, fornecedor, disponivel, imagem, estrelasAmarelas, estrelasCinza } = item;
    const statusDisponibilidade = disponivel ? 'Disponível' : 'Esgotado';
  
    return (
      <View style={styles.item}>
        <Image source={{ uri: imagem }} style={styles.imagemProduto} />
        <View style={styles.textoProduto}>
          <Text style={styles.nomeProduto}>{nome}</Text>
          <View style={styles.starsContainer}>
            {renderStars(estrelasAmarelas, estrelasCinza)}
          </View>
          <View style={styles.fornecedorContainer}>
            <Text style={styles.fornecedorProduto}>{fornecedor}</Text>
            <View style={styles.heartContainer}>
              <TouchableOpacity>
                <Ionicons name="heart" size={32} color="#7DBA07" style={styles.heartIcon} />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={[styles.statusDisponibilidade, { color: disponivel ? '#8D8D8D' : '#ff0000' }]}>
            {statusDisponibilidade}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backgroundTop}>
        {/* Location and Bell Notification */}
        <View></View>
        <Text style={[styles.topText, styles.titulo]}>Favoritos</Text>
        <BellNotification number={5} />
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.inputBuscaContainer}>
          <Ionicons name="search" size={24} color="#7DBA07" style={styles.searchIcon} />
          <TextInput
            style={styles.inputBusca}
            placeholder="Faça sua busca..."
            value={termoBusca}
            onChangeText={setTermoBusca}
          />
        </View>
      </View>

      <ScrollView>
        {produtosFiltrados.map(item => (
          <View key={item.id}>
            {renderItem({ item })}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const Star = memo(({ filled }) => {
  return (
    <View style={styles.star}>
      <Text style={{ color: filled ? '#FBBE21' : '#9B9B9B', fontSize: 20,  fontFamily: "Sora-SemiBold" }}>★</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundTop: {
    paddingTop: 22,
    paddingHorizontal: 15,
    paddingBottom: 5,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: "Sora-SemiBold",
  },
  inputContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  inputBuscaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#8D8D8D',
    borderRadius: 20, // Adicionando cantos arredondados
    width: '60%', // Reduzindo a largura da caixa de busca para metade da largura da tela
  },
  searchIcon: {
    marginLeft: 10,
  },
  inputBusca: {
    flex: 1,
    height: 40,
    padding: 10,
    color: '#8D8D8D',
    fontFamily: "Sora-SemiBold",
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#B7B7B7',
  },
  imagemProduto: {
    width: 90,
    height: 85,
    marginRight: 20,
    borderRadius: 10, 
    marginLeft: 25,
  },
  textoProduto: {
    flex: 1,
  },
  nomeProduto: {
    fontFamily: "Sora-SemiBold",
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8D8D8D', // Cor do nome do produto
  },
  fornecedorProduto: {
    fontFamily: "Sora-SemiBold",
    fontSize: 16,
    marginBottom: 0, // Removido o espaço entre o nome do fornecedor e as estrelas
    color: '#7DBA07', 
    marginRight: 5,
  },
  starsContainer: {
    flexDirection: 'row',
    marginTop: 0, // Adicionado marginTop para mover as estrelas para a próxima linha
  },
  star: {
    marginRight: 2,
  },
  statusDisponibilidade: {
    fontSize: 14,
  },
  topText: {
    fontSize: 79.81,
    fontWeight: 'bold',
  },
  heartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    right: 30, // Define a posição absoluta para o canto direito
    top: -20, // Alinha o ícone de coração ao topo do contêiner
  },
  heartIcon: {
    marginLeft: 5,
  },
});

export default Favoritos;
