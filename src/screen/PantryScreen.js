import { NavigationContainer } from '@react-navigation/native'
import React, { useState } from 'react'
import { StyleSheet, View, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import ButtonComponent from '../components/ButtomComponent'
import Header from '../components/Header'
import ImageComponent from '../components/ImageComponent'
import SearchComponent from '../components/SearchComponent'
import { pantryStyle } from '../style/PantryStyle'

const PantryScreen = ({ navigation }) => {
    // add data for ingredients
    let Data = []
    const [list, setList] = useState(Data)

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={[pantryStyle.itemContainer]}>
                <View style={[pantryStyle.ingridientsView]}>
                    <ImageComponent
                        source={item.ingridientsImage}
                        imageStyle={{ height: 60, width: 60 }}
                    />
                </View>
                <Text>{item.ingridientsName}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={[pantryStyle.container]}>
            <ScrollView>
                <Header />
                <View style={[pantryStyle.mainContainer]}>
                    <Text style={{ fontSize: 17, marginTop: 10 }}>Please Select the ingridients you have available</Text>
                    <SearchComponent />
                    <FlatList
                        data={list}
                        keyExtractor={(item) => item.id}
                        numColumns={3}
                        renderItem={renderItem}
                    />

                </View>
                <View style={{ flex: 1 / 10 }}>
                    <ButtonComponent
                        text={"Proceed"}
                        buttonStyle={{ borderRadius: 20 }}
                        onPress={() => navigation.navigate('TabNavigators', {
                            screen: 'Home'
                        })}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({

})
export default PantryScreen