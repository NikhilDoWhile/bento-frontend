import React, { useState, useEffect } from 'react'
import { View, Text, Image, TextComponent, ScrollView, Dimensions, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import ApiHandler from '../api/ApiHandler'
import ButtonComponent from '../components/ButtomComponent'
import ImageComponent from '../components/ImageComponent'
import TextInputComponent from '../components/TextInputComponent'
import { loginStyle } from '../style/LoginStyle'
const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get('window').width


const LoginScreen = ({ navigation }) => {
    const [singUp, setSingUp] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userName, setUserName] = useState('')

    const singUpData = () => {
        setSingUp(!singUp)
    }

    const moveTomainScreen = async (email, password) => {
        ApiHandler.login(email, password).then((response) => {
            if (response === 200) {
                navigation.navigate('welcome',{userName:email})
            } else {
                Alert.alert(`LoginUser is not present:${email}`)
            }
        })
    }
    const moveToSingUp = (password, userName, email) => {
        ApiHandler.singUp(password, userName, email).then((response) => {
            if (response === true) {
                navigation.navigate('welcome')
            } else {
                console.log("error====")
            }
        })
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
                                value={userName}
                                onChangeText={(text) => setUserName(text)}
                            />
                        </View>
                    }
                    <View>
                        <View style={{ margin: 7 }}>
                            <Text style={{ margin: 3, fontWeight: '600' }}>EMAIL</Text>
                            <TextInputComponent
                                placeholder={"name@email.com"}
                                symbol="email"
                                value={email}
                                onChangeText={(text) => setEmail(text)}
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
                                value={password}
                                onChangeText={(text) => setPassword(text)}
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
                        {
                            console.log("singup=====", !singUp)
                        }

                        <ButtonComponent
                            buttonStyle={{ borderRadius: 30, backgroundColor: '#FFAB00' }}
                            text={!singUp ? "LOGIN" : "SIGN UP"}
                            onPress={() => !singUp ? moveTomainScreen(email, password) : moveToSingUp(password, userName, email)}
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