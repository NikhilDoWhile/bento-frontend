import React from "react";
import { StyleSheet, View, Text, ScrollView, Dimensions, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonComponent from "../components/ButtomComponent";
import Header from "../components/Header";
const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get('window').width

const RecipeDetails = ({ route, navigation }) => {
    return (
        <SafeAreaView style={styles.RecipeDetailsContainer}>
            <Header
                onBackPress={() => navigation.pop()}
            />
            <ScrollView>
                <Image
                    source={{ uri: route.params.ingridientsImage }}
                    style={{ height: screenHeight / 3, width: screenWidth }}
                />
                <View style={{ height: screenHeight / 1.5, backgroundColor: 'white', borderTopRightRadius: 20, borderTopLeftRadius: 20, bottom: 20 }}>
                    <View style={{ alignSelf: 'center', alignItems: 'center', marginTop: 10 }}>
                        <Text style={{ fontSize: 20, fontWeight: '800' }}>{route.params.ingridientsName}</Text>
                        <Text>{route.params.time}</Text>
                    </View>
                    <View style={{ margin: 10 }}>
                        <Text style={{ fontSize: 17 }}>Ingredients</Text>
                        <Text style={{ fontSize: 14, marginLeft: 10 }}>1 wheat tortulla</Text>
                        <Text style={{ fontSize: 14, marginLeft: 10 }}>1 wheat tortulla</Text>
                        <Text style={{ fontSize: 14, marginLeft: 10 }}>1 wheat tortulla</Text>
                    </View>
                    <View style={{ margin: 10 }}>
                        <Text style={{ fontSize: 17 }}>Instructions</Text>
                        <Text style={{ fontSize: 14 }}>step 1</Text>
                        <Text style={{ fontSize: 14, marginLeft: 10 }}>1 wheat tortulla</Text>
                        <Text style={{ fontSize: 14, marginLeft: 10 }}>1 wheat tortulla</Text>
                    </View>
                    <View style={{ margin: 10 }}>
                        <Text style={{ fontSize: 14 }}>step 2</Text>
                        <Text style={{ fontSize: 14, marginLeft: 10 }}>1 wheat tortulla</Text>
                        <Text style={{ fontSize: 14, marginLeft: 10 }}>1 wheat tortulla</Text>
                    </View>
                    <ButtonComponent
                        buttonStyle={{ width: 200, borderRadius: 20, alignSelf: 'center' }}
                        text={'Add To lunch'}
                        onPress={() => navigation.navigate("AddToLunchBox")}
                    />
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    RecipeDetailsContainer: {
        flex: 1,
        backgroundColor: 'white'
    }
})
export default RecipeDetails