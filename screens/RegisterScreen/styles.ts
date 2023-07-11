import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  form: {
    paddingHorizontal: 15,
    marginTop: 50
  },
  inputContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    height: 64,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginVertical: 5
  },
  buttonContainer: {
    marginTop: 30,
  },
  socialContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  heading: {
    marginTop: 10,
    marginLeft: 15
  }
});