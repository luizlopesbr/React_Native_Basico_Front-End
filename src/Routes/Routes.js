import { View, Text } from 'react-native'
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';

import TelaInicial from '../TelaInicial';
import TelaLigacao from '../TelaLigacao'

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="TelaInicial" component={TelaInicial} />
        <Stack.Screen name="TelaLigacao" component={TelaLigacao}/>
    </Stack.Navigator>
  )
}