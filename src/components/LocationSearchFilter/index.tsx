import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {
  BellIcon,
  ChevronDownIcon,
  LocationIcon,
  SearchIcon,
  SlidersIcon,
} from '../Icons';
import {dict_home} from '../../assets/dictionary';
import {mock_location} from '../../mock';
import styles from './styles';

export default function LocationSearchFilter() {
  return (
    <View style={styles.firstContainer}>
      <View style={styles.locationContainer}>
        <View>
          <Text style={styles.locationTitle}>{dict_home.locationTitle}</Text>
        </View>
        <TouchableOpacity style={styles.locationSubContainer}>
          <LocationIcon />
          <Text style={styles.locationText}>{mock_location[0]}</Text>
          <ChevronDownIcon />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bellIconContainer}>
          <BellIcon />
          <View style={styles.notificationDot} />
        </TouchableOpacity>
      </View>

      <View style={styles.searchFilterContainer}>
        <View style={styles.searchContainer}>
          <View style={styles.searchIcon}>
            <SearchIcon />
          </View>
          <TextInput
            style={styles.searchInput}
            placeholder={dict_home.inputPlaceholder}
            placeholderTextColor="#666"
          />
        </View>
        <TouchableOpacity style={styles.filterIcon}>
          <SlidersIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
}
