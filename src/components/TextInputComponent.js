import React from "react";
import { StyleSheet, View, Text, TextInput, Dimensions } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo'
const screenWidth = Dimensions.get('window').width



const TextInputComponent = ({ placeholder, onChangeText, value, inputStyle, keyboardType, maxLength, editable, symbol, icon, inputContainer ,secureTextEntry,eyeSymbol,onEyePress,showHidePassword, capitalize}) => {
    return (
      <View
        style={[
          styles.inputContainer,
          inputContainer,
          { width: screenWidth / 1.2 },
        ]}
      >
        {icon ? (
          <MaterialIcons
            style={{ marginLeft: 10 }}
            size={20}
            color="gray"
            name={symbol}
          />
        ) : null}
        <TextInput
          style={[styles.input, inputStyle]}
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
          keyboardType={keyboardType}
          maxLength={maxLength}
          placeholderTextColor={"#7B8794"}
          editable={editable}
          autoCapitalize={capitalize ? capitalize : 'none'}
          secureTextEntry={secureTextEntry}
        />
        {showHidePassword ? (
          <Entypo
            style={{ right: 10 }}
            onPress={onEyePress}
            size={20}
            color="gray"
            name={eyeSymbol}
          />
        ) : null}
      </View>
    );
}
const styles = StyleSheet.create({
    input: {
        padding: 10,
        height: 40,
        width: screenWidth / 1.3,
    },

})
export default TextInputComponent