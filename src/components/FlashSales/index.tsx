import React, {useEffect, useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {dict_home} from '../../assets/dictionary';
import {mock_flashsales} from '../../mock';
import {
  getProductsByCategory,
  getSecondCategoryButtonStyle,
  getSecondCategoryTextStyle,
} from '../../utils';
import {Category, Product, ProductScreenNavigation} from '../../types';
import styles from './styles';

export default function FlashSales() {
  const navigation = useNavigation<ProductScreenNavigation>();
  const [selected, setSelected] = useState<Category>('Newest');
  const [time, setTime] = useState({hours: 2, minutes: 12, seconds: 56});

  const products: Product[] = getProductsByCategory(mock_flashsales, selected);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prev => {
        let {hours, minutes, seconds} = prev;
        if (seconds > 0) {
          seconds--;
        } else {
          if (minutes > 0) {
            minutes--;
            seconds = 59;
          } else if (hours > 0) {
            hours--;
            minutes = 59;
            seconds = 59;
          }
        }
        return {hours, minutes, seconds};
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <View style={styles.secondCategoryContainer}>
      <View style={styles.secondCategoryTextContainer}>
        <Text style={styles.secondCategoryTitle}>
          {dict_home.flashSalesTitle}
        </Text>
        <View style={styles.secondCategoryTimerContainer}>
          <Text style={styles.secondCategoryTimerTitle}>
            {dict_home.flashSalesLabel}
          </Text>
          <View style={styles.secondCategoryTimerBox}>
            <Text style={styles.secondCategoryTimerText}>
              {String(time.hours).padStart(2, '0')}
            </Text>
          </View>
          <Text style={styles.secondCategoryTimerSeparator}> : </Text>
          <View style={styles.secondCategoryTimerBox}>
            <Text style={styles.secondCategoryTimerText}>
              {String(time.minutes).padStart(2, '0')}
            </Text>
          </View>
          <Text style={styles.secondCategoryTimerSeparator}> : </Text>
          <View style={styles.secondCategoryTimerBox}>
            <Text style={styles.secondCategoryTimerText}>
              {String(time.seconds).padStart(2, '0')}
            </Text>
          </View>
        </View>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.secondCategoryScrollContainer}>
        {mock_flashsales.map(category => (
          <TouchableOpacity
            key={category.id}
            onPress={() => setSelected(category.name as Category)}
            style={[
              styles.secondCategoryButton,
              getSecondCategoryButtonStyle(selected === category.name),
            ]}>
            <Text
              style={[
                styles.secondCategoryTextButton,
                getSecondCategoryTextStyle(selected === category.name),
              ]}>
              {category.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.productContainer}>
        {products.map(product => (
          <TouchableOpacity
            key={product.id}
            style={styles.productItem}
            onPress={() =>
              navigation.navigate('Product', {
                product: product,
                category: selected,
              })
            }>
            <Image source={product.image} style={styles.productImage} />
            <Text style={styles.productPrice}>${product.price}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
