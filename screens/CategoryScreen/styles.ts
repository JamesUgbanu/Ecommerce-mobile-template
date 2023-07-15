import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    marginBottom: 20,
    marginTop: 20,
  },
  topBox: {
    paddingLeft: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.1,
    elevation: 5,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 15,
    marginTop: 10,
    backgroundColor: "#F9F9F9"
  },
  filterText: {
    fontSize: 12,
    marginLeft: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
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