import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  secondCategoryContainer: {paddingHorizontal: 16, backgroundColor: ''},
  secondCategoryTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  secondCategoryTitle: {fontSize: 20, fontWeight: '600', color: '#333'},
  secondCategoryScrollContainer: {marginTop: 10},
  secondCategoryButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginRight: 10,
  },
  secondCategoryTextButton: {fontSize: 14, fontWeight: 'bold'},
});

export default styles;
