import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
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
});

export default styles;
