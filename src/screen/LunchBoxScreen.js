import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, FlatList, Dimensions, Image, Modal, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'
const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get('window').width
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LunchBoxComponent from '../components/LunchBoxComponent'
import ButtonComponent from '../components/ButtomComponent'

const LunchBoxScreen = ({ route, navigation }) => {
    const list = [
        { id: 1, name: 'bella' },
        { id: 2, name: 'jenna' }
    ]
    const [data, setData] = useState(route?.params?.message)
    const [flag, setFlag] = useState(false)
    const [modalVisible, setModalVisible] = useState(false);
    const [select, setSelect] = useState(true)
    useEffect(() => {
        setFlag(route?.params?.flag)
    }, [])
    const modalPopUp = () => {
        setModalVisible(!modalVisible)
    }
    const showButton = () => {
        setSelect(!select)
    }
    const renderItem = ({ item }) => {
        { setData(route?.params?.message) }
        return (
            <TouchableOpacity onPress={() => modalPopUp()} style={{ width: '100%', height: screenHeight / 3.5, backgroundColor: 'white', marginTop: 10, justifyContent: 'space-evenly', }}>
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
                <Modal
                    visible={modalVisible}
                    animationType="slide"
                    transparent={true}
                >
                    <View style={{ height: screenHeight / 3, width: screenWidth / 1.2, backgroundColor: 'white', marginTop: 200, borderRadius: 20, elevation: 2, alignSelf: 'center', justifyContent: 'space-around' }}>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ fontSize: 20 }}>Assign Kid</Text>
                            <Text style={{ fontSize: 16, marginTop: 10 }}>Select the kids to assign this recipe</Text>
                        </View>
                        <View>
                            <FlatList
                                data={list}
                                keyExtractor={(item) => item.id}
                                renderItem={({ item }) => {
                                    return (
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <Feather size={22} color="gray" name="user" />
                                                <Text style={{ marginLeft: 10 }}>{item.name}</Text>
                                            </View>
                                            <MaterialCommunityIcons color={'#FC6474'} onPress={() => showButton()} size={25} name={select ? "checkbox-blank-circle-outline" : 'checkbox-marked-circle-outline'} />
                                        </View>
                                    )
                                }}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <ButtonComponent
                                buttonStyle={{ width: '35%', borderRadius: 20 }}
                                text={'save'}
                            />
                            <ButtonComponent
                                buttonStyle={{ width: '35%', borderRadius: 20, backgroundColor: 'white', borderWidth: 1, borderColor: 'orange' }}
                                text={'cancel'}
                                onPress={() => modalPopUp()}
                                textStyle={{ color: 'black' }}
                            />
                        </View>
                    </View>
                </Modal>
            </TouchableOpacity>
        )
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white', opacity: modalVisible === true ? 0.1 : 1, justifyContent: 'center', }}>
            <Header
                showHeaderTitle
                headerTitle="Lunch Box"
            />
            {
                flag ?
                    <View>
                        <FlatList
                            data={data}
                            keyExtractor={(item) => item.id}
                            renderItem={renderItem}
                        />
                    </View>
                    :
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