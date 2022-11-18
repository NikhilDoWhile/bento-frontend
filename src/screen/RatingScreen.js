import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, FlatList, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import ApiHandler from '../api/ApiHandler'
import Header from '../components/Header'
import Preferences from '../LocalStorage/Prefetences'

const RatingScreen = ({ navigation,route }) => {
    const [rating, setRating] = useState([])

    useEffect(()=>{
       getRating()
    },[])

    const getRating = ()=>{
        let parentId=route?.params?.parentId
        let kidName=route?.params?.kidName
        Preferences.getItem("key").then((response)=>{
           let data=JSON.parse(response)
           console.log("data]]]]",data )
           ApiHandler.getRating(data.parentId,data.kidName).then((response)=>{
             if(response) {
                setRating(response)
             }
        })
        })
    }

    const renderItem = ({ item }) => {
        console.log("item=====",item)
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: 10,alignItems:'center' }}>
                <Text style={{ fontSize: 14, }}>25/08/2022</Text>
                <Text style={{ fontSize: 14, right: 10 }} >{item.kidName}</Text>
                <Text style={{ fontSize: 14, right: 10 }}>cheese and pasta</Text>
                <Image
                        source={item.rating===3?require('../../assets/Vector-1.png'):item.rating===2?require('../../assets/Vector-2.png'):item.rating===1 ?require('../../assets/Vector.png'):require('../../assets/Vector-2.png')}
                        style={{height:20,width:20}}
                    />
                {/* <Image
                    source={{ uri: item.rate }}
                    style={{ height: 20, width: 20, right: 10 }}
                /> */}
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header
                showHeaderTitle
                logo
                onUserPress={()=>navigation.navigate('ProfileScreen')}
            />
            <View style={{}}>
                <Text style={{ fontSize: 25, fontWeight: 'bold', margin: 10 ,alignSelf:'center'}}>Rating</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', }}>
                    <Text style={{ fontSize: 18, fontWeight: '800' }}>Date</Text>
                    <Text style={{ fontSize: 18, fontWeight: '800' }} >Name</Text>
                    <Text style={{ fontSize: 18, fontWeight: '800' }}>Recipe</Text>
                    <Text style={{ fontSize: 18, fontWeight: '800' }} >Rating</Text>
                </View>
                <View style={{height:1.2,width:'90%',backgroundColor:'#262626',alignSelf:'center',top:5,opacity:0.5}}/>
            </View>
            <FlatList
                data={rating||[]}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }

})
export default RatingScreen