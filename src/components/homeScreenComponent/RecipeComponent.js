import { NavigationContainer } from '@react-navigation/native'
import React, { useState } from 'react'
import { StyleSheet, View, Text, ScrollView, FlatList, TouchableOpacity, Dimensions } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import ButtonComponent from '../ButtomComponent'
import Header from '../Header'
import ImageComponent from '../ImageComponent'
import SearchComponent from '../SearchComponent'
import { pantryStyle } from '../../style/PantryStyle'
const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get('window').width


const RecipeComponent = ({ navigation }) => {
    let Data = [
        { id: 1, ingridientsName: 'Ham sandwich', ingridientsImage: 'https://img.freepik.com/free-photo/sandwich_1339-1108.jpg?w=2000', time: "5 min", remainingIngridients: "2/5 ingredients" },
        { id: 2, ingridientsName: 'Cheese pasta', ingridientsImage: 'https://c.ndtvimg.com/2019-04/jrlj8fv_pasta-in-white-sauce_625x300_25_April_19.jpg', time: "5 min", remainingIngridients: "3/5 ingredients" },
        { id: 3, ingridientsName: 'pancakes', ingridientsImage: 'https://media.istockphoto.com/photos/chicken-wrap-picture-id888366454?k=20&m=888366454&s=612x612&w=0&h=L0M1rbD5iqkxaCtkCJQtDvYKTOMlfExzZEA5Nq69Jhg=', time: "5 min", remainingIngridients: "2/5 ingredients" },
        { id: 4, ingridientsName: 'Chicken Wrap', ingridientsImage: 'https://media.gettyimages.com/photos/tomatoes-picture-id171589415?s=612x612', time: "5 min", remainingIngridients: "2/5 ingredients" },
        { id: 5, ingridientsName: 'Cheese pasta', ingridientsImage: 'https://media.istockphoto.com/photos/various-types-of-cheese-picture-id629210154?k=20&m=629210154&s=612x612&w=0&h=1J-MM9ba8evv1xZL6KxKipmdP-NzXqXWBILsUqs3JIo=', time: "5 min", remainingIngridients: "4/5 ingredients" },
        { id: 6, ingridientsName: 'potato chilli', ingridientsImage: 'https://static.toiimg.com/photo/msid-79742397/79742397.jpg', time: "5 min", remainingIngridients: "2/2 ingredients" },
        { id: 7, ingridientsName: 'Noodles', ingridientsImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwh_u2gUekiM7io22PY3KVMSSEX-rRkt8pAwbLz_fl&s', time: "5 min", remainingIngridients: "2/2 ingredients" },
        { id: 8, ingridientsName: 'Momos', ingridientsImage: 'https://media.istockphoto.com/photos/veg-steam-momo-nepalese-traditional-dish-momo-stuffed-with-vegetables-picture-id1292635321?k=20&m=1292635321&s=612x612&w=0&h=pV3-hV9U_0QVuXJ9xq4u7KRurF-9fQWMYYmDTVlBzgE=', time: "5 min", remainingIngridients: "1/5 ingredients" },
    ]
    const [list, setList] = useState(Data)

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                // onPress={() => navigation.navigate('StackNavigators', {
                //     screen: 'RecipeDetails'
                // })}
                onPress={() =>
                    navigation.navigate('RecipeDetails', { ingridientsImage: item.ingridientsImage, ingridientsName: item.ingridientsName, time: item.time })}
                style={[pantryStyle.itemContainer, { backgroundColor: '#F6F3E7', height: screenHeight / 3.4, width: screenWidth / 2.2, margin: 5, justifyContent: 'space-around', borderRadius: 10 }]}>
                <ImageComponent
                    source={item.ingridientsImage}
                    imageStyle={{ height: screenHeight / 4.5, width: "100%", borderTopRightRadius: 10, borderTopLeftRadius: 10 }}
                />
                <View style={{ alignSelf: 'flex-start', marginLeft: 10 }}>
                    <Text>{item.ingridientsName}</Text>
                    <Text>{item.time}</Text>
                    <Text>{item.remainingIngridients}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={[pantryStyle.container]}>
            <FlatList
                data={list}
                keyExtractor={(item) => item.id}
                numColumns={2}
                renderItem={renderItem}
                style={{ alignSelf: 'center' }}
            />

        </View>
    )
}
const styles = StyleSheet.create({

})
export default RecipeComponent