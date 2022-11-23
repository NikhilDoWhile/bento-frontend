import { NavigationContainer } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ApiHandler from "../api/ApiHandler";
import ButtonComponent from "../components/ButtomComponent";
import Header from "../components/Header";
import ImageComponent from "../components/ImageComponent";
import SearchComponent from "../components/SearchComponent";
import { pantryStyle } from "../style/PantryStyle";

const PantryScreen = ({ navigation, route }) => {
  const [list, setList] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [arrData, setArrData] = useState([]);
  const [dayArray, setDayArray] = useState([]);
  const [msg, setMsg] = useState([]);
  const [selectedArray, setSelectedArray] = useState(["Pasta",
  "Broccoli",
  "Oil",
  "Onion",
  "Garlic",
  "Ham",
  "Double Cream",
  "Mustard",
  "Cheese"]);
  const [value,setValue] = useState('')
  // console.log("parentId==",route?.params?.parentId)

  useEffect(() => {
    getAllIngredients();
  }, []);

  const getAllIngredients = () => {
    ApiHandler.getAllIngredients().then((response) => {
      setList(response);
      setFilterData(response);
    });
  };

  const getMatchUnmatch = (message) => {
    ApiHandler.getmatchUnmatchIngredients(message).then((response) => {
      console.log("get match and unmatch==", response);
      if (response && selectedArray.length > 0) {
        navigation.navigate("TabNavigators", {
          screen: "Home",
          params: {
            response: response,
            messageLength: msg.length,
            selectedIngredients: selectedArray,
            id: response.id,
            kid: route?.params?.kid,
            parentId: route?.params?.parentId,
          },
        });
      } else {
        Alert.alert("please select Ingredients");
      }
    });
  };
  const handlePress = (item, index) => {
    let selectedData = [...selectedArray];
    if (selectedRecipe(item)) {
      const i = selectedData.indexOf(item);
      selectedData.splice(i, 1);
    } else {
      selectedData.push(item);
    }
    setSelectedArray(selectedData);
  };
  const selectedRecipe = (item) => {
    return selectedArray.includes(item);
  };
  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => handlePress(item.title, index)}
        style={[pantryStyle.itemContainer, {}]}
      >
        <View
          style={{
            borderWidth: selectedRecipe(item.title) ? 2 : 0,
            borderColor: "skyblue",
          }}
        >
          <View
            style={[
              pantryStyle.ingridientsView,
              { backgroundColor: "#F6F3E7", padding: 6, width: 70 },
            ]}
          >
            <ImageComponent
              source={item.url}
              imageStyle={{ height: 50, width: 50, alignSelf: "center" }}
            />
          </View>
          <Text style={{ fontSize: 16, fontWeight: "500", alignSelf:'center' }}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  const searchFilter = (text) => {
    setValue(text)
    if (text) {
      const newData = list.filter((item) => {
        const itemData = item.title
          ? item.title.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilterData(newData);
    } else {
      setFilterData(list);
    }
  };
  const removeInput = ()=>{
    searchFilter(value)
   setValue('')
  }

  return (
    <SafeAreaView style={[pantryStyle.container, { backgroundColor: "white" }]}>
      <Header
                onUserPress={() => navigation.navigate('ProfileScreen')}
                logo
                onNotiPress={()=>navigation.navigate('PushNotification')}
            />
      <View style={[pantryStyle.mainContainer]}>
        <Text
          style={{
            marginTop: 15,
            color: "#FFAB00",
            fontSize: 28,
            fontWeight: "400",
            fontFamily: "Sniglet-regular",
          }}
        >
          {"Choose your ingredients"}
        </Text>
        <View style={{ marginHorizontal: 14 }}>
          <Text
            style={{
              marginTop: 10,
              fontSize: 17,
              fontWeight: "400",
            }}
          >
            You’re almost ready! Please select the ingredients you have
            available.
          </Text>
        </View>

        <SearchComponent value={value} onCrossPress={()=>removeInput()} onChangeText={(text) => searchFilter(text)} />
        <FlatList
          data={filterData}
          keyExtractor={(item) => item.id}
          numColumns={3}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <View style={{ flex: 1 / 10, alignItems: "center" }}>
        <ButtonComponent
          text={"Continue"}
          textStyle={{ fontSize: 16, fontWeight: '400' }}
          buttonStyle={{
            borderRadius: 20,
            bottom: 10,
            width: 145,
            marginTop: 20,
            backgroundColor: selectedArray.length > 0 ? "#FFAB00" : "#D9D9D9",
          }}
          onPress={() => getMatchUnmatch(selectedArray)}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({});
export default PantryScreen;
