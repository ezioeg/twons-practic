import React, {useState, useRef} from 'react';
import {
  View,
  Image,
  FlatList,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {dict_home} from '../../assets/dictionary';
import {mock_banner} from '../../mock';
import styles from './styles';

const {width} = Dimensions.get('window');

export default function PromotionalBanner() {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef(null);

  const handleScroll = (event: {nativeEvent: {contentOffset: {x: number}}}) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveIndex(index);
  };

  return (
    <View style={styles.secondContainer}>
      <FlatList
        ref={flatListRef}
        data={mock_banner.images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View style={[styles.bannerContainer, {width: width - 32}]}>
            <Image
              source={item}
              style={[styles.bannerImage, {width: width - 32}]}
              resizeMode="cover"
            />
            <View style={styles.bannerTextContainer}>
              <Text style={styles.bannerTitle}>{mock_banner.title}</Text>
              <Text style={styles.bannerSubtitle}>
                {mock_banner.description1}
                {'\n'}
                {mock_banner.description2}
              </Text>
              <TouchableOpacity style={styles.bannerButton}>
                <Text style={styles.bannerButtonText}>
                  {dict_home.bannerButtonText}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <View style={styles.bannerIndicators}>
        {mock_banner.images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.bannerDot,
              activeIndex === index && styles.bannerActiveDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
}
