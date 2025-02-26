import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  secondCategoryContainer: {padding: 16, backgroundColor: ''},
  secondCategoryTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  secondCategoryTitle: {fontSize: 22, fontWeight: '600', color: '#333'},
  secondCategoryTimerContainer: {flexDirection: 'row', alignItems: 'center'},
  secondCategoryTimerTitle: {fontSize: 16, color: '#666', marginRight: 6},
  secondCategoryTimer: {fontSize: 16, fontWeight: 'bold', color: '#6c543c'},
  secondCategoryScrollContainer: {marginTop: 10},
  secondCategoryButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 10,
  },
  secondCategoryTextButton: {fontSize: 14, fontWeight: 'bold'},
  secondCategoryTimerBox: {
    backgroundColor: '#ede4df',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  secondCategoryTimerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6c543c',
    textAlign: 'center',
  },
  secondCategoryTimerSeparator: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6c543c',
    marginHorizontal: 2,
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    // backgroundColor: 'red',
  },
  productItem: {
    alignItems: 'center',
    width: '48%',
  },
  productImage: {
    width: '100%',
    height: 180,
    borderRadius: 8,
  },
  productPrice: {
    paddingTop: 6,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    alignSelf: 'flex-start',
  },
});

export default styles;
