import React, { useState, useEffect, } from 'react'
import { View, Text, Image, TextComponent, ScrollView, Dimensions, Alert, Platform } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import ApiHandler from '../api/ApiHandler'
import ButtonComponent from '../components/ButtomComponent'
import ImageComponent from '../components/ImageComponent'
import TextInputComponent from '../components/TextInputComponent'
import Preferences from '../LocalStorage/Prefetences'
import { loginStyle } from '../style/LoginStyle'
const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get('window').width
// import PropTypes from 'prop-types'
// import * as AppAuth from 'expo-app-auth';
// import * as GoogleSignIn from 'expo-google-sign-in';


const LoginScreen = ({ navigation }) => {
    const [singUp, setSingUp] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userName, setUserName] = useState('')
    const [userGoogleInfo, setUserGoogleInfo] = useState(null)
    const [loaded, setLoaded] = useState(false)
    const [showPassword,setShowPassword] = useState(false)

    useEffect(() => {
        //   initAsync()
    }, [])

    const singUpData = () => {
        setSingUp(!singUp)
    }

    const moveTomainScreen = async (email, password) => {
        ApiHandler.login(email, password).then((response) => {
            console.log("Login===",response)
            if (response.response) {
                navigation.navigate('Child', { userName: response.name,parentId:response.response })
            } else {
                Alert.alert(`LoginUser is not present:${email,password}`)
            }
        })
    }
    // const IosClintId='200403249051-thusd9nqq34koinfk36rbke90a9utl4n.apps.googleusercontent.com'
    // const initAsync = async () => {
    //     await GoogleSignIn.initAsync({
    //       // You may ommit the clientId when the firebase `googleServicesFile` is configured
    //       clientId: IosClintId,
    //     });
    //     _syncUserWithStateAsync();
    //   };
    
    //   const _syncUserWithStateAsync = async () => {
    //    // const googleSignin= await GoogleSignIn.signIn
    //     const user = await GoogleSignIn.signInSilentlyAsync();
    //     setUserGoogleInfo({user})
    //   };
    //  const signOutAsync = async () => {
    //     await GoogleSignIn.signOutAsync();
    //     setUserGoogleInfo(null)
    //   };
    
    //  const signInAsync = async () => {
    //     try {
    //       await GoogleSignIn.askForPlayServicesAsync();
    //       const { type, user } = await GoogleSignIn.signInAsync();
    //       if (type === 'success') {
    //         _syncUserWithStateAsync();
    //       }
    //     } catch ({ message }) {
    //       alert('login: Error:' + message);
    //     }
    //   };
    
    //  const onPressData = () => {
    //     if (userGoogleInfo) {
    //       signOutAsync();
    //     } else {
    //     signInAsync();
    //     }
    //   };
    const moveToSingUp = (password, userName, email) => {
        ApiHandler.singUp(password, userName, email).then((response) => {
            console.log("singup===",response.name,email)
            if (response.response) {
                let name=response.name
                let parentId=response.response
                let data={name,email,parentId,password}
                Preferences.setItem("userDetail",JSON.stringify(data))
                navigation.navigate('welcome', { userName: response.name,parentId:response.response })
            } else {
                Alert.alert(`User Already SIgnin:${email,password}`)
            }
        })
    }

   const hideShowPassword = ()=>{
    setShowPassword(!showPassword)
   }

    return (
        <SafeAreaView vertical={true} style={[loginStyle.Logincontainer]}>
            <ScrollView>
                <View style={[loginStyle.loginImageView,{backgroundColor:'#F6F3E7'}]}>
                    <Image
                        source={require('../../assets/bentoLogo-grn.png')}
                        style={{height:50,width:screenWidth/1.4}}
                    />
                </View>
                <View style={[loginStyle.textInputView,{borderTopLeftRadius:20,borderTopRightRadius:20,backgroundColor:'white'}]}>
                    <Text style={{fontSize:20,margin:10,color:'#FFAB00'}}>{singUp ?"SingUp":"Login"}</Text>
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
                                inputStyle={[loginStyle.inputStyle,{justifyContent:'space-evenly',right:20}]}
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
                                secureTextEntry ={showPassword ?false:true}
                                eyeSymbol={showPassword ? 'eye':'eye-with-line'}
                                onEyePress={()=>hideShowPassword()}
                                showHidePassword
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
                                    secureTextEntry ={showPassword ?false:true}
                                    eyeSymbol={showPassword ? 'eye':'eye-with-line'}
                                    onEyePress={()=>hideShowPassword()}
                                    showHidePassword
                                />
                            </View>
                        }

                        {
                            !singUp && <Text onPress={()=>navigation.navigate('ForgotPassword',{email:email})} style={[loginStyle.forgotPassword, { alignSelf: 'flex-end', right: 10, }]}>Forget Password</Text>
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
                            // onPress={()=>onPressData}
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