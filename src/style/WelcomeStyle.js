import { StyleSheet } from "react-native";

export const welcomeStyle = StyleSheet.create({
    container: {
        flex: 1,
    },
    ImageView: {
        alignSelf: 'center',
        backgroundColor: 'red',
        top: 10
    },
    welcomeButtonStyle:
    {
        width: 50,
        borderRadius: 20,
        alignSelf: 'center'
    },
    forwardArrowView: {
        alignSelf: 'center'
    },
    welcomeView: {
        flex: 1,
        justifyContent: 'center'
    },
    textView: {
        flex: 0.9,
        backgroundColor: 'lightgray',
        justifyContent: 'center'
    }

})

