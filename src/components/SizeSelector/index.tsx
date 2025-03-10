import React, {useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {dict_product} from '../../assets/dictionary';
import {mock_product} from '../../mock';
import {getSizeButtonStyle, getSizeTextStyle} from '../../utils';
import {Size} from '../../types';
import styles from './styles';

export default function SizeSelector() {
  const [selectedSize, setSelectedSize] = useState<Size>('S');

  return (
    <View style={styles.secondCategoryContainer}>
      <View style={styles.secondCategoryTextContainer}>
        <Text style={styles.secondCategoryTitle}>{dict_product.sizeTitle}</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.secondCategoryScrollContainer}>
        {mock_product.sizes.map(size => (
          <TouchableOpacity
            key={size.id}
            onPress={() => setSelectedSize(size.name as Size)}
            style={[
              styles.secondCategoryButton,
              getSizeButtonStyle(selectedSize === size.name),
            ]}>
            <Text
              style={[
                styles.secondCategoryTextButton,
                getSizeTextStyle(selectedSize === size.name),
              ]}>
              {size.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
