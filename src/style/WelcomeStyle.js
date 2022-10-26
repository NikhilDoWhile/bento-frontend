import { StyleSheet } from "react-native";

export const welcomeStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    ImageView: {
        alignSelf: 'center',
        backgroundColor: 'red',
        top: 10
    },
    welcomeButtonStyle:
    {
        width: 70,
        borderRadius: 20,
        alignSelf: 'center'
    },
    forwardArrowView: {
        alignSelf: 'center'
    },
    welcomeView: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    textView: {
        flex: 0.9,
        backgroundColor: 'white',
        justifyContent: 'space-between'
    }

})

