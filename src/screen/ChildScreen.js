import React, { useEffect,useState } from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import ApiHandler from '../api/ApiHandler'
import ButtonComponent from '../components/ButtomComponent'
import ChildComponent from '../components/ChildrenComponent'

const ChildScreen = ({ navigation, route }) => {
    const [kidData,setKidData] = useState([])
    
    useEffect(()=>{
       getKid()
    },[])
    const getKid = ()=>{
        ApiHandler.getKid(route.params.parentId).then((response)=>{
            console.log("response===",response.kids)
            if(response) {
                setKidData(response.kids)
            }
        })
    }
    return (
        <SafeAreaView style={Styles.container}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 20 }}>Who is Using this App</Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <ChildComponent
                    name={route?.params?.userName}
                    onPress={() => navigation.navigate('Pantry',{kid:kidData,parentId:route?.params?.parentId})} />
            </View>
            <View style={{alignItems:'center'}}>
                    <FlatList
                       data={kidData}
                       keyExtractor={(item)=>item.id}
                       numColumns={2}
                       renderItem={({item})=>{
                        return(
                            <ChildComponent
                            name={item.name}
                            onPress={() => 
                                 navigation.navigate('ChildTabNavigators', {
                                screen: 'ChildLunchBox',
                                params:  {parentId:route.params.parentId,name:item.name}
                            })
                        }
                          
                             />
                        )
                       }}
                    />
            </View>
            <View>
            </View>
        </SafeAreaView>
    )
}
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        paddingVertical:50
    }
})
export default ChildScreen