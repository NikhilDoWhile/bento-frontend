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


const RecipeComponent = ({ navigation, data, flag = '', selectedIngredients,kid,parentId }) => {
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate('RecipeDetails', { parentId:parentId, ingridientsImage: item.url, ingridientsName: item.title, time: item.time, ingredients: item.ingredients, steps: item.steps, flag: flag, selectedIngredients: selectedIngredients, id: item.id ,kid:kid})}
                style={[pantryStyle.itemContainer, { backgroundColor: '#F6F3E7', height: screenHeight /3, width: screenWidth / 2.2, margin: 5, borderRadius: 10,justifyContent:'space-between' }]}>
                <ImageComponent
                    source={item.url}
                    imageStyle={{ height: screenHeight / 4.1, width: "100%", borderTopRightRadius: 10, borderTopLeftRadius: 10 }}
                />
                <View style={{ alignSelf: 'flex-start', marginLeft: 10, }}>
                    <Text>{item.title}</Text>
                    <Text>{item.prepTime}</Text>
                    <Text>{item.ingredients.length+"/"+selectedIngredients.length +" ingredients"}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={[pantryStyle.container]}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                numColumns={2}
                renderItem={renderItem}
                style={{ margin: 5 }}
            />

        </View>
    )
}
const styles = StyleSheet.create({

})
export default RecipeComponent