import { StyleSheet } from 'react-native';

export const styles = (height?: number) => StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
  imageContainer: {
    height,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  bottom : {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingBottom: 40,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.2,
    elevation: 3,
  },
  searchOverlay: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    paddingHorizontal: 100,
  },
  searchText: {
    textAlign: 'center',
    marginTop: 15,
  }
});