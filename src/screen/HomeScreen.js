import React, { useState, useEffect } from "react";
import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ApiHandler from "../api/ApiHandler";
import ButtonComponent from "../components/ButtomComponent";
import Header from "../components/Header";
import NonMatchRecipeText from "../components/homeScreenComponent/NonMatchRecipeText";
import RecipeComponent from "../components/homeScreenComponent/RecipeComponent";
const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const HomeScreen = ({ navigation, route }) => {
  const [toggleButton, setToggleButton] = useState(false);
  console.log("route kid===", route.params);

  const toggleDataMatche = () => {
    setToggleButton(false);
  };

  const toggleDataOtherRecipe = () => {
    setToggleButton(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        logo
        onUserPress={() => navigation.navigate("ProfileScreen")}
        onNotiPress={() => navigation.navigate("PushNotification")}
      />
      <View style={{ flex: 1 }}>
        <View style={styles.homeScreenButton}>
          <TouchableOpacity
            onPress={() => toggleDataMatche()}
            style={[
              styles.matchButton,
              {
                backgroundColor: toggleButton ? "#F6F3E7" : "#FC6474",
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
              },
            ]}
          >
            <Text
              style={[
                styles.text,
                {
                  color: !toggleButton ? "white" : "black",
                  fontSize: 18,
                  fontWeight: "400",
                  lineHeight: "23",
                  fontFamily: "Outfit-regular",
                },
              ]}
            >
              Recipe Match
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => toggleDataOtherRecipe()}
            style={[
              styles.matchButton,
              {
                backgroundColor: toggleButton ? "#FC6474" : "#F6F3E7",
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
              },
            ]}
          >
            <Text
              style={[
                styles.text,
                {
                  color: !toggleButton ? "black" : "white",
                  fontSize: 18,
                  fontWeight: "400",
                  lineHeight: "23",
                  fontFamily: "Outfit-regular",
                },
              ]}
            >
              Other Recipe
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.mainContainer}>
          {!toggleButton ? (
            route?.params?.response?.matchedRecipe?.length > 0 ? (
              <RecipeComponent
                parentId={route?.params?.parentId}
                kid={route?.params?.kid}
                flag={"flag"}
                data={route?.params?.response?.matchedRecipe}
                navigation={navigation}
                selectedIngredients={route?.params?.selectedIngredients}
              />
            ) : (
              <NonMatchRecipeText />
            )
          ) : (
            <RecipeComponent
              data={route?.params?.response?.unMatchedRecipe}
              navigation={navigation}
              selectedIngredients={route?.params?.selectedIngredients}
            />
          )}
          <ButtonComponent
            text={"Update Pantry"}
            onPress={() =>
              navigation.navigate("TabNavigators", {
                screen: "ShoppingList",
              })
            }
            textStyle={{ fontSize: 16, fontWeight: "400" }}
            buttonStyle={{
              width: 165,
              alignSelf: "center",
              borderRadius: 30,
              position: "absolute",
              top: 530,
              height: 45,
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  homeScreenButton: {
    height: screenHeight / 22,
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 10,
    marginTop: 10,
  },
  matchButton: {
    width: screenWidth / 2.2,
    justifyContent: "center",
    alignItems: "center",
  },
  mainContainer: {
    flex: 1,
    marginTop: 1,
  },
});
export default HomeScreen;
