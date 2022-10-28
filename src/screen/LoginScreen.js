import React, { useState, useEffect } from 'react'
import { View, Text, Image, TextComponent, ScrollView, Dimensions } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import ButtonComponent from '../components/ButtomComponent'
import ImageComponent from '../components/ImageComponent'
import TextInputComponent from '../components/TextInputComponent'
// add styling below
import { loginStyle } from '../style/LoginStyle'
const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get('window').width


const LoginScreen = ({ navigation }) => {
    const [singUp, setSingUp] = useState(false)


    const singUpData = () => {
        setSingUp(!singUp)
    }

    const moveTomainScreen = () => {
        let data = {
            userName: 'user@gmail.com',
            password: '1234',
        }

        //getRestApi(`${baseUrl.login}userName=${data.userName}&password=${data.password}`)
        navigation.navigate('welcome')
    }

    return (
        <SafeAreaView vertical={true} style={[loginStyle.Logincontainer]}>
            <ScrollView>
                <View style={[loginStyle.loginImageView]}>
                    <ImageComponent
                        source={'https://previews.123rf.com/images/tanyastock/tanyastock1803/tanyastock180300490/97923644-user-icon-avatar-login-sign-circle-button-with-soft-color-gradient-background-vector-.jpg'}
                    />
                </View>
                <View style={[loginStyle.textInputView]}>
                    {
                        singUp &&
                        <View style={{ margin: 7 }}>
                            <Text style={{ margin: 3, fontWeight: '600' }}>NAME</Text>
                            <TextInputComponent
                                placeholder={"User name"}

                                inputStyle={[loginStyle.inputStyle, { borderWidth: 0.9, width: screenWidth / 1.04, borderColor: 'gray' }]}
                            />
                        </View>
                    }
                    <View>
                        <View style={{ margin: 7 }}>
                            <Text style={{ margin: 3, fontWeight: '600' }}>EMAIL</Text>
                            <TextInputComponent
                                placeholder={"name@email.com"}
                                symbol="email"
                                inputStyle={loginStyle.inputStyle}
                                icon
                                inputContainer={loginStyle.inputViewStyle}
                            />
                        </View>
                        <View style={{ margin: 7 }}>
                            <Text style={{ margin: 3, fontWeight: '600' }}>PASSWORD</Text>
                            <TextInputComponent
                                placeholder={"********"}
                                inputStyle={loginStyle.inputStyle}
                                symbol={'lock'}
                                icon
                                inputContainer={loginStyle.inputViewStyle}
                            />
                        </View>
                        {
                            singUp &&
                            <View style={{ margin: 7 }}>
                                <Text style={{ margin: 3, fontWeight: '600' }}>CONFIRM PASSWORD</Text>
                                <TextInputComponent
                                    placeholder={"********"}
                                    inputStyle={loginStyle.inputStyle}
                                    symbol={'lock'}
                                    icon
                                    inputContainer={loginStyle.inputViewStyle}
                                />
                            </View>
                        }

                        {
                            !singUp && <Text style={[loginStyle.forgotPassword, { alignSelf: 'flex-end', right: 10, }]}>Forget Password</Text>
                        }

                        <ButtonComponent
                            buttonStyle={{ borderRadius: 30, backgroundColor: '#FFAB00' }}
                            text={!singUp ? "LOGIN" : "SIGN UP"}
                            onPress={() => moveTomainScreen()}
                        />
                        <View style={{ padding: 10 }}>
                            <Text style={[loginStyle.forgotPassword]}>{!singUp ? "Or login with" : "or sign with"}</Text>
                        </View>
                        <View style={{ padding: 10 }}>
                            <ButtonComponent
                                showImage
                                buttonStyle={{ backgroundColor: 'white', borderWidth: 1, justifyContent: 'center', width: 100, alignSelf: 'center', borderRadius: 30, height: 35, borderColor: '#0B8457' }}
                            />
                        </View>
                    </View>
                    <View style={[loginStyle.loginButton]}>
                        <Text style={[loginStyle.loginSingInSingUpText]}>{!singUp ? "Don't have and account" : "Already have an account"} ?<Text onPress={() => singUpData()} style={[loginStyle.singUpColor]}>{!singUp ? " Sign in" : " Login"}</Text></Text>

                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default LoginScreen