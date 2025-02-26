import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  detailsContainer: {
    paddingTop: 30,
    paddingHorizontal: 20,
    backgroundColor: '',
  },
  productCategory: {
    fontSize: 16,
    color: '#666',
    paddingBottom: 6,
  },
  productTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productSubTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333',
  },
  productRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productRatingNumber: {
    marginLeft: 4,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  productDescriptionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginTop: 10,
  },
  productDescription: {
    fontSize: 16,
    color: '#666',
    marginTop: 6,
  },
  productReadMore: {
    color: '#6c543c',
    textDecorationLine: 'underline',
    fontWeight: '600',
  },
  productFullDescription: {
    fontSize: 16,
    color: '#666',
    marginTop: 6,
  },
  productSeparator: {height: 1, backgroundColor: '#e0e0e0', marginVertical: 16},
});

export default styles;
