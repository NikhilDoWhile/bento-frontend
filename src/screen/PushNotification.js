import React, { useState } from "react";
import { StyleSheet,View,Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const PushNotification  = ({navigation})=>{
    const [toggleData,setToggleData] = useState(false)
    const [togglePush,setTogglePush] = useState(false)
    const List =[
        {id:'1',data:'Push Notifications'},
        {id:'2',data:'Remainder to Update pantry'}
    ]
    const toggleButton = (item)=>{
            setToggleData(!toggleData)
    }
    const toggleButtonPushNotification = ()=>{
        setToggleData(!toggleData)
    }
    return (
        <SafeAreaView style={Styles.container}>
          <Header 
             onBackPress={()=>navigation.pop()}
          />
           <View style={{flex:1}}> 
               <View style={{flex:1/10,justifyContent:'center',alignItems:'center'}}>
                  <Text style={{fontSize:20}}>Notifications</Text>
               </View>
               <View style={{flex:9/10,}}>
                  <FlatList
                    data={List}
                    keyExtractor={(item)=>item.id}
                    renderItem={({item})=>{
                        return (
                            <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:20,alignItems:'center'}}>
                                <Text style={{fontSize:18}}>{item.data}</Text>
                                <MaterialCommunityIcons onPress={()=>item.data==="Push Notifications"?toggleButtonPushNotification():toggleButton()} style={{alignSelf:'flex-end'}} size={50} color="orange" name={toggleData ==true ?"toggle-switch-off":'toggle-switch'} />
                            </View>
                        )
                    }}
                  />
               </View>
           </View>
        </SafeAreaView>
    )
}
const Styles = StyleSheet.create({
    container:{
        flex:1,
    }

})
export default PushNotification
