import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonComponent from "../components/ButtomComponent";
import Header from "../components/Header";
import AntDesign from 'react-native-vector-icons/AntDesign';
import ApiHandler from "../api/ApiHandler";

const AddToLunchBox = ({ navigation, route }) => {
    console.log("add kid===", route.params.recipeData
    )
    const List = [
        { id: 1, day: 'Sunday' },
        { id: 2, day: 'Monday' },
        { id: 3, day: 'Tuesday' },
        { id: 4, day: 'Wednesday' },
        { id: 5, day: 'Thrusday' },
        { id: 6, day: 'Friday' },
        { id: 7, day: 'Saturday' },

    ]
    const [days, setDays] = useState(List)
    const [arrData, setArrData] = useState([]);
    const [dayArray, setDayArray] = useState([])
    const [dayData, setDayData] = useState([])
    const [msg, setMsg] = useState([]);
    const [dayString, setDayString] = useState()

    const handlePress = (item, index) => {
        const check = [...arrData];
        const message = [...msg];
        const dayArrays = [...dayArray];
        let megs = '';
        if (check && check[index]) {
            console.log("check", check[index])
            check[index] = false;
            dayArrays.push(check[index])
            const i = message.indexOf(item);
            message.splice(i, 1);
        } else {
            check[index] = true;
            dayArrays.push(check[index])
            megs = item;
            message.push({ day: megs, recipeImage: route.params.recipeData.ingridientsImage, recipeName: route.params.recipeData.ingridientsName });
        }
        setMsg(message);
        setArrData(check);

    };
   

    const NavigateToLunchBoxScreen = (msg) => {
        const day = [...dayData]
        msg.map((element, index) => {
            day.push(element.day)
            let DayInString = day.toString();
            setDayString(DayInString)
            setDayData(day)
            if (msg !== [] && index === msg.length - 1) {
                let recipeId = route.params.recipeData.id
                let parentId=route.params.recipeData.parentId
                ApiHandler.addLunchBox(recipeId,parentId, DayInString).then((response) => {
                    if (response.id) {
                        ApiHandler.getLunchBox(parentId).then((response) => {
                            if (response) {
                                console.log("updateDay===", response)
                                navigation.navigate('TabNavigators', {
                                    screen: 'LunchBox',
                                    params: { message: msg, flag: true, parentId: parentId, recipeImage: route.params.recipeData.ingridientsImage, ingridientsName: route.params.recipeData.ingridientsName, day: response.day.day,kid:route?.params?.recipeData?.kid,id:response.id }
                                })
                            } else {
                                Alert.alert('please select Day')
                            }
                        })
                    }
                })
            } 
        })
    }
    return (
        <SafeAreaView style={styles.lunchBoxContainer}>
            <Header
                onBackPress={() => navigation.pop()}
                onUserPress={() => navigation.navigate('ProfileScreen')}
            />
            <View style={{ flex: 1 / 5, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 30, fontWeight: '700' }}>Add to LunchBox</Text>
                <Text style={{ marginTop: 10 }}>Select the day of the week to assign this recipe to</Text>
            </View>
            <View style={{ flex: 4 / 5, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ flex: 1 / 1.1, backgroundColor: 'white', width: '90%',borderRadius:20 }}>
                    <FlatList
                        data={days}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => handlePress(item.day, index)}
                                    style={{ width: '100%', backgroundColor: '#F6F3E7', marginTop: 2, height: 56, justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 20, alignItems: 'center',borderTopLeftRadius:index==0 ?20:0,borderTopRightRadius:index===0 ?20:0 ,borderBottomLeftRadius:index==6 ? 20:0,borderBottomRightRadius:index==6 ? 20:0}}>
                                    <Text style={{}}>{item.day}</Text>
                                    <AntDesign size={20} color="black" name={arrData[index] ? "checksquare" : 'checksquareo'} />
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>

            </View>
            <View style={{ flex: 1 / 10, alignItems: 'center' }} p>
                <ButtonComponent
                    buttonStyle={{ width: 100, borderRadius: 20 }}
                    text={'Save'}
                    onPress={() => NavigateToLunchBoxScreen(msg)}
                />

            </View>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    lunchBoxContainer: {
        flex: 1,
        backgroundColor: 'white'
    }

})
export default AddToLunchBox