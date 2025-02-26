import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {TabButtonProps} from '../../types';
import styles from './styles';

export default function CustomTabButton({
  children,
  onPress,
  accessibilityState,
}: TabButtonProps) {
  const isSelected = accessibilityState?.selected;

  return (
    <TouchableOpacity onPress={onPress} style={[styles.tabButton]}>
      <View style={[isSelected && styles.selectedCircle]}>{children}</View>
    </TouchableOpacity>
  );
}
