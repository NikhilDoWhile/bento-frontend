import { NavigationContainer } from '@react-navigation/native'
import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, ScrollView, FlatList, TouchableOpacity, Dimensions, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import ApiHandler from '../api/ApiHandler'
import ButtonComponent from '../components/ButtomComponent'
import Header from '../components/Header'
import ImageComponent from '../components/ImageComponent'
import SearchComponent from '../components/SearchComponent'
import { pantryStyle } from '../style/PantryStyle'


const PantryScreen = ({ navigation }) => {
    let Data = [
        { id: 1, ingridientsName: 'pasta', ingridientsImage: 'http://3.217.133.189:8080/ingredient/getbyid/6358b632b5617b7f44942084' },
        { id: 2, ingridientsName: 'Egg', ingridientsImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqdCOGOnJJowcXiFm0pLRtHhuRd8cj3cpqXAf2NE0YzKUZLoSvdPJQBy6MB3A64QooNPw&usqp=CAU' },
        { id: 3, ingridientsName: 'Bread', ingridientsImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtgskZYBEcPRX4ia5CImrN079FFhlD-ItKUUu8d0hH&s' },
        { id: 4, ingridientsName: 'Tomato', ingridientsImage: 'https://media.gettyimages.com/photos/tomatoes-picture-id171589415?s=612x612' },
        { id: 5, ingridientsName: 'Cheese', ingridientsImage: 'https://media.istockphoto.com/photos/various-types-of-cheese-picture-id629210154?k=20&m=629210154&s=612x612&w=0&h=1J-MM9ba8evv1xZL6KxKipmdP-NzXqXWBILsUqs3JIo=' },
        { id: 6, ingridientsName: 'potato', ingridientsImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4pJecJIYHKmK5gBbCJGMTPcTYzNDvgnDkP-c7nWvz&s' },
        { id: 7, ingridientsName: 'tortella', ingridientsImage: 'https://st.depositphotos.com/1000589/3022/i/950/depositphotos_30229737-stock-photo-tortillas.jpg' },
        { id: 8, ingridientsName: 'letucce', ingridientsImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4pJecJIYHKmK5gBbCJGMTPcTYzNDvgnDkP-c7nWvz&s' },
        { id: 9, ingridientsName: 'chicken', ingridientsImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRME_za8F_WIgZnIpiCGlJu6yEpmIZwMmgf2Q&usqp=CAU' },
        { id: 10, ingridientsName: 'cheese', ingridientsImage: 'https://media.istockphoto.com/photos/various-types-of-cheese-picture-id629210154?k=20&m=629210154&s=612x612&w=0&h=1J-MM9ba8evv1xZL6KxKipmdP-NzXqXWBILsUqs3JIo=' },
        { id: 11, ingridientsName: 'floor', ingridientsImage: 'https://miro.medium.com/max/1000/1*E1XbXpyexi8eCyH22vUPdw.jpeg' },
        { id: 12, ingridientsName: 'milk', ingridientsImage: 'https://thumbs.dreamstime.com/b/milk-splash-white-cup-33967774.jpg' },
        { id: 13, ingridientsName: 'papper', ingridientsImage: 'https://thumbs.dreamstime.com/b/black-pepper-macro-soft-focus-39835307.jpg' },
        { id: 14, ingridientsName: 'mayo', ingridientsImage: 'https://hips.hearstapps.com/delish/assets/15/20/1431639912-delish-mayo-jar.jpg' },
        { id: 15, ingridientsName: 'ketchup', ingridientsImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtzfxORbVOEtkPH87mAt2Ixj1WtsH8sRXNdbs55pKO&s' },
        { id: 9, ingridientsName: 'chicken', ingridientsImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRME_za8F_WIgZnIpiCGlJu6yEpmIZwMmgf2Q&usqp=CAU' },
        { id: 10, ingridientsName: 'cheese', ingridientsImage: 'https://media.istockphoto.com/photos/various-types-of-cheese-picture-id629210154?k=20&m=629210154&s=612x612&w=0&h=1J-MM9ba8evv1xZL6KxKipmdP-NzXqXWBILsUqs3JIo=' },
        { id: 11, ingridientsName: 'floor', ingridientsImage: 'https://miro.medium.com/max/1000/1*E1XbXpyexi8eCyH22vUPdw.jpeg' },
        { id: 12, ingridientsName: 'milk', ingridientsImage: 'https://thumbs.dreamstime.com/b/milk-splash-white-cup-33967774.jpg' },
        { id: 13, ingridientsName: 'papper', ingridientsImage: 'https://thumbs.dreamstime.com/b/black-pepper-macro-soft-focus-39835307.jpg' },
        { id: 14, ingridientsName: 'mayo', ingridientsImage: 'https://hips.hearstapps.com/delish/assets/15/20/1431639912-delish-mayo-jar.jpg' },
        { id: 15, ingridientsName: 'ketchup', ingridientsImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtzfxORbVOEtkPH87mAt2Ixj1WtsH8sRXNdbs55pKO&s' },
    ]
    const [list, setList] = useState([])
    const [filterData, setFilterData] = useState([])
    const [arrData, setArrData] = useState([]);
    const [dayArray, setDayArray] = useState([])
    const [msg, setMsg] = useState([]);

    useEffect(() => {
        getAllIngredients();
    }, [])
    const getAllIngredients = () => {
        ApiHandler.getAllIngredients().then((response) => {
            setList(response)
            setFilterData(response)
            // console.log("getAllIngredients===", response)
        })
    }
    const getMatchUnmatch = (message) => {
        ApiHandler.getmatchUnmatchIngredients(message).then((response) => {
            console.log("response===", response.unMatchedRecipe, msg)
            if (response && msg.length > 0) {

                navigation.navigate('TabNavigators', {
                    screen: 'Home',
                    params: {
                        response: response,
                        messageLength:msg.length,
                        selectedIngredients:msg
                    }
                })
            } else {
                Alert.alert("please select Ingredients")
            }
        })
    }
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
            // message.push({ day: megs, recipeImage: route.params.recipeData.ingridientsImage, recipeName: route.params.recipeData.ingridientsName });
            message.push(megs)
        }
        setMsg(message);
        setArrData(check);

    };

    const renderItem = ({ item, index }) => {
        console.log("item.url==", item.url)
        return (
            <TouchableOpacity onPress={() => handlePress(item.title, index)} style={[pantryStyle.itemContainer, { borderWidth: arrData[index] ? 1 : 0 }]}>
                <View style={[pantryStyle.ingridientsView]}>
                    <ImageComponent
                        sources={item.url}
                        imageStyle={{ height: 60, width: 60 }}
                    />
                </View>
                <Text>{item.title}</Text>
            </TouchableOpacity>
        )
    }
    const searchFilter = (text) => {
        if (text) {
            const newData = list.filter((item) => {
                const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1
            })
            setFilterData(newData);
        } else {
            setFilterData(list)
        }

    }

    return (
        <SafeAreaView style={[pantryStyle.container]}>
            <Header
               onUserPress={()=>navigation.navigate('ProfileScreen')}
             />
            <View style={[pantryStyle.mainContainer]}>
                <Text style={{ fontSize: 17, marginTop: 10 }}>Please Select the ingridients you have available</Text>
                <SearchComponent
                    onChangeText={(text) => searchFilter(text)}
                />
                <FlatList
                    data={filterData}
                    keyExtractor={(item) => item.id}
                    numColumns={3}
                    renderItem={renderItem}
                />

            </View>
            <View style={{ flex: 1 / 10 }}>
                <ButtonComponent
                    text={"Proceed"}
                    buttonStyle={{ borderRadius: 20,bottom:10 }}
                    onPress={() =>
                        getMatchUnmatch(msg)
                    }

                />
            </View>
            {/* </ScrollView> */}
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({

})
export default PantryScreen