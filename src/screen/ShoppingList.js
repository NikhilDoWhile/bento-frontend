import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const ShoppingListScreen = () => {

    return (
        <SafeAreaView style={styles.container}>
            <Text style={{ fontSize: 30, alignSelf: 'center' }}>Shopping List</Text>
            <View>

            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'green'
    }

})
export default ShoppingListScreen