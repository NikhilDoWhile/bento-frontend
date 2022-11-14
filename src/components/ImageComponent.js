import React from "react";
import { StyleSheet, View, Text, TextInput, Image } from "react-native";


const ImageComponent = ({ placeholder, onChangeText, value, inputStyle, keyboardType, maxLength, editable, source, imageStyle }) => {
    return (
        <Image
            source={{uri:source}}
            style={[styles.imageContainer, imageStyle]}
        />
    )
}
const styles = StyleSheet.create({
    imageContainer: {
        height: 50,
        width: 50,
    }

})
export default ImageComponent