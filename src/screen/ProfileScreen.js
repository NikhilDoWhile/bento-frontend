import React, { useState } from "react";
import { StyleSheet,View,Text, FlatList, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import AntDesign from 'react-native-vector-icons/AntDesign';

const ProfileScreen  = ({navigation})=>{
    let data=[
        {id:1,screen:'ProfileScreen'},
        {id:2,screen:'Manage Accounts'},
        {id:3,screen:'Change Password'},
        {id:4,screen:'Push Notification'}
    ]
    const [profileData,setProfileData] = useState(data)
    const navigateToprofileScreen =(profile)=>{
         if(profile==='ProfileScreen') {
            navigation.navigate('Profile')
         }
    }
    const renderItem = ({item})=>{
         return (
            <TouchableOpacity style={{margin:5}}>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:13}}>
                   <Text style={{margin:10}}>{item.screen}</Text>
                   <AntDesign onPress={()=>navigateToprofileScreen(item.screen)}  size={20} color="black" name="right" />
                </View>
                <View style={{width:'90%',height:2,backgroundColor:'black',marginBottom:10,alignSelf:'center'}}/>
            </TouchableOpacity>
         )
    }
    return (
        <SafeAreaView style={styles.container}>
            <Header/>
             <View style={{flex:1,}}>
                <View style={{height:30,width:'100%',justifyContent:'center',margin:20}}>
                    <Text style={{fontSize:20}}>Profile</Text>
                </View>
                 <FlatList
                    data={profileData}
                    keyExtractor={(item)=>item.id}
                    renderItem={renderItem}
                 />
             </View>
        </SafeAreaView>
    )
}
const styles= StyleSheet.create({
    container:{
        flex:1,
    }
})
export default ProfileScreen