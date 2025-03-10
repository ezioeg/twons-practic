import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {dict_product} from '../../assets/dictionary';
import {StarIcon} from '../Icons';
import {Category, Product} from '../../types';
import styles from './styles';

export default function Details({
  product,
  category,
}: {
  product: Product;
  category: Category;
}) {
  const [expandedDescription, setExpandedDescription] = useState(false);

  const handleExpandDescription = () => {
    setExpandedDescription(!expandedDescription);
  };

  return (
    <View style={styles.detailsContainer}>
      <Text style={styles.productCategory}>{category}</Text>

      <View style={styles.productTextContainer}>
        <Text style={styles.productSubTitle}>{product.name}</Text>
        <View style={styles.productRatingContainer}>
          <StarIcon />
          <Text style={styles.productRatingNumber}>{product.star}</Text>
        </View>
      </View>

      <Text style={styles.productDescriptionTitle}>{dict_product.title}</Text>

      <Text style={styles.productDescription}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.{' '}
        {!expandedDescription && (
          <TouchableOpacity onPress={handleExpandDescription}>
            <Text style={styles.productReadMore}>
              {dict_product.descriptionReadMore}
            </Text>
          </TouchableOpacity>
        )}
      </Text>

      {expandedDescription && (
        <Text style={styles.productFullDescription}>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.{' '}
          <TouchableOpacity onPress={handleExpandDescription}>
            <Text style={styles.productReadMore}>
              {dict_product.descriptionReadLess}
            </Text>
          </TouchableOpacity>
        </Text>
      )}

      <View style={styles.productSeparator} />
    </View>
  );
}
