import React, {useState} from 'react';
import {Platform, Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {dict_product} from '../../assets/dictionary';
import {mock_product} from '../../mock';
import {Color} from '../../types';
import styles from './styles';

const isAndroid = Platform.OS === 'android';

export default function ColorSelector() {
  const [selectedColor, setSelectedColor] = useState<Color>('Brown');

  return (
    <View style={styles.colorSelectorContainer}>
      <Text style={styles.colorSelectorLabel}>
        {dict_product.colorTitle} :{' '}
      </Text>
      {isAndroid ? (
        <View style={styles.colorSelectorPickerContainer}>
          <Picker
            selectedValue={selectedColor}
            onValueChange={itemValue => setSelectedColor(itemValue)}
            style={styles.colorSelectorPicker}>
            {mock_product.colors.map(color => (
              <Picker.Item key={color} label={color} value={color} />
            ))}
          </Picker>
        </View>
      ) : (
        <View style={styles.colorSelectorPickerContainer}>
          <Picker
            selectedValue={selectedColor}
            onValueChange={itemValue => setSelectedColor(itemValue)}
            style={styles.colorSelectorPicker}>
            {mock_product.colors.map(color => (
              <Picker.Item key={color} label={color} value={color} />
            ))}
          </Picker>
        </View>
      )}
    </View>
  );
}
