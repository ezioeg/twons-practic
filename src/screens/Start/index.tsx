import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StatusBar,
  Image,
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Bell, ChevronDown, MapPin, Search, Sliders} from 'lucide-react-native';
import {SvgXml} from 'react-native-svg';
import {useNavigation} from '@react-navigation/native';
// import styles from './styles';

const {width} = Dimensions.get('window');

// T-Shirt icon
export const TShirtIcon = () => {
  const xml = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M16 4L20 6L18 12H16V4Z" fill="#6c543c"/>
      <path d="M8 4L4 6L6 12H8V4Z" fill="#6c543c"/>
      <path d="M8 4H16V20H8V4Z" fill="#6c543c"/>
    </svg>
  `;
  return <SvgXml xml={xml} width={50} height={50} />;
};

// Pants icon
export const PantIcon = () => {
  const xml = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M7 4H17L16 20H14L12 10L10 20H8L7 4Z" fill="#6c543c"/>
    </svg>
  `;
  return <SvgXml xml={xml} width={50} height={50} />;
};

// Dress icon
export const DressIcon = () => {
  const xml = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 4C13.1046 4 14 4.89543 14 6C14 7.10457 13.1046 8 12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4Z" fill="#6c543c"/>
      <path d="M8 8L12 20L16 8C16 8 14 10 12 10C10 10 8 8 8 8Z" fill="#6c543c"/>
    </svg>
  `;
  return <SvgXml xml={xml} width={50} height={50} />;
};

// Jacket icon
export const JacketIcon = () => {
  const xml = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 4H9L12 6L15 4H18L20 7V20H16V14H8V20H4V7L6 4Z" fill="#6c543c"/>
      <path d="M6 4V7H4" stroke="#6c543c" stroke-width="1.5"/>
      <path d="M18 4V7H20" stroke="#6c543c" stroke-width="1.5"/>
      <path d="M12 6V12" stroke="#6c543c" stroke-width="1.5"/>
      <path d="M8 14H16" stroke="#6c543c" stroke-width="1.5"/>
    </svg>
  `;
  return <SvgXml xml={xml} width={50} height={50} />;
};

const banners = [
  require('../../assets/images/bannerImage.jpg'),
  require('../../assets/images/bannerImage2.jpg'),
  require('../../assets/images/bannerImage3.jpg'),
  require('../../assets/images/bannerImage4.jpg'),
  require('../../assets/images/bannerImage5.jpg'),
];

const firstCategories = [
  {id: 1, name: 'T-Shirt', Icon: TShirtIcon},
  {id: 2, name: 'Pant', Icon: PantIcon},
  {id: 3, name: 'Dress', Icon: DressIcon},
  {id: 4, name: 'Jacket', Icon: JacketIcon},
];

const secondCategories = [
  {
    id: 1,
    name: 'All',
    products: [
      {
        id: 11,
        name: 'Basic T-shirt',
        description: 'Description of the basic t-shirt',
        price: 25.99,
        image: require('../../assets/images/productImage.jpg'),
        star: 4.5,
      },
      {
        id: 22,
        name: 'Slim Fit Jeans',
        description: 'Description of the slim fit jeans',
        price: 19.99,
        image: require('../../assets/images/productImage2.jpg'),
        star: 3.5,
      },
    ],
  },
  {
    id: 2,
    name: 'Newest',
    products: [
      {
        id: 33,
        name: 'Leather Jacket',
        description: 'Description of the leather jacket',
        price: 35.5,
        image: require('../../assets/images/productImage3.jpg'),
        star: 5,
      },
      {
        id: 44,
        name: 'Sport Shoes',
        description: 'Description of the sport shoes',
        price: 11.5,
        image: require('../../assets/images/productImage4.jpg'),
        star: 3,
      },
    ],
  },
  {
    id: 3,
    name: 'Popular',
    products: [
      {
        id: 55,
        name: 'Evening Dress',
        description: 'Description of the evening dress',
        price: 29.99,
        image: require('../../assets/images/productImage.jpg'),
        star: 4,
      },
      {
        id: 66,
        name: 'Shorts',
        description: 'Description of the shorts',
        price: 42.99,
        image: require('../../assets/images/productImage2.jpg'),
        star: 3.5,
      },
    ],
  },
  {
    id: 4,
    name: 'Man',
    products: [
      {
        id: 77,
        name: 'Long Sleeve Shirt',
        description: 'Description of the long sleeve shirt',
        price: 42.75,
        image: require('../../assets/images/productImage3.jpg'),
        star: 5,
      },
      {
        id: 88,
        name: 'Leather Belt',
        description: 'Description of the leather belt',
        price: 23.5,
        image: require('../../assets/images/productImage4.jpg'),
        star: 4.5,
      },
    ],
  },
  {
    id: 5,
    name: 'Woman',
    products: [
      {
        id: 99,
        name: 'Elegant Blouse',
        description: 'Description of the elegant blouse',
        price: 50.0,
        image: require('../../assets/images/productImage.jpg'),
        star: 3.5,
      },
      {
        id: 1010,
        name: 'Stylized Skirt',
        description: 'Description of the stylized skirt',
        price: 65.0,
        image: require('../../assets/images/productImage2.jpg'),
        star: 4,
      },
    ],
  },
];

export default function Start() {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />

      <SafeAreaView style={styles.safeArea}>
        <SearchFilterLocation />
        <PromotionalBanner />
        <FirstCategoryList />
        <SecondCategoryList />
      </SafeAreaView>
    </View>
  );
}

function SearchFilterLocation() {
  return (
    <View style={styles.firstContainer}>
      <View style={styles.locationContainer}>
        <View>
          <Text style={styles.locationTitle}>Location</Text>
        </View>
        <TouchableOpacity style={styles.locationSubContainer}>
          <MapPin size={24} color="#6c543c" />
          <Text style={styles.locationText}>New York, USA</Text>
          <ChevronDown size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bellIconContainer}>
          <Bell size={24} color="black" fill={'black'} />
          <View style={styles.notificationDot} />
        </TouchableOpacity>
      </View>

      <View style={styles.searchFilterContainer}>
        <View style={styles.searchContainer}>
          <View style={styles.searchIcon}>
            <Search size={20} color="#666" />
          </View>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="#666"
          />
        </View>
        <TouchableOpacity style={styles.filterIcon}>
          <Sliders size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

function PromotionalBanner() {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef(null);

  const handleScroll = (event: any) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveIndex(index);
  };

  return (
    <View style={styles.secondContainer}>
      <FlatList
        ref={flatListRef}
        data={banners}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View style={styles.bannerContainer}>
            <View>
              <Image
                source={item}
                style={styles.bannerImage}
                resizeMode="cover"
              />
              <View style={styles.bannerTextContainer}>
                <Text style={styles.bannerTitle}>New Collection</Text>
                <Text style={styles.bannerSubtitle}>
                  Discount 50% for{'\n'}the first transaction
                </Text>
                <TouchableOpacity style={styles.bannerButton}>
                  <Text style={styles.bannerButtonText}>Shop Now</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
      <View style={styles.bannerIndicators}>
        {banners.map((_, index) => (
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

function FirstCategoryList() {
  return (
    <View style={styles.categoryContainer}>
      <View style={styles.categoryTextContainer}>
        <Text style={styles.categoryTitle}>Category</Text>
        <TouchableOpacity>
          <Text style={styles.categorySeeAll}>See All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryScrollContainer}>
        {firstCategories.map(category => (
          <TouchableOpacity key={category.id} style={styles.categoryItem}>
            <View style={styles.categoryIconContainer}>
              <category.Icon />
            </View>
            <Text style={styles.categoryName}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

function SecondCategoryList() {
  const navigation: any = useNavigation();
  const [selected, setSelected] = useState('Newest');
  const [time, setTime] = useState({hours: 2, minutes: 12, seconds: 56});

  // Obtener los products de la categoría seleccionada
  const selectedCategory = secondCategories.find(cat => cat.name === selected);
  const products = selectedCategory ? selectedCategory.products : [];

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prev => {
        let {hours, minutes, seconds} = prev;
        if (seconds > 0) seconds--;
        else {
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
        <Text style={styles.secondCategoryTitle}>Flash Sale</Text>
        <View style={styles.secondCategoryTimerContainer}>
          <Text style={styles.secondCategoryTimerTitle}>Closing in:</Text>
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
        {secondCategories.map(cat => (
          <TouchableOpacity
            key={cat.id}
            onPress={() => setSelected(cat.name)}
            style={[
              styles.secondCategoryButton,
              {
                backgroundColor: selected === cat.name ? '#654321' : '#F5F5F5',
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

      <View style={styles.productContainer}>
        {products.map(product => (
          <TouchableOpacity
            key={product.id}
            style={styles.productItem}
            onPress={() =>
              navigation.navigate('ProductDetails', {
                product: product,
                category: selectedCategory?.name,
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  safeArea: {
    flex: 1,
  },
  // FIRST CONTAINER
  firstContainer: {
    padding: 16,
    gap: 12, // margen vertical entre elementos
  },
  locationContainer: {
    gap: 6, // margen vertical entre elementos
  },
  locationTitle: {
    fontSize: 16,
    color: '#666',
  },
  locationSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3, // margen horizontal entre elementos
  },
  locationText: {
    fontSize: 16,
    fontWeight: '500',
  },
  searchFilterContainer: {
    flexDirection: 'row',
    gap: 8, // margen horizontal entre elementos
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    borderWidth: 1,
    borderColor: '#f5f5f5',
    borderRadius: 8,
    paddingLeft: 12,
  },
  searchIcon: {},
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    paddingVertical: 8,
    paddingLeft: 12,
  },
  filterIcon: {
    backgroundColor: '#6c543c',
    width: 40,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bellIconContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    right: 0, // Alineado a la derecha
    backgroundColor: '#e0e0e0',
    borderRadius: 20,
    width: 40,
    height: 40,
  },
  notificationDot: {
    position: 'absolute',
    top: 6, // Un pequeño desplazamiento hacia arriba
    right: 10, // Un pequeño desplazamiento hacia la derecha
    width: 8,
    height: 8,
    borderRadius: 4, // Forma circular
    backgroundColor: 'red',
  },
  // SECOND CONTAINER
  secondContainer: {
    // backgroundColor: 'red',
  },
  bannerContainer: {
    paddingHorizontal: 16,
    width: width,
    height: 160,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // overflow: 'hidden', // Para que la image de fondo respete el borderRadius
    // backgroundColor: 'green',
  },
  bannerTextContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 5,
    justifyContent: 'center',
  },
  bannerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  bannerSubtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
    lineHeight: 22,
  },
  bannerButton: {
    backgroundColor: '#6c543c',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 10,
    alignSelf: 'flex-start',
  },
  bannerButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  bannerImage: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: 360,
    borderRadius: 8,
  },
  bannerIndicators: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 16,
  },
  bannerDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#CCC',
  },
  bannerActiveDot: {
    backgroundColor: '#6c543c',
  },
  // THIRD CONTAINER
  categoryContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  categoryTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  categoryTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333',
  },
  categorySeeAll: {
    fontSize: 14,
    fontWeight: '400',
    color: '#6c543c',
  },
  categoryScrollContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryItem: {
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  categoryIconContainer: {
    width: 64,
    height: 64,
    backgroundColor: '#ede4df',
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  // FORUTH CONTAINER
  secondCategoryContainer: {padding: 16, backgroundColor: ''},
  secondCategoryTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  secondCategoryTitle: {fontSize: 22, fontWeight: '600', color: '#333'},
  secondCategoryTimerContainer: {flexDirection: 'row', alignItems: 'center'},
  secondCategoryTimerTitle: {fontSize: 16, color: '#666', marginRight: 6},
  secondCategoryTimer: {fontSize: 16, fontWeight: 'bold', color: '#6c543c'},
  secondCategoryScrollContainer: {marginTop: 10},
  secondCategoryButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 10,
  },
  secondCategoryTextButton: {fontSize: 14, fontWeight: 'bold'},
  secondCategoryTimerBox: {
    backgroundColor: '#ede4df',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  secondCategoryTimerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6c543c',
    textAlign: 'center',
  },
  secondCategoryTimerSeparator: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6c543c',
    marginHorizontal: 2,
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    // backgroundColor: 'red',
  },
  productItem: {
    alignItems: 'center',
    width: '48%',
  },
  productImage: {
    width: '100%',
    height: 180,
    borderRadius: 8,
  },
  productPrice: {
    paddingTop: 6,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    alignSelf: 'flex-start',
  },
});
