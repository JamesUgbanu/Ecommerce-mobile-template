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
    marginVertical: 5,
  },
  horizontalContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
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
  selectedCircle: {
    borderColor: 'red',
    borderWidth: 1,
  },
  square: {
    height: 40,
    width: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 25,
  },
  rectangle: {
    height: 40,
    width: 110,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 25,
    marginBottom: 15,
  },
  selectedBox: {
    backgroundColor: '#DB3022'
  },
  unSelectedBox: {
    borderColor: '#9B9B9B',
    borderWidth: 1,
  },
  wrapContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    flexWrap: 'wrap',
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