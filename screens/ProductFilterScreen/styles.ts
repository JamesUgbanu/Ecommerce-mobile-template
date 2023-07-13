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
    marginHorizontal: 10,
    // justifyContent: 'flex-start'
  },
  valueText: {
    fontSize: 14,
  },
  smallCircle: {
    height: 36,
    width: 36,
    borderRadius: 25,
  },
  bigCircle: {
    height: 44,
    width: 44,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 25,
  },
  selected: {
    borderColor: 'red',
    borderWidth: 1,
  }
});