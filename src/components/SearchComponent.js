import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import TextInputComponent from './TextInputComponent';

const SearchComponent = ({ onPress, movieSelection }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container,]}>
            <EvilIcons size={26} color="gray" name="search" style={{ left: 10 }} />
            <TextInputComponent
                inputStyle={{ width: '90%', borderWidth: 0 }}
                placeholder={'search'}
            />
            {/* <AntDesign size={20} color="black" name="down" /> */}
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        width: "90%",
        height: 40,
        elevation: 4,
        alignSelf: 'center',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10,
        margin: 10,
        borderRadius: 10,
        borderWidth: 1

    },
    textStyle: {
        fontSize: 15,
    }

})
export default SearchComponent;