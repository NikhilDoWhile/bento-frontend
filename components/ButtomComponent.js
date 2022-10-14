import React from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'

const ButtonComponent = ({ text, buttonStyle, textStyle, showLine, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, buttonStyle]}>
            <Text style={[styles.textStyles, textStyle]}>{text}</Text>
            {
                showLine ? <View style={{ width: 420, height: 1, backgroundColor: 'red', bottom: 9 }} /> : null
            }
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        height: 40,
        margin: 12,
        padding: 10,
        backgroundColor: 'blue',
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
        // color: 'white'
    },
    textStyles: {
        color: 'white'
    }
});
export default ButtonComponent