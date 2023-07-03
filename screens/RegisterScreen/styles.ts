import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 200,
    paddingHorizontal: 15
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
  link: {
    flex: 1,
  },
  buttonContainer: {
    marginTop: 30,
  },
  socialContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
});