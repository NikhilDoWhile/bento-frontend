import { Dimensions, StyleSheet } from "react-native";
const screenHeight = Dimensions.get('window').height

export const loginStyle = StyleSheet.create({
    Logincontainer: {
        flex: 1,
    },
    loginImageView: {
        justifyContent: 'center',
        alignItems: 'center',
        height: screenHeight /3.5,
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
        color: '#00A89D'
    },
    forgotPassword: {
        alignSelf: 'center',
        color: 'gray'
    },
    inputStyle: {
        borderRadius: 10,
    },
    textInputView: {
        justifyContent: 'space-between'
    },
    inputViewStyle: {
        borderWidth: 0.9,
        borderColor: '#F2E1E3',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        alignSelf:'center'
    }
})

