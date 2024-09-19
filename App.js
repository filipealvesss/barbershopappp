import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import EstoqueScreen from './screens/EstoqueScreen';
import ClientesScreen from './screens/ClientesScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Estoque" component={EstoqueScreen} />
        <Stack.Screen name="Clientes" component={ClientesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
