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
  text: {
    color: 'white',
    fontSize: 31,
    lineHeight: 38,
    fontWeight: '500',
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
    borderRadius: 25,
  },
  border: {
    borderWidth: 1,
    borderColor: '#fff', 
    backgroundColor: 'transparent'
  }
});