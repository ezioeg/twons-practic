import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {dict_product} from '../../assets/dictionary';
import {ShoppingBagIcon} from '../Icons';
import styles from './styles';

export default function PriceAndCartButton({
  productPrice,
}: {
  productPrice: number;
}) {
  return (
    <View style={styles.bottomContainer}>
      <View style={styles.priceContainer}>
        <Text style={styles.totalLabel}>{dict_product.priceTitle}</Text>
        <Text style={styles.totalPrice}>${productPrice}</Text>
      </View>
      <TouchableOpacity style={styles.addToCartButton}>
        <ShoppingBagIcon />
        <Text style={styles.buttonText}>
          {dict_product.addToCartButtonText}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
