import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  firstContainer: {
    padding: 16,
    gap: 12, // margen vertical entre elementos
  },
  locationContainer: {
    gap: 6, // margen vertical entre elementos
  },
  locationTitle: {
    fontSize: 16,
    color: '#666',
  },
  locationSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3, // margen horizontal entre elementos
  },
  locationText: {
    fontSize: 16,
    fontWeight: '500',
  },
  searchFilterContainer: {
    flexDirection: 'row',
    gap: 8, // margen horizontal entre elementos
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    borderWidth: 1,
    borderColor: '#f5f5f5',
    borderRadius: 8,
    paddingLeft: 12,
  },
  searchIcon: {},
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    paddingVertical: 8,
    paddingLeft: 12,
  },
  filterIcon: {
    backgroundColor: '#6c543c',
    width: 40,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bellIconContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    right: 0, // Alineado a la derecha
    backgroundColor: '#e0e0e0',
    borderRadius: 20,
    width: 40,
    height: 40,
  },
  notificationDot: {
    position: 'absolute',
    top: 6, // Un pequeño desplazamiento hacia arriba
    right: 10, // Un pequeño desplazamiento hacia la derecha
    width: 8,
    height: 8,
    borderRadius: 4, // Forma circular
    backgroundColor: 'red',
  },
});

export default styles;
