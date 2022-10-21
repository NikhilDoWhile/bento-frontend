import React, { useState } from 'react'
import { Dimensions, StyleSheet, TouchableOpacity, View, Text, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import ButtonComponent from '../components/ButtomComponent'
import Header from '../components/Header'
import NonMatchRecipeText from '../components/homeScreenComponent/NonMatchRecipeText'
import RecipeComponent from '../components/homeScreenComponent/RecipeComponent'
const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get('window').width

const HomeScreen = ({ navigation }) => {
    const [toggleButton, setToggleButton] = useState(false)
    const toggleDataMatche = () => {
        setToggleButton(false)
    }
    const toggleDataOtherRecipe = () => {
        setToggleButton(true)
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header logo />
            <View style={{ flex: 1 }}>
                <View style={styles.homeScreenButton}>
                    <TouchableOpacity onPress={() => toggleDataMatche()} style={[styles.matchButton, { backgroundColor: toggleButton ? "#F6F3E7" : '#FC6474', borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }]}>
                        <Text style={[styles.text, { color: !toggleButton ? 'white' : "black" }]}>Recipe Match</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => toggleDataOtherRecipe()} style={[styles.matchButton, { backgroundColor: toggleButton ? "#FC6474" : '#F6F3E7', borderTopRightRadius: 10, borderBottomRightRadius: 10 }]}>
                        <Text style={[styles.text, { color: !toggleButton ? 'black' : "white" }]}>Other Recipe</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.mainContainer}>
                    {
                        !toggleButton ? <NonMatchRecipeText /> : <RecipeComponent navigation={navigation} />
                    }
                    <ButtonComponent
                        text={'update pantry'}
                        buttonStyle={{ width: 200, alignSelf: 'center', borrderRadius: 20, position: 'absolute', top: 530 }} />
                </View>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        // marginTop: 10
    },
    homeScreenButton: {
        height: screenHeight / 22,
        //backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        // top: 5
        marginTop: 10
    },
    matchButton: {
        width: screenWidth / 2.2,
        //borderBottomEndRadius: 10
        // backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainContainer: {
        flex: 1,
        marginTop: 1


    }

})
export default HomeScreen