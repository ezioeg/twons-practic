import React from 'react';
import {View, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import LocationSearchFilter from '../../components/LocationSearchFilter';
import PromotionalBanner from '../../components/PromotionalBanner';
import Category from '../../components/Category';
import FlashSales from '../../components/FlashSales';
import styles from './styles';

export default function Start() {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />

      <SafeAreaView style={styles.safeArea}>
        <LocationSearchFilter />
        <PromotionalBanner />
        <Category />
        <FlashSales />
      </SafeAreaView>
    </View>
  );
}
