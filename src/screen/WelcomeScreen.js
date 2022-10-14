import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import ImageComponent from '../components/ImageComponent'
import ButtonComponent from '../components/ButtomComponent'

const WelcomeScreen = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>
            {/* <StatusBar style='auto' /> */}
            <View style={{ alignSelf: 'center', backgroundColor: 'red', top: 10 }}>
                <ImageComponent />
            </View>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <View style={{ flex: 0.9, backgroundColor: 'lightgray', justifyContent: 'center' }}>
                    <View style={{ flex: 0.9, justifyContent: 'space-evenly', margin: 10 }}>
                        <Text style={{ color: 'black', fontSize: 25, alignSelf: 'center' }}>Welcome UserName!</Text>
                        <Text style={{ fontSize: 16 }}>Would you like to know what is your pantry based on which you can suggest you the recipes</Text>
                        <View style={{ alignSelf: 'center', backgroundColor: 'red' }}>
                            <ImageComponent />
                        </View>
                        <ButtonComponent
                            buttonStyle={{ width: 50, borderRadius: 20, alignSelf: 'center' }}
                            onPress={() => navigation.navigate('TabNavigators', {
                                screen: 'Home'
                            })}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }

})
export default WelcomeScreen