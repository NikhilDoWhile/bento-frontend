import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

const Header = ({ logo, onBackPress, headerTitle, showHeaderTitle }) => {

    return (
        <View style={styles.container}>
            {
                logo ? <Text style={{ fontSize: 20 }}>L O G O</Text> : <AntDesign onPress={onBackPress} size={20} color="gray" name="arrowleft" />
            }
            {
                showHeaderTitle ? <Text style={{ fontSize: 17, fontWeight: '900' }}>{headerTitle}</Text> : null
            }


            <View style={{ flexDirection: 'row', width: 50, justifyContent: 'space-between' }}>
                <Feather size={22} color="gray" name="user" />
                <AntDesign size={20} color="gray" name="bells" />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10
    }

})
export default Header