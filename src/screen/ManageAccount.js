import React, { useEffect, useState } from 'react'
import { StyleSheet,View,Text, FlatList, Dimensions, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'
const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get('window').width
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Preferences from '../LocalStorage/Prefetences'
import ApiHandler from '../api/ApiHandler'

const ManageAccount = ({navigation})=>{
    const [data,setData] = useState([])
     const List =[
        {id:1,name:"shivam",designation:'Parent',url:'https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc='},
        {id:2,name:"shivam",designation:'Parent',url:'https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc='},
        {id:3,name:"shivam",designation:'Parent',url:'https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc='},
     ]
      useEffect(()=>{
         getmanageAccount()
      },[])
   const getmanageAccount = ()=>{
    let newArray=[...data]
    Preferences.getItem('userDetail').then((response)=>{
        let  data= JSON.parse(response)
        newArray.push({name:data.name,designation:"Parent",url:'https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc='})
        console.log("resp====",JSON.parse(response))
        ApiHandler.getKid(data.parentId).then((response)=>{
            console.log("getKid===",response.kids)
            let kids=response.kids
             kids.map((element)=>{
                newArray.push({name:element.name,designation:'Kid',url:'http://www.morchemist.com/images/child-care-inner.jpg'})
             })
             setData(newArray)
        })
    })
   }
    const renderItem = ({ item }) => {
        return (
            <View style={{ width:screenWidth/1.1, height: 90,  marginTop: 10, alignSelf: 'center', borderRadius: 20 ,justifyContent:'space-between',flexDirection:'row',backgroundColor:'#F6F3E7'}}>
                <View style={{width:screenWidth/2,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',borderRadius: 20}}>
                     <View style={{height:70,width:70,borderRadius:35,backgroundColor:'white',left:10}}>
                         <Image
                           source={{uri:item.url}}
                           style={{height:70,width:70,borderRadius:35}}
                         />
                     </View>
                     <View style={{marginLeft:20}}>
                        <Text>{item.name}</Text>
                        <Text>{item.designation}</Text>
                     </View>
                </View>
                <View style={{width:screenWidth/2.5,height:90,flexDirection:'row',justifyContent:'flex-end',borderRadius: 20}}>
                <Ionicons style={{alignSelf:'flex-end',marginRight:20,bottom:30}} size={20} color="black" name="pencil" />
                <AntDesign style={{alignSelf:'flex-end',marginRight:20,bottom:30}} size={20} color="black" name="delete" />
                </View>
                
            </View>
        )
    }
    return (
        <SafeAreaView style={Styles.container}>
            {/* {console.log("data===========",data)} */}
            <Header
               onBackPress={()=>navigation.pop()}
               onUserPress={() => navigation.navigate('ProfileScreen')}
            />
            <View style={{flex:1,}}>
                <View style={{flex:1/10,justifyContent:'center',alignItems:'center'}}>
                     <Text style={{fontSize:20,}}>Manage Account</Text>
                </View>
                <View style={{flex:9/10}}>
                    <FlatList
                        data={data}
                        keyExtractor={(item) => item.id}
                        renderItem={renderItem}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

const Styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    }
})
export default ManageAccount