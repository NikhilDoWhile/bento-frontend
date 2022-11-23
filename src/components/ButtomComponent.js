import React from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import ImageComponent from './ImageComponent';

const ButtonComponent = ({ text, buttonStyle, textStyle, showLine, onPress, showArrow, showImage,google }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, buttonStyle]}>
            {
                showArrow ? <AntDesign size={20} color="white" name="arrowright" /> : <Text style={[styles.textStyles, textStyle]}>{text}</Text>
            }
            {
                showLine ? <View style={{ width: 420, height: 1, backgroundColor: 'red', bottom: 9 }} /> : null
            }
            {
                showImage ?
                    <View style={{   justifyContent: 'space-between', alignItems: 'center',flexDirection:'row',bottom:10,width:'60%'}}>
                        <ImageComponent
                            source={'https://blog.hubspot.com/hubfs/image8-2.jpg'}
                            imageStyle={{ height: 20, width: 20, }}
                        />
                         {
                            google ? <Text style={{ fontSize: 16,left:10 }}>Continue with Google</Text> : null
                        }
                    </View>
                    :
                    null
            }
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        height: 40,
        margin: 10,
        padding: 10,
        backgroundColor: '#FFAB00',
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
        // color: 'white'
    },
    textStyles: {
        color: 'white'
    }
});
export default ButtonComponent