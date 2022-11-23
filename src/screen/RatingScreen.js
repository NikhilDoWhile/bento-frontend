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
        console.log("item===== Rating ",item.rating)
        return (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              marginTop: 10,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Outfit-regular",
                fontWeight: "400",
              }}
            >
              25/08/2022
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Outfit-regular",
                fontWeight: "400",
              }}
            >
              {item.kidName}
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Outfit-regular",
                fontWeight: "400",
              }}
            >
              cheese and pasta
            </Text>
            <Image
              source={
                item.rating === "2"
                  ? require("../../assets/Vector-1.png")
                  : item.rating === "1"
                  ? require("../../assets/Vector-2.png")
                  : require("../../assets/Vector.png")
              }
              style={{ height: 20, width: 20 }}
            />
            {/* <Image
                    source={{ uri: item.rate }}
                    style={{ height: 20, width: 20, right: 10 }}
                /> */}
          </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header
                showHeaderTitle
                logo
                onUserPress={()=>navigation.navigate('ProfileScreen')}
                onNotiPress={()=>navigation.navigate('PushNotification')}
            />
            <View style={{}}>
                <Text style={{ fontSize: 24, marginLeft: 22, fontFamily:'Sniglet-regular', fontWeight:'400', margin: 10 ,alignSelf:'center'}}>Rating</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', }}>
                    <Text style={{ fontSize: 18, fontFamily:'Outfit-regular', fontWeight:'400' }}>Date</Text>
                    <Text style={{ fontSize: 18, fontFamily:'Outfit-regular', fontWeight:'400' }} >Name</Text>
                    <Text style={{ fontSize: 18, fontFamily:'Outfit-regular', fontWeight:'400' }}>Recipe</Text>
                    <Text style={{ fontSize: 18, fontFamily:'Outfit-regular', fontWeight:'400' }} >Rating</Text>
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