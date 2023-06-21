import { StyleSheet, Platform } from 'react-native';

export const styles = (paddingVertical?, borderWidth?, borderRadius?, borderColor?, marginBottom?) => StyleSheet.create({
    textInput: {
        paddingVertical: paddingVertical,
        justifyContent: 'center',
        borderWidth: borderWidth,
        borderRadius: borderRadius,
        borderColor: borderColor,
        backgroundColor: '#fff',
        marginBottom: marginBottom,
        elevation: 4, // Android box shadow
        shadowColor: 'rgba(0, 0, 0, 0.05)', // iOS box shadow
        shadowOffset: { width: 0, height: 1 }, // iOS box shadow
        shadowOpacity: 0.1, // iOS box shadow
        shadowRadius: 2, // iOS box shadow
      },
      textInputStyle: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingBottom: Platform.OS === 'ios' ? 8.3 / 2 : 0,
        paddingVertical: Platform.OS === 'ios' ? 8.3 / 2 : 0,
        textAlignVertical: 'center',
        width: '100%',
      },
      textInputLabelWrapper: {
        position: 'absolute',
        left: 10,
        zIndex: 10,
        bottom: 0,
        top: 0,
        justifyContent: 'center',
      },
      icon: {
        position: 'absolute',
        right: 10,
      }
});