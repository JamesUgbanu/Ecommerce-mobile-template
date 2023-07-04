import { StyleSheet } from 'react-native';

export const styles = (height?: number) => StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    maxHeight: height,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 40,
    paddingHorizontal: 20
  },
  text: {
    color: 'white',
    fontSize: 48,
    lineHeight: 48,
    fontWeight: '900',
    width: 190
  },
  button: {
    // height: 36,
    width: 160,
    marginTop: 20,
    textAlign : "center",
  }
});