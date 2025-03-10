import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import Product from '../screens/Product';
import {RootStackParamList} from '../types';

const Stack = createStackNavigator<RootStackParamList>();

const screenOptions = {
  headerBackImage: () => null,
  headerLeftContainerStyle: {},
  headerShown: false,
  headerTitle: () => null,
  headerStyle: {},
};

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="TabNavigator" component={TabNavigator} />

      <Stack.Screen name="Product" component={Product} />
    </Stack.Navigator>
  );
}
