import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonComponent from "../components/ButtomComponent";
import Header from "../components/Header";
import AntDesign from 'react-native-vector-icons/AntDesign';
import ApiHandler from "../api/ApiHandler";

const AddToLunchBox = ({ navigation, route }) => {
    // console.log("route===", route.params.recipeData.ingridientsName)
    const List = [
        { id: 1, day: 'sunday' },
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
    const [msg, setMsg] = useState([]);
    const handlePress = (item, index) => {
        const check = [...arrData];
        //const select = [...arrData];
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
        if (msg !== []) {
            navigation.navigate('TabNavigators', {
                screen: 'LunchBox',
                params: { message: msg, flag: true }
            })
        } else {
            Alert.alert('please select Day')
        }
    }
    return (
        <SafeAreaView style={styles.lunchBoxContainer}>
            <Header
                onBackPress={() => navigation.pop()}
            />
            <View style={{ flex: 1 / 5, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 20, fontWeight: '700' }}>Add to LunchBox</Text>
                <Text style={{ marginTop: 10 }}>Select the day of the week to assign this recipe to</Text>
            </View>
            <View style={{ flex: 4 / 5, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ flex: 1 / 1.4, backgroundColor: 'white', width: '90%' }}>
                    <FlatList
                        data={days}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => handlePress(item.day, index)}
                                    style={{ width: '100%', backgroundColor: '#F6F3E7', marginTop: 5, height: 56, justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 20, alignItems: 'center' }}>
                                    <Text style={{}}>{item.day}</Text>
                                    <AntDesign size={20} color="black" name={arrData[index] ? "checksquare" : 'checksquareo'} />
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>

            </View>
            <View style={{ flex: 1 / 10, alignItems: 'center' }}>
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
        //backgroundColor: 'red'
    }

})
export default AddToLunchBox