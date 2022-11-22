import React from 'react'
import { StyleSheet, View, Text, Dimensions, ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import ImageComponent from '../components/ImageComponent'
import ButtonComponent from '../components/ButtomComponent'
import { welcomeStyle } from '../style/WelcomeStyle'
const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get('window').width

const WelcomeScreen = ({ navigation, route }) => {
    console.log("route==",route)
    return (
        <SafeAreaView style={[welcomeStyle.container]}>
            <ScrollView>
                <StatusBar style='auto' />
                <View style={[welcomeStyle.welcomeView]}>
                    <View style={[welcomeStyle.textView]}>

                        <ImageComponent
                            source={'https://img.freepik.com/free-photo/flat-lay-batch-cooking-composition_23-2148765597.jpg?w=2000'}
                            imageStyle={{ width: screenWidth, height: screenHeight / 3, borderRadius: 20 }}
                        />

                        <View style={{ height: screenHeight / 2, justifyContent: 'space-evenly', alignItems: 'center' }}>
                            <Text style={{ color: '#FFAB00', fontSize: 25, alignSelf: 'center',fontFamily: "Sniglet-regular", fontWeight:'400' }}>Welcome {route?.params?.userName}</Text>
                            <Text style={{ fontSize: 16 ,fontFamily: "Sniglet-regular"}}>Would you like to know what is your pantry based on which you can suggest you the recipes</Text>
                            <Text style={{ fontSize: 16 ,fontFamily: "Sniglet-regular"}}>Also let us know about your kids</Text>

                            <ButtonComponent
                                buttonStyle={[welcomeStyle.welcomeButtonStyle]}
                                onPress={() => navigation.navigate('AddKid',{parentId:route?.params?.parentId})}
                                showArrow
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default WelcomeScreen