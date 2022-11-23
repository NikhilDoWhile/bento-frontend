import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Dimensions, Image, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { loginStyle } from '../style/LoginStyle';
import TextInputComponent from '../components/TextInputComponent';
import ButtonComponent from '../components/ButtomComponent';
import Feather from 'react-native-vector-icons/Feather';
import Preferences from '../LocalStorage/Prefetences';
import ApiHandler from '../api/ApiHandler';
const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get('window').width

const Profile = ({navigation}) => {
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [phomeNumber, setPhoneNumber] = useState('')
    const [password,setPassword]= useState('')
    const [parentId,setParentId] = useState('')
     useEffect(()=>{
        Preferences.getItem('userDetail').then((response)=>{
            let  data= JSON.parse(response)
            console.log("resp====",JSON.parse(response))
            setUserName(data.name)
            setEmail(data.email)
            setPassword(data.password)
            setParentId(data.parentId)
        })
     },[])

     const editNameProfile = ()=>{
        console.log("password",password,userName)
        ApiHandler.updateProfile(parentId,password,userName).then((response)=>{
            console.log("update Profile===",response.name)
            if(response.name) {
               Alert.alert("Profile updated")
            }
        })
     }
    return (
        <SafeAreaView style={styles.container}>
            <Header onBackPress={()=>navigation.pop()} onNotiPress={()=>navigation.navigate('PushNotification')}/>
            <View style={{ flex: 1, justifyContent: 'space-between' ,backgroundColor:'white'}}>
                <View style={{ height: 50, width: '100%', justifyContent: 'center', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20 }}>
                    <Text style={{ fontSize: 20 }}>Personal setting</Text>
                   
                </View>
                {/* <View style={{ height: 100, width: 100, borderWidth: 1, borderRadius: 50, justifyContent: 'center', alignItems: 'center', right: 0, left: 0, top: 100 ,backgroundColor:'red' ,alignSelf:'center'}}>
                            <Feather size={80} color="gray" name="user" />
                        </View> */}
                <View style={{ flex: 1 / 1.2, backgroundColor: '#F6F3E7', borderTopRightRadius: 20, borderTopLeftRadius: 20,justifyContent:'space-evenly', }}>
                <View style={{ alignItems: 'center',flex:1/5,bottom:50 }}>
                        <View style={{ height: 100, width: 100, borderWidth: 1, borderRadius: 50, justifyContent: 'center', alignItems: 'center', right: 0, left: 0, top: 0 , }}>
                           <Image
                              source={{uri:'https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc='}}
                              style={{height:100,width:100,borderRadius:50}}
                           />
                        </View>
                        <Ionicons style={{alignSelf:'flex-end',marginRight:20,bottom:30}} size={20} color="black" name="pencil" />
                    </View>
                    <View style={{ flex: 1 / 2, justifyContent: 'center' }}>
                        <View style={{ margin: 7 }}>
                            <Text style={{ margin: 3, fontWeight: '600' }}>NAME</Text>
                            <TextInputComponent
                                placeholder={"User name"}
                                inputStyle={[loginStyle.inputStyle, {  width: screenWidth / 1.04, borderColor: 'gray' }]}
                                value={userName}
                                onChangeText={(text) => setUserName(text)}
                                inputContainer={[loginStyle.inputViewStyle,{backgroundColor:'white',borderWidth:0,borderColor:'white'}]}
                            />
                        </View>
                        <View style={{ margin: 7 }}>
                            <Text style={{ margin: 3, fontWeight: '600' }}>Email</Text>
                            <TextInputComponent
                                placeholder={"name@email.com"}
                                symbol="email"
                                value={email}
                                onChangeText={(text) => setEmail(text)}
                                editable={false}
                                inputContainer={[loginStyle.inputViewStyle,{backgroundColor:'white',borderWidth:0,borderColor:'white'}]}
                                inputStyle={[loginStyle.inputStyle, {  width: screenWidth / 1.04, }]}
                            />
                        </View>
                        <View style={{ margin: 7 }}>
                            <Text style={{ margin: 3, fontWeight: '600' }}>Profile</Text>
                            <TextInputComponent
                                placeholder={"phone Number"}
                                symbol="phone"
                                value={phomeNumber}
                                onChangeText={(text) => setPhoneNumber(text)}
                                // inputStyle={loginStyle.inputStyle}
                                // icon
                                inputContainer={[loginStyle.inputViewStyle,{backgroundColor:'white',borderWidth:0,borderColor:'white'}]}
                                inputStyle={[loginStyle.inputStyle, {  width: screenWidth / 1.04,  }]}
                            />
                        </View>
                    </View>
                    <View style={{ flex: 1 / 3, alignItems: 'center', justifyContent: 'center' }}>
                        <ButtonComponent
                            text={"Save Change"}
                            buttonStyle={{ width: 200, borderRadius: 20 }}
                            onPress={()=>editNameProfile()}
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
        //backgroundColor:'red'
    }
})
export default Profile