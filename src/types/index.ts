import {StackNavigationProp} from '@react-navigation/stack';
import {
  AccessibilityState,
  GestureResponderEvent,
  ImageSourcePropType,
} from 'react-native';

export type RootStackParamList = {
  TabNavigator: undefined; // TabNavigator no tiene parámetros
  Product: ProductScreenRouteParams; // Parámetros que espera la pantalla Product
};

export interface TabButtonProps {
  children: React.ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
  accessibilityState: AccessibilityState | undefined;
}

export type ProductScreenNavigation = StackNavigationProp<
  {Product: ProductScreenRouteParams},
  'Product'
>;

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: ImageSourcePropType;
  star: number;
}

export type Category = 'All' | 'Newest' | 'Popular' | 'Man' | 'Woman';

export interface Categories {
  id: number;
  name: Category | string;
  products: Product[];
}

export interface ProductScreenRouteParams {
  product: Product;
  category: Category;
}

export type Color =
  | 'Brown'
  | 'Red'
  | 'Blue'
  | 'Green'
  | 'Yellow'
  | 'Purple'
  | 'Orange'
  | 'Black';

export type Size = 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL';
