import React from "react";
import { StyleSheet, View, Text, TextInput, Dimensions } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const screenWidth = Dimensions.get('window').width



const TextInputComponent = ({ placeholder, onChangeText, value, inputStyle, keyboardType, maxLength, editable, symbol, icon, inputContainer }) => {
    return (
        <View style={[styles.inputContainer, inputContainer]}>
            {icon ? <MaterialIcons size={20} color="gray" name={symbol} /> : null}
            <TextInput
                style={[styles.input, inputStyle]}
                onChangeText={onChangeText}
                value={value}
                placeholder={placeholder}
                keyboardType={keyboardType}
                maxLength={maxLength}
                placeholderTextColor={'#999999'}
                editable={editable}
                autoCapitalize='none'
            />
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        padding: 10,
        height: 40,
        width: screenWidth / 1.2
    },

})
export default TextInputComponent