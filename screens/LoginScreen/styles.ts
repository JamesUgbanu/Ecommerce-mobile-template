import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
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
    justifyContent: 'space-between',
    alignItems: "center",
    marginVertical: 5
  },
  link: {
    flex: 1, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 30,
  },
  socialContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50
  },
  socialButton: {
    backgroundColor: '#fff',
    borderRadius: 24,
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    paddingVertical: 20,
    paddingHorizontal: 35,
    marginTop: 15,
    // marginLeft: 15
  },
  socials: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});