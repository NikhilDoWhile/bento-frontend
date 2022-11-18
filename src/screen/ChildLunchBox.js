import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Dimensions, ImageBackground, Modal, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import ApiHandler from '../api/ApiHandler'
import Header from '../components/Header'
const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get('window').width
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import ButtonComponent from '../components/ButtomComponent'
import Preferences from '../LocalStorage/Prefetences'

const ChildLunchBox = ({ navigation, route }) => {
    console.log("route====",route.params)
    const rating = [
        { id:1,rate: 'I like it', emoji: 'emoji-happy' },
        { id:2,rate: "it's okay", emoji: 'emoji-neutral' },
        {id:3, rate: 'Dont like it', emoji: 'emoji-sad' }
    ]
    const [child, setChild] = useState([])
    const [modalVisible, setModalVisible] = useState(false);
    const [arrData, setArrData] = useState([]);
    const [msg, setMsg] = useState([]);

    useEffect(() => {
        getAssignKid()
    }, [])

    const getAssignKid = () => {
        let parentId = route.params.parentId
        ApiHandler.getAssignKid(parentId).then((response) => {
            console.log("get assign kid===",response)
            setChild(response?.days)
        })
    }
    const modalPopUp = () => {
        setModalVisible(!modalVisible)
    }
    
    const selectRating = (item, index) => {
        const check = [];
        const message = [...msg];
        if (check && check[index]) {
            check[index] = false;
        } else {
            check[index] = true;
        }
        setMsg(message);
        setArrData(check);
    };
    const ratingData = ()=>{
        let parentId=route?.params?.parentId
        let kidName=route?.params?.name
        let rating= arrData;
        let data={
            parentId,kidName
        }
        Preferences.setItem("key",JSON.stringify(data))
        rating.map((element,index)=>{
            console.log("shivam===",element,index+1)
            ApiHandler.addrating(parentId,index+1,kidName).then((response)=>{
                console.log("resp=====",response)
                setModalVisible(!modalVisible)
                // navigation.navigate('Rating',{parentId:parentId,kidName:kidName})
            })
        })
    }

    const renderItem = ({ item }) => {
        if (route?.params?.name === item?.kidName) {
            {
                console.log("set emoji=======",arrData)
            }
            return (
                <TouchableOpacity onPress={() => modalPopUp()} style={{ width: '100%', height: screenHeight / 3.8, marginTop: 10, justifyContent: 'space-evenly', }}>
                    <Text style={{ fontSize: 20, marginLeft: 22 }}>{item.day}</Text>
                    <View style={{ width: screenWidth / 1.14, height: screenHeight / 4.5, backgroundColor: '#F6F3E7', alignSelf: 'center', borderRadius: 10 }}>
                        <Image
                            source={{ uri: item.recipeUrl }}
                            style={{ flex: 7 / 8, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                        />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 2 / 8, alignItems: 'center', paddingHorizontal: 10 }}>
                            <Text>{item.recipeName}</Text>
                            <View>
                                <Entypo size={22} color="gray" name="emoji-happy" />
                            </View>
                        </View>
                    </View>
                    <Modal
                        visible={modalVisible}
                        animationType="slide"
                        transparent={true}
                    >
                        <View style={{ height: screenHeight / 1.8, width: screenWidth / 1.2, backgroundColor: 'white', marginTop: 200, borderRadius: 20, elevation: 2, alignSelf: 'center', }}>
                            <View style={{ flex: 1 / 7, justifyContent: 'center' }}>
                                <Text style={{ fontSize: 18, color: 'black', fontWeight: '500', alignSelf: 'center' }}>{item.recipeName}</Text>
                            </View>
                            <Image
                                source={{ uri: item.recipeUrl }}
                                style={{ flex: 1 / 1.6 }}
                            />
                            <View style={{ flex: 1 / 4, flexDirection: 'row', }}>
                                <FlatList
                                    data={rating}
                                    keyExtractor={(item) => item.id}
                                    horizontal={true}
                                    style={{ padding: 10 }}
                                    renderItem={({ item,index }) => {
                                        return (
                                            <TouchableOpacity onPress={() => selectRating(item.id,index)} style={{ width: screenWidth / 4, justifyContent: 'center', alignItems: 'center' }}>
                                                <Entypo style={{}} size={25} color={!arrData[index]?"gray":'red'} name={item.emoji} />
                                                <Text>{item.rate}</Text>
                                            </TouchableOpacity>
                                        )
                                    }}
                                />
                            </View>
                            <View>

                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                <ButtonComponent
                                    buttonStyle={{ width: '35%', borderRadius: 20 }}
                                    text={'Rated'}
                                    onPress={()=>ratingData()}
                                />
                            </View>
                        </View>
                    </Modal>
                </TouchableOpacity>
            )
        }
    }

    return (
        <SafeAreaView style={Styles.container}>
            <Header onBackPress={()=>navigation.pop()} />
            <View style={{ flex: 1 }}>
                <FlatList
                    data={child}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                />
            </View>
        </SafeAreaView>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
})

export default ChildLunchBox;