import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
  },
  socials: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});