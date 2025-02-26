import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  secondContainer: {
    // backgroundColor: 'red',
    paddingHorizontal: 16,
  },
  bannerContainer: {
    height: 160,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'green',
  },
  bannerImage: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    borderRadius: 8,
  },
  bannerTextContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 5,
    justifyContent: 'center',
  },
  bannerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  bannerSubtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
    lineHeight: 22,
  },
  bannerButton: {
    backgroundColor: '#6c543c',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 10,
    alignSelf: 'flex-start',
  },
  bannerButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  bannerIndicators: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 16,
  },
  bannerDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#CCC',
  },
  bannerActiveDot: {
    backgroundColor: '#6c543c',
  },
});

export default styles;
