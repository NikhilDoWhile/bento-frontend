import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Header = () => {

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20, alignSelf: 'center' }}>L O G O</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: 'white',
        justifyContent: 'center'
    }

})
export default Header