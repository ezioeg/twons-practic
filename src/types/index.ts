import {StackNavigationProp} from '@react-navigation/stack';
import {
  AccessibilityState,
  GestureResponderEvent,
  ImageSourcePropType,
} from 'react-native';

export interface TabButtonProps {
  children: React.ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
  accessibilityState: AccessibilityState | undefined;
}

export type ProductParams = {
  Product: {
    product: {
      id: number;
      name: string;
      description: string;
      price: number;
      image: ImageSourcePropType;
      star: number;
    };
    category?: string;
  };
};

export type ProductNavigationProp = StackNavigationProp<
  ProductParams,
  'Product'
>;

export type Product = {
  name: string;
  image: ImageSourcePropType;
  star: number;
  price: number;
};

export type Category = string;

export type ProductRouteParams = {
  product: Product;
  category: Category;
};
