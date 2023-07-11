import { StyleSheet } from 'react-native';

export const styles = (height?: number) => StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    marginBottom: 20
  },
  productContainer: {
    marginTop: 20,
    marginHorizontal: 5,
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});