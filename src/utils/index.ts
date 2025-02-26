import {ImageSourcePropType} from 'react-native';

export const getSecondCategoryButtonStyle = (isSelected: boolean) => ({
  backgroundColor: isSelected ? '#654321' : '#F5F5F5',
});

export const getSecondCategoryTextStyle = (isSelected: boolean) => ({
  color: isSelected ? 'white' : '#333',
});

export const getSizeButtonStyle = (isSelected: boolean) => ({
  backgroundColor: isSelected ? '#654321' : 'white',
  borderWidth: isSelected ? 0 : 1,
  borderColor: isSelected ? 'transparent' : '#e0e0e0',
});

export const getSizeTextStyle = (isSelected: boolean) => ({
  color: isSelected ? 'white' : '#333',
});

export const getProductsByCategory = (
  category: {
    id: number;
    name: string;
    products: {
      id: number;
      name: string;
      description: string;
      price: number;
      image: ImageSourcePropType;
      star: number;
    }[];
  }[],
  selected: string,
) => {
  const selectedCategory = category.find(cat => cat.name === selected);
  return {
    selectedCategory,
    products: selectedCategory ? selectedCategory.products : [],
  };
};
