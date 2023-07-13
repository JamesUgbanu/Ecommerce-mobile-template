import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    marginBottom: 20,
    marginTop: 40,
  },
  range: {
    marginVertical: 10,
    backgroundColor: '#fff',
    paddingVertical: 25,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.05,
    elevation: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 10,
  },
  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  valueText: {
    fontSize: 14,
  },
});