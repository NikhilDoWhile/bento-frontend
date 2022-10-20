import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import ImageComponent from '../components/ImageComponent'
import ButtonComponent from '../components/ButtomComponent'
import { welcomeStyle } from '../style/WelcomeStyle'

const WelcomeScreen = ({ navigation }) => {

    return (
        <SafeAreaView style={[welcomeStyle.container]}>
            <StatusBar style='auto' />
            <View style={[welcomeStyle.ImageView]}>
                <ImageComponent
                    source={'https://cdn5.vectorstock.com/i/1000x1000/48/74/hand-drawn-of-welcome-logo-vector-23994874.jpg'}
                    imageStyle={{ width: 150 }}
                />
            </View>
            <View style={[welcomeStyle.welcomeView]}>
                <View style={[welcomeStyle.textView]}>
                    <View style={{ flex: 0.9, justifyContent: 'space-evenly', margin: 10 }}>
                        <Text style={{ color: 'black', fontSize: 25, alignSelf: 'center' }}>Welcome UserName!</Text>
                        <Text style={{ fontSize: 16 }}>Would you like to know what is your pantry based on which you can suggest you the recipes</Text>
                        <View style={[welcomeStyle.forwardArrowView]}>
                            <ImageComponent
                                source={'https://previews.123rf.com/images/tanyastock/tanyastock1803/tanyastock180300490/97923644-user-icon-avatar-login-sign-circle-button-with-soft-color-gradient-background-vector-.jpg'}
                            />
                        </View>
                        <ButtonComponent
                            buttonStyle={[welcomeStyle.welcomeButtonStyle]}
                            onPress={() => navigation.navigate('Pantry')}
                            showArrow
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default WelcomeScreen