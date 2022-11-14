import React, { useState } from 'react'
import { StyleSheet, View, Text, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import ApiHandler from '../api/ApiHandler'
import ButtonComponent from '../components/ButtomComponent'
import Header from '../components/Header'
import TextInputComponent from '../components/TextInputComponent'
import { loginStyle } from '../style/LoginStyle'

const ForgotPassword = ({ navigation,route }) => {
    const [showPassword, setShowPassword] = useState(false)
    const [newPassword,setNewPassword] = useState('')
    const [conformPassword,setConformPassword] = useState('')

    const hideShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const changePassword = ()=>{
        let email=route?.params?.email
        if(newPassword===conformPassword&&email!=''){
            ApiHandler.forgotPassword(email,showPassword).then((response)=>{
                console.log("forgot========",response)
                if(response) {
                    navigation.replace('login')
                }
            })
        } else {
            Alert.alert("Password not match")
        }
    }
    
    return (
        <SafeAreaView style={Styles.container}>
            <Header onBackPress={() => navigation.pop()} />
            <View style={{ flex: 1,  }}>
                <View style={{ flex: 1 / 2,  justifyContent: 'space-evenly' }}>
                    <Text style={{ fontSize: 20, fontWeight: '800', alignSelf: 'center' }}>Forgot Password</Text>
                    <View style={{height:"50%", justifyContent: 'space-evenly' }}>
                        <TextInputComponent
                            placeholder={"New Password"}
                            inputStyle={loginStyle.inputStyle}
                            symbol={'lock'}
                            icon
                            inputContainer={loginStyle.inputViewStyle}
                            secureTextEntry={showPassword ? false : true}
                            eyeSymbol={showPassword ? 'eye' : 'eye-with-line'}
                            onEyePress={() => hideShowPassword()}
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
                            eyeSymbol={showPassword ? 'eye' : 'eye-with-line'}
                            onEyePress={() => hideShowPassword()}
                            showHidePassword
                            onChangeText={(text)=>setConformPassword(text)}
                            value={conformPassword}
                        />
                    </View>
                    <ButtonComponent 
                       text={"Done"}
                       onPress={()=>changePassword()}
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