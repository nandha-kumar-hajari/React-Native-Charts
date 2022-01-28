import { View, Text } from 'react-native';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import  ScreenStack  from './screens/ScreenStack'

export default function App() {
  return (
    <NavigationContainer>
    <ScreenStack/>
    </NavigationContainer>
  );
}
