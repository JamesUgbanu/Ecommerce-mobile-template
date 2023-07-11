import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    marginBottom: 20,
    marginLeft: 10,
    marginTop: 20,
  },
  productContainer: {
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  }, 
  contentView: {
    marginHorizontal: 5,
    backgroundColor: 'black',
    borderRadius: 25,
    paddingVertical: 5,
    paddingHorizontal: 5
  },
  text: {
    color: 'white'
  }
});