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
            /* Styling insert */
            <Text>{item.day}</Text>
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