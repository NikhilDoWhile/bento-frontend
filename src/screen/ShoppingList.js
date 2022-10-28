import React, { useState } from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import ButtonComponent from '../components/ButtomComponent'
import Header from '../components/Header'
import SearchComponent from '../components/SearchComponent'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

const ShoppingListScreen = () => {
    const List = [
        { id: 1, data: 'Wheat Totilla' },
        { id: 2, data: 'Egg Salad Sandwitch' },
        { id: 3, data: 'Noodles' },
        { id: 4, data: 'Momos' },
        { id: 5, data: 'Pancakes' },
        { id: 6, data: 'Wrap Chicken' },
        { id: 7, data: 'Potato Rolls' }
    ]
    const [shoppingData, setShoppingData] = useState(List)
    const [select, setSelect] = useState(true)
    const renderItem = ({ item }) => {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 10 }}>
                <View style={{ flexDirection: 'row' }}>
                    <MaterialCommunityIcons color={'black'} size={25} name={select ? "checkbox-blank-outline" : 'checkbox-marked-outline'} />
                    <Text style={{ fontSize: 16, left: 10 }}>{item.data}</Text>
                </View>
                <View style={{ height: 20, width: 20, backgroundColor: 'white', borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                    <Entypo color={'black'} size={20} name='cross' />
                </View>

            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header
                showHeaderTitle
                headerTitle={'Shopping List'}
            />
            <View style={{ flex: 1, }}>
                <View style={{ flex: 9 / 10, }}>
                    <SearchComponent
                        searchStyle={{ borderColor: 'gray' }}
                    />
                    <FlatList
                        data={shoppingData}
                        keyExtractor={(item) => item.id}
                        renderItem={renderItem}
                    />
                </View>
                <View style={{ flex: 1 / 10, }}>
                    <ButtonComponent
                        buttonStyle={{ width: "40%", alignSelf: 'center', borderRadius: 20 }}
                        text={'Done'}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'green'
    }

})
export default ShoppingListScreen