import { DefaultTheme } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import ButtonComponent from "./ButtomComponent";

const LunchBoxContainer = ({ content, onRecipePress }) => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1 / 2, justifyContent: 'space-between' }}>
                <View style={{ width: '80%', alignSelf: 'center' }}>
                    <Text style={{ fontSize: 16, fontWeight: '600' }}>{content}</Text>
                </View>
                <ButtonComponent
                    buttonStyle={{ width: 200, alignSelf: 'center', borrderRadius: 20 }}
                    text={"Go to Recepies"}
                    onPress={onRecipePress}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'red',
        justifyContent: 'flex-end'
    }
})
export default LunchBoxContainer