import React from "react";
import { StyleSheet, View, Text, TextInput, Dimensions } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo'
const screenWidth = Dimensions.get('window').width



const TextInputComponent = ({ placeholder, onChangeText, value, inputStyle, keyboardType, maxLength, editable, symbol, icon, inputContainer ,secureTextEntry,eyeSymbol,onEyePress,showHidePassword}) => {
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
                secureTextEntry={secureTextEntry}
            />
          {showHidePassword ?  <Entypo style={{marginRight:10}} onPress={onEyePress} size={20} color="gray" name={eyeSymbol} />:null}
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        padding: 10,
        height: 40,
        width: screenWidth / 1.3,
    },

})
export default TextInputComponent