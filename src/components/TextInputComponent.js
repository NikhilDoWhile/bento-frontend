import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";


const TextInputComponent = ({ placeholder, onChangeText, value, inputStyle, keyboardType, maxLength, editable }) => {
    return (
        <TextInput
            style={[styles.input, inputStyle]}
            onChangeText={onChangeText}
            value={value}
            placeholder={placeholder}
            keyboardType={keyboardType}
            maxLength={maxLength}
            placeholderTextColor={'#999999'}
            editable={editable}
        />
    )
}
const styles = StyleSheet.create({
    input: {
        //margin: 10,
        borderWidth: 0.9,
        padding: 10,
        borderColor: 'gray',
        height: 40,
    },

})
export default TextInputComponent