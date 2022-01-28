import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home'
const Stack = createNativeStackNavigator();

export default function ScreenStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
     <Stack.Screen name="Home" component={Home}  options={{headerShown: false}} />
    </Stack.Navigator>
  );
}
