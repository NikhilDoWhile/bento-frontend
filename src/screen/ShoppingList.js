import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonComponent from "../components/ButtomComponent";
import Header from "../components/Header";
import SearchComponent from "../components/SearchComponent";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import ApiHandler from "../api/ApiHandler";

const ShoppingListScreen = ({ navigation }) => {
  const [shoppingData, setShoppingData] = useState([]);
  const [select, setSelect] = useState(true);
  const [arrData, setArrData] = useState([]);
  const [dayArray, setDayArray] = useState([]);
  const [msg, setMsg] = useState([]);
  useEffect(() => {
    getShoppingListData();
  }, [shoppingData]);

  const getShoppingListData = () => {
    ApiHandler.getShoppingList().then((response) => {
      setShoppingData([...new Set(response)]);
    });
  };
  const handlePress = (item, index) => {
    const check = [...arrData];
    const message = [...msg];
    const dayArrays = [...dayArray];
    let megs = "";
    if (check && check[index]) {
      check[index] = false;
      dayArrays.push(check[index]);
      const i = message.indexOf(item);
      message.splice(i, 1);
    } else {
      check[index] = true;
      dayArrays.push(check[index]);
      megs = item;
      message.push(megs);
    }
    setMsg(message);
    setArrData(check);
  };
  const removeShoppingList = (done) => {
    const ingredients = msg.toString();
    ApiHandler.removeShoppingList(ingredients).then((response) => {
      if (response) {
        setShoppingData(response);
      }
    });
    if (done != "") {
      navigation.goBack();
    }
  };
  const renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          marginTop: 10,
        }}
      >
        <TouchableOpacity
          onPress={() => handlePress(item, index)}
          style={{ flexDirection: "row" }}
        >
          <MaterialCommunityIcons
            color={"black"}
            size={25}
            name={
              arrData[index]
                ? "checkbox-marked-outline"
                : "checkbox-blank-outline"
            }
          />
          <Text
            style={{
              fontSize: 16,
              left: 10,
              color: arrData[index] ? "lightgray" : "black",
            }}
          >
            {item}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={arrData[index] ? false : true}
          onPress={() => removeShoppingList(item)}
          style={{
            height: 20,
            width: 20,
            backgroundColor: arrData[index] ? "black" : "white",
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Entypo
            color={"white"}
            size={20}
            name={!arrData[index] ? "cross" : ""}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        showHeaderTitle
        logo
        onNotiPress={() => navigation.navigate("PushNotification")}
      />
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 1 / 17,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 28,
              fontWeight: "400",
              fontFamily: "Sniglet-regular",
            }}
          >
            Shopping List
          </Text>
        </View>
        <View style={{ flex: 9 / 10 }}>
          <SearchComponent searchStyle={{ borderColor: "gray" }} />
          <FlatList
            data={shoppingData}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
          />
        </View>
        <View style={{ flex: 1 / 10 }}>
          <ButtonComponent
            buttonStyle={{
              width: "40%",
              alignSelf: "center",
              borderRadius: 20,
            }}
            text={"Done"}
            onPress={() => removeShoppingList("done")}
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
});
export default ShoppingListScreen;
