import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  colorSelectorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  colorSelectorLabel: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginRight: 8,
  },
  colorSelectorPickerContainer: {
    flex: 1,
    maxWidth: 110,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 4,
  },
  colorSelectorPicker: {
    height: 50,
  },
});

export default styles;
