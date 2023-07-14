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
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  horizontalContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  bottom : {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingBottom: 50,
    backgroundColor: '#fff',
    paddingVertical: 25,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.2,
    elevation: 3,
  },
  button: {
    backgroundColor: 'transparent',
    borderWidth: 1,
  }
});