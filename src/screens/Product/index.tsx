import React from 'react';
import {StatusBar, ScrollView} from 'react-native';
import Header from '../../components/Header';
import Details from '../../components/Details';
import SizeSelector from '../../components/SizeSelector';
import ColorSelector from '../../components/ColorSelector';
import PriceAndCartButton from '../../components/PriceAndCartButton';
import styles from './styles';
// import {ProductRouteParams} from '../../types';

// {
//   route,
// }: {
//   route: {params: ProductRouteParams};
// }

export default function Product({route}: {route: any}) {
  const {product, category} = route.params;

  return (
    <>
      <ScrollView style={styles.container}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />

        <Header product={product} />
        <Details product={product} category={category} />
        <SizeSelector />
        <ColorSelector />
      </ScrollView>

      <PriceAndCartButton productPrice={product.price} />
    </>
  );
}
