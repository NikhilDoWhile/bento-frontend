import React from "react";
import { StyleSheet, View, Text, TextInput, Image } from "react-native";


const ImageComponent = ({ placeholder, onChangeText, value, inputStyle, keyboardType, maxLength, editable }) => {
    return (
        <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYqA39Tbi6MqO6MJogGZCTsbHwch-C3FD3KPvjqbo&s' }}
            style={[styles.imageContainer]}
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