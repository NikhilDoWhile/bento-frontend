import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image, Dimensions } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import TextInputComponent from './TextInputComponent';
const screenWidth = Dimensions.get('window').width

const SearchComponent = ({ onPress, movieSelection, onChangeText, value, searchStyle,onCrossPress }) => {
    return (
        <View onPress={onPress} style={[styles.container, searchStyle]}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',width:'70%',height:40 }}>
                <EvilIcons size={26} color="gray" name="search" style={{}} />
                <TextInputComponent
                    inputStyle={{ borderWidth: 0, width: screenWidth /2, }}
                    placeholder={'search'}
                    onChangeText={onChangeText}
                    value={value}
                />
            </View>
            <Entypo onPress={onCrossPress} size={25} color="black" name="cross" />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: screenWidth/1.24,
        height: 40,
        elevation: 4,
        // alignSelf: 'center',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10,
        margin: 10,
        borderRadius: 10,
        borderWidth: 1,
        // backgroundColor:'red'

    },
    textStyle: {
        fontSize: 15,
    }

})
export default SearchComponent;