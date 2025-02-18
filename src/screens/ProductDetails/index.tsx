import React, {useState} from 'react';
import {
  StatusBar,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import {ArrowLeft, Heart, ShoppingBag, Star} from 'lucide-react-native';
import {useNavigation} from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';

const sizes = [
  {
    id: 1,
    name: 'S',
  },
  {
    id: 2,
    name: 'M',
  },
  {
    id: 3,
    name: 'L',
  },
  {
    id: 4,
    name: 'XL',
  },
  {
    id: 5,
    name: 'XXL',
  },
  {
    id: 6,
    name: 'XXXL',
  },
];

export default function ProductDetails({route}: {route: any}) {
  const navigation = useNavigation();
  const {product, category} = route.params;

  const [selectedImage, setSelectedImage] = useState('');
  const [expandedDescription, setExpandedDescription] = useState(false);
  const [isFilledHeart, setIsFilledHeart] = useState(false);

  const handlePressheart = () => {
    setIsFilledHeart(!isFilledHeart);
  };

  const images = [
    require('../../assets/images/productImage.jpg'),
    require('../../assets/images/productImage2.jpg'),
    require('../../assets/images/productImage3.jpg'),
    require('../../assets/images/productImage4.jpg'),
    require('../../assets/images/productImage2.jpg'),
    require('../../assets/images/productImage3.jpg'),
  ];

  return (
    <>
      <ScrollView style={styles.container}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <View
          style={[
            styles.topIconsContainer,
            Platform.OS === 'android' ? {top: 50} : {top: 50},
          ]}>
          <TouchableOpacity
            style={styles.iconBackground}
            onPress={() => navigation.goBack()}>
            <ArrowLeft size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.productTitle}>{product.name}</Text>
          <TouchableOpacity
            style={styles.iconBackground}
            onPress={handlePressheart}>
            <Heart
              size={24}
              color="black"
              fill={isFilledHeart ? 'black' : 'none'}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={selectedImage ? selectedImage : product.image}
            style={styles.productImage}
          />
          <View style={styles.thumbnailWrapper}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.thumbnailContainer}>
              {images.map((image, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => setSelectedImage(image)}
                  style={styles.thumbnailWrapperItem}>
                  <Image source={image} style={styles.thumbnail} />
                  {index === images.length - 1 && (
                    <View style={styles.overlay}>
                      <Text style={styles.overlayText}>+10</Text>
                    </View>
                  )}
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>

        <View style={styles.detailsContainer}>
          <Text style={styles.productCategory}>{category}</Text>

          <View style={styles.productTextContainer}>
            <Text style={styles.productSubTitle}>{product.name}</Text>
            <View style={styles.productRatingContainer}>
              <Star size={18} color="#F4B400" fill="#F4B400" />
              <Text style={styles.productRatingNumber}>{product.star}</Text>
            </View>
          </View>

          <Text style={styles.productDescriptionTitle}>Product Details</Text>

          <Text style={styles.productDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
            {!expandedDescription && (
              <TouchableOpacity onPress={() => setExpandedDescription(true)}>
                <Text style={styles.productReadMore}>Read more</Text>
              </TouchableOpacity>
            )}
          </Text>

          {expandedDescription && (
            <Text style={styles.productFullDescription}>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          )}

          <View style={styles.productSeparator} />
        </View>

        <SizeSelector />
        <ColorSelector />
      </ScrollView>

      <View style={styles.bottomContainer}>
        <View style={styles.priceContainer}>
          <Text style={styles.totalLabel}>Total Price</Text>
          <Text style={styles.totalPrice}>${product.price}</Text>
        </View>
        <TouchableOpacity style={styles.addToCartButton}>
          <ShoppingBag size={24} color="white" style={{marginRight: 10}} />
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

function SizeSelector() {
  const [selected, setSelected] = useState('S');

  return (
    <View style={styles.secondCategoryContainer}>
      <View style={styles.secondCategoryTextContainer}>
        <Text style={styles.secondCategoryTitle}>Flash Sale</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.secondCategoryScrollContainer}>
        {sizes.map(cat => (
          <TouchableOpacity
            key={cat.id}
            onPress={() => setSelected(cat.name)}
            style={[
              styles.secondCategoryButton,
              {
                backgroundColor: selected === cat.name ? '#654321' : 'white',
                borderWidth: selected !== cat.name ? 1 : 0,
                borderColor: selected !== cat.name ? '#e0e0e0' : 'transparent',
              },
            ]}>
            <Text
              style={[
                styles.secondCategoryTextButton,
                {
                  color: selected === cat.name ? 'white' : '#333',
                },
              ]}>
              {cat.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

function ColorSelector() {
  const [selectedColor, setSelectedColor] = useState('Brown');

  const colors = [
    'Brown',
    'Red',
    'Blue',
    'Green',
    'Yellow',
    'Purple',
    'Orange',
    'Black',
  ];

  return (
    <View style={styles.colorSelectorContainer}>
      <Text style={styles.colorSelectorLabel}>Select Color : </Text>
      {Platform.OS === 'android' ? (
        <View style={styles.colorSelectorPickerContainer}>
          <Picker
            selectedValue={selectedColor}
            onValueChange={itemValue => setSelectedColor(itemValue)}
            style={styles.colorSelectorPicker}>
            {colors.map(color => (
              <Picker.Item key={color} label={color} value={color} />
            ))}
          </Picker>
        </View>
      ) : (
        <Text style={styles.colorSelectorLabel}>Brown</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  // FIRST PART
  topIconsContainer: {
    position: 'absolute',
    top: 40,
    left: 20,
    right: 20,
    zIndex: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconBackground: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  imageContainer: {
    alignItems: 'center',
    position: 'relative',
  },
  productImage: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',
  },
  thumbnailWrapper: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    alignItems: 'center',
  },
  thumbnailContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 8,
    paddingHorizontal: 2,
    paddingVertical: 4,
  },
  thumbnailWrapperItem: {
    position: 'relative',
    marginHorizontal: 2,
  },
  thumbnail: {
    width: 52,
    height: 52,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  overlay: {
    position: 'absolute',
    width: 52,
    height: 52,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlayText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  // SECOND PART
  detailsContainer: {
    paddingTop: 30,
    paddingHorizontal: 20,
    backgroundColor: '',
  },
  productCategory: {
    fontSize: 16,
    color: '#666',
    paddingBottom: 6,
  },
  productTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productSubTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333',
  },
  productRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productRatingNumber: {
    marginLeft: 4,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  productDescriptionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginTop: 10,
  },
  productDescription: {
    fontSize: 16,
    color: '#666',
    marginTop: 6,
  },
  productReadMore: {
    color: '#6c543c',
    textDecorationLine: 'underline',
    fontWeight: '600',
  },
  productFullDescription: {
    fontSize: 16,
    color: '#666',
    marginTop: 6,
  },
  productSeparator: {height: 1, backgroundColor: '#e0e0e0', marginVertical: 16},
  // THIRD PART
  secondCategoryContainer: {paddingHorizontal: 16, backgroundColor: ''},
  secondCategoryTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  secondCategoryTitle: {fontSize: 20, fontWeight: '600', color: '#333'},
  secondCategoryScrollContainer: {marginTop: 10},
  secondCategoryButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginRight: 10,
  },
  secondCategoryTextButton: {fontSize: 14, fontWeight: 'bold'},
  // FOURTH PART
  colorSelectorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  colorSelectorLabel: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginRight: 8,
  },
  colorSelectorPickerContainer: {
    flex: 1,
    maxWidth: 110,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 4,
  },
  colorSelectorPicker: {
    height: 50,
  },

  // FIVE PART
  bottomContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    paddingBottom: 24,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  priceContainer: {
    flex: 1,
  },
  totalLabel: {
    fontSize: 16,
    color: '#666',
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  addToCartButton: {
    backgroundColor: '#6B4C35',
    paddingHorizontal: 50,
    paddingVertical: 12,
    borderRadius: 22,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
