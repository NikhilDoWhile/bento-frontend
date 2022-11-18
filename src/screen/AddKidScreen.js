import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList, Dimensions, ScrollView, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ApiHandler from "../api/ApiHandler";
import ButtonComponent from "../components/ButtomComponent";
import Header from "../components/Header";
import TextInputComponent from "../components/TextInputComponent";
import { loginStyle } from "../style/LoginStyle";
const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get('window').width

const AddKidScreen = ({route,navigation}) => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [kidList, setKidList] = useState([])

    const updateKid = () => {
        var order = [];
        kidList.forEach((item, index) => {
            order.push(
                <View style={{marginLeft:20}}>
                    <Text style={{ fontSize: 15, fontWeight: '900' ,marginTop:5}}>Kid {index + 1}</Text>
                    <Text style={{ fontSize: 14 ,marginTop:5}}>{item.name}</Text>
                    <Text style={{ fontSize: 14,marginTop:5 }}>{item.age} year old</Text>
                    <View style={{ height: 2, width: '90%', backgroundColor: 'black', alignSelf: 'center',marginTop:5 }} />
                </View>
            );
        });
        return order;
    };
    const addKidData = () => {
       if(name!=''&&age!=''){
        let data = [...kidList]
        data.push({ name: name, age: age })
        setKidList(data)
        setName('')
        setAge('')
       } else {
          Alert.alert("please enter name and age")
       }
    }
    const navigateToScreen = ()=>{
       if(kidList.length>0) {
        ApiHandler.addKid(route.params.parentId,kidList).then((response)=>{
            if(response) {
              navigation.navigate('Pantry')
            }
         })
       } else {
        Alert.alert("please enter name and age")
       }
    }
    return (
        <SafeAreaView style={Styles.container}>
            <Header />
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <View style={{ flex: 1 / 1, backgroundColor: 'white'}}>
                    <View style={{ flex: 9 / 10 }}>
                        <ScrollView>
                            <Text style={{ fontSize: 20, alignSelf: 'center', margin: 10, color:'#FFAB00' }}>Setup your Family</Text>
                            {updateKid()}
                            <View style={{ margin: 10 }}>
                            <Text style={{ fontSize: 16,fontWeight:'900', margin: 10}}>Kid</Text>
                                <Text style={{ fontSize: 16, marginLeft: 10 }}>Name</Text>
                                <TextInputComponent
                                    placeholder={"Add Kid"}
                                    inputStyle={[loginStyle.inputStyle, { borderWidth: 0.9, width: screenWidth / 1.10, borderColor: '#F2E1E3', alignSelf: 'center' }]}
                                    onChangeText={(text) => setName(text)}
                                    value={name}
                                />
                            </View>
                            <View style={{ marginLeft: 10 }}>
                                <Text style={{ fontSize: 16, marginLeft: 10 }}>Age</Text>
                                <TextInputComponent
                                    placeholder={"Age"}
                                    inputStyle={[loginStyle.inputStyle, { borderWidth: 0.9, width: screenWidth / 6, borderColor: '#F2E1E3', marginLeft: 5 }]}
                                    onChangeText={(text) => setAge(text)}
                                    value={age}
                                />
                            </View>
                            <ButtonComponent
                                buttonStyle={{ width: screenWidth / 10, alignSelf: 'center', borderRadius: 100 , backgroundColor:'#FC6474'}}
                                text={'+'}
                                onPress={() => addKidData()}
                            />
                        </ScrollView>
                    </View>
                    <View style={{ flex: 1 / 10, backgroundColor: 'white' }}>
                        <ButtonComponent
                            buttonStyle={{ width: screenWidth / 2, alignSelf: 'center', borderRadius: 20 }}
                            text={'Continue'}
                            onPress={()=>navigateToScreen()}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor:'red'
    }

})
export default AddKidScreen