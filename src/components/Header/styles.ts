import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  topIconsContainer: {
    position: 'absolute',
    top: Platform.OS === 'android' ? 50 : 50,
    left: 20,
    right: 20,
    zIndex: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconBackground: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  imageContainer: {
    alignItems: 'center',
    position: 'relative',
  },
  productImage: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',
  },
  thumbnailWrapper: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    alignItems: 'center',
  },
  thumbnailContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 8,
    paddingHorizontal: 2,
    paddingVertical: 4,
  },
  thumbnailWrapperItem: {
    position: 'relative',
    marginHorizontal: 2,
  },
  thumbnail: {
    width: 52,
    height: 52,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  overlay: {
    position: 'absolute',
    width: 52,
    height: 52,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlayText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
