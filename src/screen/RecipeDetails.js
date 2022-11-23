import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Dimensions,
  Image,
  FlatList,
} from "react-native";
import { SafeAreaView, useSafeAreaFrame } from "react-native-safe-area-context";
import ApiHandler from "../api/ApiHandler";
import ButtonComponent from "../components/ButtomComponent";
import Header from "../components/Header";
const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const RecipeDetails = ({ route, navigation }) => {
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState([]);
  console.log("parentId==", route?.params);

  const matchIngredients = (item) => {
    let ingredient = route.params.selectedIngredients;
    if (ingredient.includes(item)) {
      return true;
    } else {
      return false;
    }
  };

  const navigateToScreen = () => {
    const arr2 = route.params.selectedIngredients;
    const arr1 = route.params.ingredients;
    if (route.params.flag != "") {
      navigation.navigate("AddToLunchBox", { recipeData: route.params });
    } else {
      const filtered = arr1.filter((el) => {
        return arr2.indexOf(el) === -1;
      });
      let filterString = filtered.toString();
      ApiHandler.addShoppingList(filterString).then((response) => {});
      navigation.navigate("TabNavigators", {
        screen: "ShoppingList",
      });
    }
  };
  return (
    <SafeAreaView style={styles.RecipeDetailsContainer}>
      <Header
        onBackPress={() => navigation.pop()}
        onUserPress={() => navigation.navigate("ProfileScreen")}
        onNotiPress={() => navigation.navigate("PushNotification")}
      />
      <ScrollView style={{ flex: 1 }}>
        <Image
          source={{ uri: route.params.ingridientsImage }}
          style={{ height: screenHeight / 3, width: screenWidth }}
        />
        <View
          style={{
            height: screenHeight / 1.5,
            backgroundColor: "white",
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
            bottom: 20,
          }}
        >
          <View
            style={{ alignSelf: "center", alignItems: "center", marginTop: 10 }}
          >
            <Text
              style={{
                fontSize: 24,
                fontWeight: "400",
                fontFamily: "Sniglet-regular",
                lineHeight: 30,
              }}
            >
              {route.params.ingridientsName}
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "400",
                fontFamily: "Outfit-Regular",
                lineHeight: 30,
              }}
            >
              {route.params.time}
            </Text>
          </View>
          <View style={{ margin: 10 }}>
            <Text
              style={{
                margin: 10,
                fontSize: 18,
                fontWeight: "400",
                fontFamily: "Outfit-Regular",
                lineHeight: 22,
              }}
            >
              Ingredients
            </Text>
            <FlatList
              data={route.params.ingredients}
              renderItem={({ item }) => {
                return (
                  <Text
                    style={{
                      fontSize: 16,
                      marginLeft: 10,
                      color: matchIngredients(item) ? "black" : "red",
                      fontWeight: "400",
                      fontFamily: "Outfit-Regular",
                      lineHeight: 22,
                    }}
                  >
                    {item}
                  </Text>
                );
              }}
            />
          </View>
          <View style={{ margin: 10 }}>
            <Text style={{ fontSize: 20, margin: 10, fontWeight: "500" }}>
              Instructions
            </Text>
            <FlatList
              data={route.params.steps}
              renderItem={({ item }) => {
                return (
                  <Text
                    style={{
                      fontSize: 16,
                      marginLeft: 10,
                      fontWeight: "400",
                      fontFamily: "Outfit-Regular",
                      lineHeight: 22,
                    }}
                  >
                    {item}
                  </Text>
                );
              }}
            />
          </View>
        </View>
      </ScrollView>
      <View style={{ marginTop: 10 }}>
        <ButtonComponent
          buttonStyle={{
            width: 186,
            borderRadius: 20,
            alignSelf: "center",
            fontSize: 16,
            fontWeight: "400",
            fontFamily: "Outfit-Regular",
            lineHeight: 22,
          }}
          text={route.params.flag != "" ? "Add To Lunchbox" : "Add to list"}
          onPress={() =>
            navigateToScreen(
              route.params.ingredients,
              route.params.selectedIngredients
            )
          }
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  RecipeDetailsContainer: {
    flex: 1,
    backgroundColor: "white",
  },
});
export default RecipeDetails;
