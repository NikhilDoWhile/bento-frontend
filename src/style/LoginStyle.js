import { StyleSheet } from "react-native";

export const loginStyle = StyleSheet.create({
    Logincontainer: {
        flex: 1,
        justifyContent: 'space-evenly'
    },
    loginImageView: {
        alignSelf: 'center',
    },
    loginButton: {
        marginTop: 10,
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    loginSingInSingUpText: {
        alignSelf: 'center',
        color: 'gray'
    },
    singUpColor: {
        color: 'blue'
    },
    forgotPassword: {
        alignSelf: 'center',
        color: 'gray'
    },
    inputStyle: {
        borderRadius: 10
    },
    textInputView: { justifyContent: 'center' }
})

