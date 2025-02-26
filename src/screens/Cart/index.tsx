import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import {ConstructionIcon} from '../../components/Icons';
import styles from './styles';

export default function Cart() {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <ConstructionIcon />
      <Text>Cart screen is under construction</Text>
    </View>
  );
}
