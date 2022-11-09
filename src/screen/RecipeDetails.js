import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView, Dimensions, Image, FlatList } from "react-native";
import { SafeAreaView, useSafeAreaFrame } from "react-native-safe-area-context";
import ApiHandler from "../api/ApiHandler";
import ButtonComponent from "../components/ButtomComponent";
import Header from "../components/Header";
const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get('window').width

const RecipeDetails = ({ route, navigation }) => {
    const [data,setData] = useState([])
    const [selectedData,setSelectedData] = useState([])
 
    const matchIngredients = (item)=>{
       let ingredient=route.params.selectedIngredients
           if(ingredient.includes(item)) {
             return true
           } else {
             return false
           }
    }
   

    const navigateToScreen = ()=>{
        const arr2=route.params.selectedIngredients
        const arr1= route.params.ingredients
        if(route.params.flag !=''){
            navigation.navigate("AddToLunchBox", { recipeData: route.params })
        } else {
                const filtered = arr1.filter(el => {
                   return arr2.indexOf(el) === -1;
                });
                let filterString = filtered.toString();
                ApiHandler.addShoppingList(filterString).then((response)=>{
                    console.log("adShoppingList===",response)
                })
            // console.log("filter===",filtered)
            navigation.navigate('TabNavigators',{
                screen:"ShoppingList"
                
            })
        }
       
    }
    return (
        <SafeAreaView style={styles.RecipeDetailsContainer}>
            {console.log("matchIngredients",matchIngredients())}
            <Header
                onBackPress={() => navigation.pop()}
                onUserPress={()=>navigation.navigate('ProfileScreen')}
            />
            <ScrollView>
                <Image
                    source={{ uri: route.params.ingridientsImage }}
                    style={{ height: screenHeight / 3, width: screenWidth }}
                />
                <View style={{ height: screenHeight / 1.5, backgroundColor: 'white', borderTopRightRadius: 20, borderTopLeftRadius: 20, bottom: 20 }}>
                    <View style={{ alignSelf: 'center', alignItems: 'center', marginTop: 10 }}>
                        <Text style={{ fontSize: 20, fontWeight: '800' }}>{route.params.ingridientsName}</Text>
                        <Text>{route.params.time}</Text>
                    </View>
                    <View style={{ margin: 10 }}>
                        <Text style={{ fontSize: 17 }}>Ingredients</Text>
                        <FlatList
                          data={route.params.ingredients}
                          renderItem={({item})=>{
                            return (
                                <Text style={{ fontSize: 14, marginLeft: 10,color:matchIngredients(item) ? "black":'red' }}>{item}</Text>
                            )
                          }}
                        />
                    </View>
                    <View style={{ margin: 10 }}>
                        <Text style={{ fontSize: 17 }}>Instructions</Text>
                        <FlatList
                           data={route.params.steps}
                           renderItem={({item})=>{
                            return(
                                <Text style={{ fontSize: 14, marginLeft: 10 }}>{item}</Text>
                            )
                           }}
                        />
                    </View>
                    {/* <View style={{ margin: 10 }}>
                        <Text style={{ fontSize: 14 }}>step 2</Text>
                        <Text style={{ fontSize: 14, marginLeft: 10 }}>1 wheat tortulla</Text>
                        <Text style={{ fontSize: 14, marginLeft: 10 }}>1 wheat tortulla</Text>
                    </View> */}
                    <ButtonComponent
                        buttonStyle={{ width: 200, borderRadius: 20, alignSelf: 'center' }}
                        text={route.params.flag!=''?"Add To lunch":"Add to shoping List"}
                        onPress={() =>navigateToScreen(route.params.ingredients,route.params.selectedIngredients)}
                    />
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    RecipeDetailsContainer: {
        flex: 1,
        backgroundColor: 'white'
    }
})
export default RecipeDetails