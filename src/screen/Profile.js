import React, { useState } from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { loginStyle } from '../style/LoginStyle';
import TextInputComponent from '../components/TextInputComponent';
import ButtonComponent from '../components/ButtomComponent';
import Feather from 'react-native-vector-icons/Feather';
const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get('window').width

const Profile = () => {
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [phomeNumber,setPhoneNumber] = useState('')
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <View style={{ flex: 1,}}>
                <View style={{ height: 50, width: '100%',justifyContent:'space-between',flexDirection:'row',alignItems:'center',paddingHorizontal:20}}>
                    <Text style={{ fontSize: 20 }}>Personal setting</Text>
                    <Ionicons  size={20} color="black" name="pencil" />
                </View>
                <View style={{flex:1/4,justifyContent:'space-evenly',alignItems:'center'}}>
                    <View style={{height:100,width:100,borderWidth:1,borderRadius:50,justifyContent:'center',alignItems:'center'}}>
                    <Feather  size={80} color="gray" name="user" />
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-evenly',width:'50%'}}>
                        <Text style={{fontSize:16,color:'blue'}}>Upload</Text>
                        <Text style={{fontSize:16,color:'blue'}}>Delete</Text>
                    </View>
                </View>
                <View style={{flex:1/2,justifyContent:'center'}}>
                <View style={{ margin: 7 }}>
                            <Text style={{ margin: 3, fontWeight: '600' }}>NAME</Text>
                            <TextInputComponent
                                placeholder={"User name"}
                                inputStyle={[loginStyle.inputStyle, { borderWidth: 0.9, width: screenWidth / 1.04, borderColor: 'gray' }]}
                                value={userName}
                                onChangeText={(text) => setUserName(text)}
                            />
                        </View>
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
                            <Text style={{ margin: 3, fontWeight: '600' }}>Phone Number</Text>
                            <TextInputComponent
                                placeholder={"phone Number"}
                                symbol="phone"
                                value={phomeNumber}
                                onChangeText={(text) => setPhoneNumber(text)}
                                inputStyle={loginStyle.inputStyle}
                                icon
                                inputContainer={loginStyle.inputViewStyle}
                            />
                        </View>
                </View>
                <View style={{flex:1/3,alignItems:'center',justifyContent:'center'}}>
                    <ButtonComponent
                       text={"Save Change"}
                       buttonStyle={{width:200,borderRadius:20}}
                    />
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