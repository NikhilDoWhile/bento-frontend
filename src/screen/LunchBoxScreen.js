import React, { useState, useEffect, Suspense } from 'react'
import { StyleSheet, View, Text, FlatList, Dimensions, Image, Modal, TouchableOpacity, ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'
const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get('window').width
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LunchBoxComponent from '../components/LunchBoxComponent'
import ButtonComponent from '../components/ButtomComponent'
import Entypo from 'react-native-vector-icons/Entypo';
import ApiHandler from '../api/ApiHandler'

const LunchBoxScreen = ({ route, navigation }) => {
    const [data, setData] = useState(route?.params?.day)
    const [flag, setFlag] = useState(false)
    const [modalVisible, setModalVisible] = useState(false);
    const [select, setSelect] = useState(true)
    const [nameData, setnameData] = useState(route?.params?.kid)
    const [ kidAssign,setKidAssign] = useState([])
    const [day,setDay] = useState('')

    useEffect(() => {
        setFlag(route?.params?.flag)

    }, [])
    const modalPopUp = (item) => {
        setDay(item)
        setModalVisible(!modalVisible)
    }
  
    const showButton = (value, index) => {
        const newValue = nameData.map((checkbox, i) => {
            const assignKidName = [...kidAssign]
            if (i !== index)
                return {
                    ...checkbox,
                    checked: checkbox.checked,
                }
            if (i === index) {
                const item = {
                    ...checkbox,
                    checked: !checkbox.checked,
                }
                console.log("item==",item)
               if(item.checked===true) {
                  assignKidName.push(item.name)
               } else {
                   assignKidName.splice(0,1)
               }
                setKidAssign(assignKidName)
                return item
               
            }
            return checkbox
        })
        setnameData(newValue)
    }
    const removeData = (id) => {
        console.log("id",id,route?.params)
        // let newArray = [...data]
        // newArray.splice(id, 1)
        // setData(newArray)
    }
    const assignKid = (day)=>{
        console.log("name===",kidAssign,day)
        let kidName=kidAssign.toString();
        let lunchBoxId=route?.params?.id
        let parentId=route?.params?.parentId
        ApiHandler.assignKid(lunchBoxId,parentId,kidName,day).then((response)=>{
            console.log("response===  74",response)
           if(response){
            setModalVisible(!modalVisible)
           }
        })
      
    }
    const renderItem = ({ item,index }) => {
       console.log("day===",item.day)
        return (
            <TouchableOpacity onPress={() => modalPopUp(item.day)} style={{ width: '100%', height: screenHeight / 3.5, backgroundColor: 'white', marginTop: 10, justifyContent: 'space-evenly', }}>
                <Text style={{ fontSize: 24, marginLeft: 22, fontFamily:'Sniglet-regular', fontWeight:'400' }}>{item.day}</Text>
                <View style={{ width: screenWidth / 1.14, height: screenHeight / 4.5, backgroundColor: '#F6F3E7', alignSelf: 'center', borderRadius: 10 }}>
                    <ImageBackground
                        source={{ uri: item.recipeImage }}
                        style={{ flex: 7 / 8, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                    >
                        <TouchableOpacity onPress={() => removeData(item)} style={{ backgroundColor: 'transparent', width: 25, alignSelf: 'flex-end', justifyContent: 'center', alignItems: 'center',borderRadius:30,right:10,top:10,borderColor:'black',borderWidth:1,height:25 }}>
                            <Entypo size={20} color="black" name="cross" />
                        </TouchableOpacity>
                    </ImageBackground>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 2 / 8, alignItems: 'center', paddingHorizontal: 10 }}>
                        <Text style={{ fontSize: 18, fontFamily:'Outfit-regular', fontWeight:'400' }}>{item.recipeName}</Text>
                        <View>
                        <Feather size={22} color="gray" name="user" />
                        </View>
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
                                data={nameData}
                                keyExtractor={(item) => item.id}
                                renderItem={({ item, index }) => {
                                    return (
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', }}>
                                            <View style={{ flexDirection: 'row', justifyContent:'flex-start',width:screenWidth/2 }}>
                                                <Feather size={22} color="gray" name="user" />
                                                <Text style={{ marginLeft: 10 }}>{item.name}</Text>
                                            </View>
                                            <MaterialCommunityIcons style={{alignSelf:'flex-end'}} color={'#FC6474'} onPress={() => showButton(item.checked, index)} size={25} name={!item.checked ? "checkbox-blank-circle-outline" : 'checkbox-marked-circle-outline'} />
                                        </View>
                                    )
                                }}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <ButtonComponent
                                buttonStyle={{ width: '35%', borderRadius: 20 }}
                                text={'save'}
                                onPress={()=>assignKid(day)}
                            />
                            <ButtonComponent
                                buttonStyle={{ width: '35%', borderRadius: 20, backgroundColor: 'white', borderWidth: 1, borderColor: 'orange' }}
                                text={'cancel'}
                                onPress={() => modalPopUp(item)}
                                textStyle={{ color: 'black' }}
                            />
                        </View>
                    </View>
                </Modal>
            </TouchableOpacity>
        )
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white', opacity: modalVisible === true ? 0.1 : 1, }}>
            <Header
                showHeaderTitle
                logo
                onUserPress={()=>navigation.navigate('ProfileScreen')}
                onNotiPress={()=>navigation.navigate('PushNotification')}
            />
            <View style={{flex:1/5,justifyContent:'center',alignItems:'center'}}>
               <Text style={{fontSize:24,fontWeight:'400',fontFamily:'Sniglet-regular'}}>Lunchbox</Text>
            </View>
            {
                flag ?
                    <View>
                        <FlatList
                            data={route?.params?.message}
                           keyExtractor={(item) => item.id}
                            renderItem={renderItem}
                        />
                    </View>
                    :
                    <LunchBoxComponent
                        content={'Find a Recipe and assign to a lunch box for it to appear here'}
                        onRecipePress={() => navigation.navigate('Home')
                    // {
                    //     navigation.navigate("TabNavigators", {
                    //         screen: "ShoppingList",
                    //       })
                    // }
                    }
                        
                    />
            }
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({

})
export default LunchBoxScreen