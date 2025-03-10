import {Categories, Category} from '../types';

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
  categories: Categories[],
  selectedCategoryName: Category,
) => {
  const selectedCategory = categories.find(
    category => category.name === selectedCategoryName,
  );
  return selectedCategory ? selectedCategory.products : [];
};
