import React from "react";
import { StyleSheet, View, Text } from "react-native";

const NonMatchRecipeText = () => {
    return (
        <View style={styles.container}>
            <View style={{ margin: 20 }}>
                <Text
                    style={{
                        fontSize: 28,
                        alignSelf: "center",
                        fontWeight: "600",
                        fontFamily: "Sniglet-regular",
                    }}
                >
                    Oopies!
                </Text>
                <View style={{ marginHorizontal: 30, marginTop: 30 }}>
                    <Text style={styles.textStyle}>
                        it looks like none of our recipes match your ingredients
                    </Text>
                    <Text style={styles.textStyle}>
                        Try clicking your pantry by clicking on "update pantry" button
                    </Text>
                    <Text style={styles.textStyle}>
                        on checkout the "other recipe" tab for other suggestions
                    </Text>
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        //width: '80%',
        // alignSelf: 'center',
        // backgroundColor: 'red',
        flex: 1,
        justifyContent: "center",
    },
    textStyle: {
        fontSize: 16,
        fontWeight: "400",
        lineHeight: '20',
        fontFamily: "Outfit-regular",
    },
});
export default NonMatchRecipeText;
