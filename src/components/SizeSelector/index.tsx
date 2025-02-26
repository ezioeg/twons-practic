import React, {useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {dict_product} from '../../assets/dictionary';
import {mock_product} from '../../mock';
import {getSizeButtonStyle, getSizeTextStyle} from '../../utils';
import styles from './styles';

export default function SizeSelector() {
  const [selected, setSelected] = useState('S');

  return (
    <View style={styles.secondCategoryContainer}>
      <View style={styles.secondCategoryTextContainer}>
        <Text style={styles.secondCategoryTitle}>{dict_product.sizeTitle}</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.secondCategoryScrollContainer}>
        {mock_product.sizes.map(cat => (
          <TouchableOpacity
            key={cat.id}
            onPress={() => setSelected(cat.name)}
            style={[
              styles.secondCategoryButton,
              getSizeButtonStyle(selected === cat.name),
            ]}>
            <Text
              style={[
                styles.secondCategoryTextButton,
                getSizeTextStyle(selected === cat.name),
              ]}>
              {cat.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
