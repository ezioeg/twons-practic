import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import styles from './styles';
import Svg, {Path} from 'react-native-svg';

const ConstructionIcon = () => {
  return (
    <Svg width="50" height="50" viewBox="0 0 24 24" fill="none">
      <Path
        fill="none"
        stroke="gray"
        strokeWidth="2"
        d="M5 12l5 5L19 7M3 3l18 18"
      />
    </Svg>
  );
};

export default function WishList() {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <ConstructionIcon />
      <Text>WishList screen is under construction</Text>
    </View>
  );
}
