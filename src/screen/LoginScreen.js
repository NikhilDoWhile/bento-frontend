import React, { useState } from 'react'
import { View, Text, Image, TextComponent } from 'react-native'
import ButtonComponent from '../components/ButtomComponent'
import ImageComponent from '../components/ImageComponent'
import TextInputComponent from '../components/TextInputComponent'
// add styling below
import { loginStyle } from '../style/LoginStyle'

const LoginScreen = ({ navigation }) => {
    const [singUp, setSingUp] = useState(false)
    const singUpData = () => {
        setSingUp(!singUp)
    }
    const moveTomainScreen = () => {
        navigation.navigate('welcome')
    }

    return (
        <View style={[loginStyle.Logincontainer]}>
            <View style={[loginStyle.loginImageView]}>
                <ImageComponent
                    source={'https://previews.123rf.com/images/tanyastock/tanyastock1803/tanyastock180300490/97923644-user-icon-avatar-login-sign-circle-button-with-soft-color-gradient-background-vector-.jpg'}
                />
            </View>
            <View style={[loginStyle.textInputView]}>
                {
                    singUp &&
                    <View style={{ margin: 7 }}>
                        <Text style={{ margin: 3 }}>Name</Text>
                        <TextInputComponent
                            placeholder={"User name"}
                            inputStyle={loginStyle.inputStyle}
                        />
                    </View>
                }
                <View style={{ margin: 7 }}>
                    <Text style={{ margin: 3 }}>Email</Text>
                    <TextInputComponent
                        placeholder={"name@email.com"}
                        inputStyle={loginStyle.inputStyle}
                    />
                </View>
                <View style={{ margin: 7 }}>
                    <Text style={{ margin: 3 }}>Password</Text>
                    <TextInputComponent
                        placeholder={"********"}
                        inputStyle={loginStyle.inputStyle}
                    />
                </View>
                {
                    singUp &&
                    <View style={{ margin: 7 }}>
                        <Text style={{ margin: 3 }}>Confirm Password</Text>
                        <TextInputComponent
                            placeholder={"********"}
                            inputStyle={loginStyle.inputStyle}
                        />
                    </View>
                }

                <ButtonComponent
                    buttonStyle={{ borderRadius: 30 }}
                    text={!singUp ? "LOGIN" : "SINGUP"}
                    onPress={() => moveTomainScreen()}
                />
                <View style={[loginStyle.loginButton]}>
                    <Text style={[loginStyle.loginSingInSingUpText]}>{!singUp ? "Don't have and account" : "Already have an account"} ?<Text onPress={() => singUpData()} style={[loginStyle.singUpColor]}>{!singUp ? " Sing in" : " Login"}</Text></Text>
                    {
                        !singUp && <Text style={[loginStyle.forgotPassword]}>Forget Password</Text>
                    }
                </View>
            </View>
        </View>
    )
}
export default LoginScreen