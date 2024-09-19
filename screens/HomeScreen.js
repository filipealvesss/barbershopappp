import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Logo "Mr. Navalha" */}
      <Text style={styles.logo}>Mr. Navalha</Text>

      {/* Botão Controle de Estoque */}
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Estoque')}
      >
        <Text style={styles.buttonText}>Controle de Estoque</Text>
      </TouchableOpacity>

      {/* Espaçamento entre os botões */}
      <View style={styles.buttonSpacing} />

      {/* Botão Controle de Clientes */}
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Clientes')}
      >
        <Text style={styles.buttonText}>Controle de Clientes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    fontSize: 36, // Tamanho da fonte maior
    fontWeight: 'bold',
    marginBottom: 40, // Espaço entre a logo e os botões
    color: '#32CD32', // Cor verde para a logo também
  },
  button: {
    backgroundColor: '#32CD32', // Cor verde do botão
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff', // Cor branca para o texto do botão
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonSpacing: {
    marginVertical: 10, // Espaçamento entre os botões
  },
});
