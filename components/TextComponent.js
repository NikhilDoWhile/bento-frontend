import React from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'

const ButtonComponent = ({ text, textStyle }) => {
    return (
        <Text style={[styles.container, textStyle]}>{text}</Text>
    )
}
const styles = StyleSheet.create({
    container: {
        fontSize: 14,
        color: 'black'
    },
    textStyles: {
        color: 'white'
    }
});
export default ButtonComponent