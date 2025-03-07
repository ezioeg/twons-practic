import React, {useState} from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ArrowLeftIcon, HeartIcon} from '../Icons';
import {mock_product} from '../../mock';
import {Product} from '../../types';
import styles from './styles';

export default function ProductHeader({product}: {product: Product}) {
  const navigation = useNavigation();
  const [selectedImage, setSelectedImage] = useState(undefined);
  const [isFilledHeart, setIsFilledHeart] = useState(false);

  const handlePressHeart = () => {
    setIsFilledHeart(!isFilledHeart);
  };

  const handleNavigationBack = () => {
    navigation.goBack();
  };

  return (
    <>
      <View style={styles.topIconsContainer}>
        <TouchableOpacity
          style={styles.iconBackground}
          onPress={handleNavigationBack}>
          <ArrowLeftIcon />
        </TouchableOpacity>
        <Text style={styles.productTitle}>{product.name}</Text>
        <TouchableOpacity
          style={styles.iconBackground}
          onPress={handlePressHeart}>
          <HeartIcon fill={isFilledHeart ? 'black' : 'none'} />
        </TouchableOpacity>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={selectedImage || product.image}
          style={styles.productImage}
        />
        <View style={styles.thumbnailWrapper}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.thumbnailContainer}>
            {mock_product.images.map((image, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setSelectedImage(image)}
                style={styles.thumbnailWrapperItem}>
                <Image source={image} style={styles.thumbnail} />
                {index === mock_product.images.length - 1 && (
                  <View style={styles.overlay}>
                    <Text style={styles.overlayText}>+10</Text>
                  </View>
                )}
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </>
  );
}
