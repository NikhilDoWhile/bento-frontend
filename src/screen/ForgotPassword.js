import React, { useState } from 'react'
import { StyleSheet, View, Text, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import ApiHandler from '../api/ApiHandler'
import ButtonComponent from '../components/ButtomComponent'
import Header from '../components/Header'
import TextInputComponent from '../components/TextInputComponent'
import Preferences from '../LocalStorage/Prefetences'
import { loginStyle } from '../style/LoginStyle'

const ForgotPassword = ({ navigation,route }) => {
    const [showPassword, setShowPassword] = useState(false)
    const [newPassword,setNewPassword] = useState('')
    const [conformPassword,setConformPassword] = useState('')

    const hideShowPassword = () => {
        setShowPassword(!showPassword)
    }

    // const changePassword = ()=>{
    //     let email=route?.params?.email
    //     if(newPassword===conformPassword&&email!=''){
    //         ApiHandler.forgotPassword(email,newPassword).then((response)=>{
    //             if(response?.response) {
    //                 navigation.pop()
    //             }
    //         })
    //     } else {
    //         Alert.alert("Password not match")
    //     }
    // }

    const changePassword = ()=>{
        Preferences.getItem('userDetail').then((response)=>{
            let  data= JSON.parse(response)
            console.log("resp====",JSON.parse(response))
            ApiHandler.forgotPassword(data?.email,newPassword).then((response)=>{
                if(response?.response) {
                    navigation.pop()
                }
            })
        })
    }
    
    return (
        <SafeAreaView style={Styles.container}>
            <Header onBackPress={() => navigation.pop()} onNotiPress={()=>navigation.navigate('PushNotification')}                 onUserPress={() => navigation.navigate('ProfileScreen')}
/>
            <View style={{ flex: 1,  }}>
                <View style={{ flex: 1 / 2,  justifyContent: 'space-evenly' }}>
                    <Text style={{ fontSize: 20, alignSelf: 'center',fontWeight: "600",
                        fontFamily: "Sniglet-regular" }}>Forgot Password</Text>
                    <View style={{height:"50%", justifyContent: 'space-evenly' }}>
                        <TextInputComponent
                            placeholder={"New Password"}
                            inputStyle={loginStyle.inputStyle}
                            symbol={'lock'}
                            icon
                            inputContainer={loginStyle.inputViewStyle}
                            secureTextEntry={showPassword ? false : true}
                            // eyeSymbol={showPassword ? 'eye' : 'eye-with-line'}
                            // onEyePress={() => hideShowPassword()}
                            showHidePassword
                            onChangeText={(text)=>setNewPassword(text)}
                            value={newPassword}
                        />
                        <TextInputComponent
                            placeholder={"Conform Password"}
                            inputStyle={loginStyle.inputStyle}
                            symbol={'lock'}
                            icon
                            inputContainer={loginStyle.inputViewStyle}
                            secureTextEntry={showPassword ? false : true}
                            // eyeSymbol={showPassword ? 'eye' : 'eye-with-line'}
                            // onEyePress={() => hideShowPassword()}
                            showHidePassword
                            onChangeText={(text)=>setConformPassword(text)}
                            value={conformPassword}
                        />
                    </View>
                    <ButtonComponent 
                       text={"Done"}
                       onPress={()=>changePassword()}
                       buttonStyle={{marginHorizontal: 35}}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor:'red'
    }
})
export default ForgotPassword