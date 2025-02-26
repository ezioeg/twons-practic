import {DressIcon, JacketIcon, PantIcon, TShirtIcon} from '../components/Icons';

export const mock_location = [
  'New York, USA',
  'Los Angeles, USA',
  'Chicago, USA',
];

export const mock_banner = {
  title: 'New Collection',
  description1: 'Discount 50% for',
  description2: 'the first transaction',
  images: [
    require('../assets/images/bannerImage.jpg'),
    require('../assets/images/bannerImage2.jpg'),
    require('../assets/images/bannerImage3.jpg'),
    require('../assets/images/bannerImage4.jpg'),
    require('../assets/images/bannerImage5.jpg'),
  ],
};

export const mock_categories = [
  {id: 1, name: 'T-Shirt', Icon: TShirtIcon},
  {id: 2, name: 'Pant', Icon: PantIcon},
  {id: 3, name: 'Dress', Icon: DressIcon},
  {id: 4, name: 'Jacket', Icon: JacketIcon},
];

export const mock_flashsales = [
  {
    id: 1,
    name: 'All',
    products: [
      {
        id: 11,
        name: 'Basic T-shirt',
        description: 'Description of the basic t-shirt',
        price: 25.99,
        image: require('../assets/images/productImage.jpg'),
        star: 4.5,
      },
      {
        id: 22,
        name: 'Slim Fit Jeans',
        description: 'Description of the slim fit jeans',
        price: 19.99,
        image: require('../assets/images/productImage2.jpg'),
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
        image: require('../assets/images/productImage3.jpg'),
        star: 5,
      },
      {
        id: 44,
        name: 'Sport Shoes',
        description: 'Description of the sport shoes',
        price: 11.5,
        image: require('../assets/images/productImage4.jpg'),
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
        image: require('../assets/images/productImage.jpg'),
        star: 4,
      },
      {
        id: 66,
        name: 'Shorts',
        description: 'Description of the shorts',
        price: 42.99,
        image: require('../assets/images/productImage2.jpg'),
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
        image: require('../assets/images/productImage3.jpg'),
        star: 5,
      },
      {
        id: 88,
        name: 'Leather Belt',
        description: 'Description of the leather belt',
        price: 23.5,
        image: require('../assets/images/productImage4.jpg'),
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
        image: require('../assets/images/productImage.jpg'),
        star: 3.5,
      },
      {
        id: 1010,
        name: 'Stylized Skirt',
        description: 'Description of the stylized skirt',
        price: 65.0,
        image: require('../assets/images/productImage2.jpg'),
        star: 4,
      },
    ],
  },
];

export const mock_product = {
  images: [
    require('../assets/images/productImage.jpg'),
    require('../assets/images/productImage2.jpg'),
    require('../assets/images/productImage3.jpg'),
    require('../assets/images/productImage4.jpg'),
    require('../assets/images/productImage2.jpg'),
    require('../assets/images/productImage3.jpg'),
  ],
  sizes: [
    {id: 1, name: 'S'},
    {id: 2, name: 'M'},
    {id: 3, name: 'L'},
    {id: 4, name: 'XL'},
    {id: 5, name: 'XXL'},
    {id: 6, name: 'XXXL'},
  ],
  colors: [
    'Brown',
    'Red',
    'Blue',
    'Green',
    'Yellow',
    'Purple',
    'Orange',
    'Black',
  ],
};
