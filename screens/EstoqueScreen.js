import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Produtos com os nomes corretos
const initialProducts = [
  { id: '1', name: 'Pomada Babbon', quantity: 10 },
  { id: '2', name: 'Balm Havanah', quantity: 5 },
  { id: '3', name: 'Minoxidil', quantity: 15 },
];

export default function EstoqueScreen() {
  const [products, setProducts] = useState(initialProducts);

  // Carregar os dados salvos
  useEffect(() => {
    loadData();
  }, []);

  // Função para salvar os dados de estoque
  const saveData = async (newProducts) => {
    try {
      const jsonValue = JSON.stringify(newProducts);
      await AsyncStorage.setItem('@estoque', jsonValue);
    } catch (e) {
      console.error('Erro ao salvar o estoque', e);
    }
  };

  // Função para carregar os dados de estoque
  const loadData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@estoque');
      if (jsonValue != null) {
        setProducts(JSON.parse(jsonValue));
      }
    } catch (e) {
      console.error('Erro ao carregar o estoque', e);
    }
  };

  // Atualiza a quantidade de um produto
  const updateQuantity = (id, delta) => {
    const updatedProducts = products.map(product =>
      product.id === id ? { ...product, quantity: product.quantity + delta } : product
    );
    setProducts(updatedProducts);
    saveData(updatedProducts); // Salvar ao atualizar a quantidade
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.product}>
            <Text>{item.name}: {item.quantity}</Text>
            <Button title="+" onPress={() => updateQuantity(item.id, 1)} />
            <Button title="-" onPress={() => updateQuantity(item.id, -1)} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  product: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
});