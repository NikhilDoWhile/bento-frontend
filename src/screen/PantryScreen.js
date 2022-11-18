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

const PantryScreen = ({ navigation,route }) => {
    const [list, setList] = useState([])
    const [filterData, setFilterData] = useState([])
    const [arrData, setArrData] = useState([]);
    const [dayArray, setDayArray] = useState([])
    const [msg, setMsg] = useState([]);
    const [selectedArray, setSelectedArray] = useState([])
    // console.log("parentId==",route?.params?.parentId)

    useEffect(() => {
        getAllIngredients();
    }, [])

    const getAllIngredients = () => {
        ApiHandler.getAllIngredients().then((response) => {
            setList(response)
            setFilterData(response)
        })
    }

    const getMatchUnmatch = (message) => {
        ApiHandler.getmatchUnmatchIngredients(message).then((response) => {
            console.log("get match and unmatch==",response)
            if (response && selectedArray.length > 0) {

                navigation.navigate('TabNavigators', {
                    screen: 'Home',
                    params: {
                        response: response,
                        messageLength: msg.length,
                        selectedIngredients: selectedArray,
                        id: response.id,
                        kid:route?.params?.kid,
                        parentId:route?.params?.parentId
                    }
                })
            } else {
                Alert.alert("please select Ingredients")
            }
        })
    }
    const handlePress = (item, index) => {
        let selectedData = [...selectedArray]
        if (selectedRecipe(item)) {
            const i = selectedData.indexOf(item)
            selectedData.splice(i, 1)
        } else {
            selectedData.push(item)
        }
        setSelectedArray(selectedData)
    };
    const selectedRecipe = (item) => {
        return selectedArray.includes(item)

    }
    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={() => handlePress(item.title, index)} style={[pantryStyle.itemContainer, { borderWidth: selectedRecipe(item.title) ? 1 : 0 ,borderColor:'skyblue'}]}>
                <View style={[pantryStyle.ingridientsView,{backgroundColor:'#F6F3E7'}]}>
                    <ImageComponent
                        source={item.url}
                        imageStyle={{ height: 50, width: 50, alignSelf: 'center' }}
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
        <SafeAreaView style={[pantryStyle.container,{backgroundColor:'white'}]}>
            <Header
                onUserPress={() => navigation.navigate('ProfileScreen')}
                logo
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
                    buttonStyle={{ borderRadius: 20, bottom: 10 }}
                    onPress={() =>
                        getMatchUnmatch(selectedArray)
                    }
                />
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({

})
export default PantryScreen