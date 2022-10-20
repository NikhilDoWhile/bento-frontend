import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const LunchBoxScreen = () => {

    return (
        <SafeAreaView style={styles.container}>
            <Text style={{ fontSize: 30, alignSelf: 'center' }}>LunchBox</Text>
            <View>

            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange'
    }

})
export default LunchBoxScreen