import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, FlatList, Dimensions, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'
const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get('window').width
import Feather from 'react-native-vector-icons/Feather';
import LunchBoxComponent from '../components/LunchBoxComponent'

const LunchBoxScreen = ({ route, navigation }) => {
    console.log("oute?.params?.message===", route?.params)
    const [data, setData] = useState(route?.params?.message)
    const [flag, setFlag] = useState(false)
    useEffect(() => {
        setFlag(route?.params?.flag)
    }, [])
    const renderItem = ({ item }) => {
        { setData(route?.params?.message) }
        return (
            <View style={{ width: '100%', height: screenHeight / 3.5, backgroundColor: 'white', marginTop: 10, justifyContent: 'space-evenly', }}>
                <Text style={{ fontSize: 20, marginLeft: 22 }}>{item.day}</Text>
                <View style={{ width: screenWidth / 1.14, height: screenHeight / 4.5, backgroundColor: '#F6F3E7', alignSelf: 'center', borderRadius: 10 }}>
                    <Image
                        source={{ uri: item.recipeImage }}
                        style={{ flex: 7 / 8, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                    />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 2 / 8, alignItems: 'center', paddingHorizontal: 10 }}>
                        <Text>{item.recipeName}</Text>
                        <Feather size={22} color="gray" name="user" />
                    </View>
                </View>
            </View>
        )
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <Header
                showHeaderTitle
                headerTitle="Lunch Box"
            />
            {
                flag ?
                    <FlatList
                        data={data}
                        keyExtractor={(item) => item.id}
                        renderItem={renderItem}
                    /> :
                    <LunchBoxComponent
                        content={'Find a Recipe and assign to a lunch box for it to appear here'}
                        onRecipePress={() => navigation.navigate('Home')}
                    />
            }


        </SafeAreaView>
    )
}
const styles = StyleSheet.create({

})
export default LunchBoxScreen