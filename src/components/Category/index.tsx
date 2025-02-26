import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {dict_home} from '../../assets/dictionary';
import {mock_categories} from '../../mock';
import styles from './styles';

export default function Category() {
  return (
    <View style={styles.categoryContainer}>
      <View style={styles.categoryTextContainer}>
        <Text style={styles.categoryTitle}>{dict_home.categoriesTitle}</Text>
        <TouchableOpacity>
          <Text style={styles.categorySeeAll}>{dict_home.categoriesLabel}</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryScrollContainer}>
        {mock_categories.map(category => (
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
