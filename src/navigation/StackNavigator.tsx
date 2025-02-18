import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import ProductDetails from '../screens/ProductDetails';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackImage: () => null,
        headerLeftContainerStyle: {},
        headerShown: false,
        headerTitle: () => null,
        headerStyle: {},
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen name="TabNavigator" component={TabNavigator} />

      <Stack.Screen name="ProductDetails" component={ProductDetails} />
    </Stack.Navigator>
  );
}
