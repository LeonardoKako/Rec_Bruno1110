import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaCadastro from './src/screens/TelaCadastro';
import TelaVisualizacao from './src/screens/TelaVisualizacao';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TelaCadastro" component={TelaCadastro} />
        <Stack.Screen name="TelaVisualizacao" component={TelaVisualizacao} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};