import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ClientesScreen() {
  const [clientesAtendidos, setClientesAtendidos] = useState(0);

  // Carregar o número de clientes salvos
  useEffect(() => {
    loadData();
  }, []);

  // Função para salvar os clientes atendidos
  const saveData = async (count) => {
    try {
      await AsyncStorage.setItem('@clientesAtendidos', count.toString());
    } catch (e) {
      console.error('Erro ao salvar o número de clientes', e);
    }
  };

  // Função para carregar os clientes atendidos
  const loadData = async () => {
    try {
      const value = await AsyncStorage.getItem('@clientesAtendidos');
      if (value !== null) {
        setClientesAtendidos(parseInt(value));
      }
    } catch (e) {
      console.error('Erro ao carregar o número de clientes', e);
    }
  };

  // Função para aumentar o número de clientes atendidos
  const atenderCliente = () => {
    const novoValor = clientesAtendidos + 1;
    setClientesAtendidos(novoValor);
    saveData(novoValor);
  };

  // Função para diminuir o número de clientes atendidos
  const diminuirCliente = () => {
    const novoValor = clientesAtendidos > 0 ? clientesAtendidos - 1 : 0; // Garante que o valor não fique negativo
    setClientesAtendidos(novoValor);
    saveData(novoValor);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Clientes Atendidos Hoje: {clientesAtendidos}</Text>

      {/* Botão para aumentar o número de clientes */}
      <TouchableOpacity onPress={atenderCliente} style={styles.buttonGreen}>
        <Text style={styles.buttonText}>Registrar Atendimento</Text>
      </TouchableOpacity>

      <View style={styles.buttonSpacing} />

      {/* Botão para diminuir o número de clientes */}
      <TouchableOpacity onPress={diminuirCliente} style={styles.buttonRed}>
        <Text style={styles.buttonText}>Diminuir Atendimento</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonSpacing: {
    marginVertical: 10, // Espaçamento entre os botões
  },
  buttonGreen: {
    backgroundColor: '#32CD32', // Verde
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonRed: {
    backgroundColor: '#FF6347', // Vermelho
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff', // Cor do texto
    fontSize: 16,
    fontWeight: 'bold',
  },
});
