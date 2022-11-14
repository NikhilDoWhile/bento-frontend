import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import Feather from 'react-native-vector-icons/Feather';

const ChildComponent = ({ onPress,name }) => {
    return (
        <View style={{width:120,alignItems:'center'}}>
            <TouchableOpacity onPress={onPress} style={Styles.container}>
                <Feather size={40} color="gray" name="user" />
            </TouchableOpacity>
           <Text>{name}</Text>
        </View>

    )
}
const Styles = StyleSheet.create({
    container: {
        height: 100,
        width: 100,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
    }
})
export default ChildComponent