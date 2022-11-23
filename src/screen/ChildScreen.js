import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ApiHandler from "../api/ApiHandler";
import ButtonComponent from "../components/ButtomComponent";
import ChildComponent from "../components/ChildrenComponent";

const ChildScreen = ({ navigation, route }) => {
  const [kidData, setKidData] = useState([]);

  useEffect(() => {
    getKid();
  }, []);
  const getKid = () => {
    ApiHandler.getKid(route.params.parentId).then((response) => {
      console.log("response===", response.kids);
      if (response) {
        setKidData(response.kids);
      }
    });
  };
  return (
    <SafeAreaView style={{}}>
      <View
        style={{
          flex: 1,
        }}
      >
        <Image source={require("../../assets/Rectangle64.png")} />
        <View
          style={{
            backgroundColor: "#000",
            position: "absolute",
            alignSelf: "center",
            width: Dimensions.get("window").width - 50,
            height: Dimensions.get("window").height - 300,
            backgroundColor: "#fff",
            // paddingHorizontal: 70,
            // paddingVertical: 150,
            marginTop: 70,
            borderRadius: 30,
          }}
        >
          <View style={{ alignItems: "center", paddingTop: 50 }}>
            <Text
              style={{
                fontSize: 32,
                color: "#FFAB00",
                fontWeight: "400",
                fontFamily: "Sniglet-regular",
              }}
            >
              Who is Using Bento?
            </Text>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              paddingTop: 40,
            }}
          >
            <ChildComponent
              isParent={true}
              name={route?.params?.userName}
              imgSource={require("../../assets/Ellipse67.png")}
              onPress={() =>
                navigation.navigate("Pantry", {
                  kid: kidData,
                  parentId: route?.params?.parentId,
                })
              }
            />
          </View>
          <View style={{ alignItems: "center", paddingTop: 60 }}>
            <FlatList
              data={kidData}
              keyExtractor={(item) => item.id}
              numColumns={2}
              renderItem={({ item }) => {
                return (
                  <ChildComponent
                    name={item.name}
                    isParent={false}
                    onPress={() =>
                      navigation.navigate("ChildTabNavigators", {
                        screen: "ChildLunchBox",
                        params: {
                          parentId: route.params.parentId,
                          name: item.name,
                        },
                      })
                    }
                  />
                );
              }}
            />
          </View>
          <View
            style={{
              alignSelf: "center",
              marginTop: 20,
              backgroundColor: "#FFAB00",
              width: 145,
              alignItems: "center",
              paddingVertical: 15,
              borderRadius: 30,
            }}
          >
            <Text style={{ fontSize: 18, color: "#FFF", fontWeight: "400" }}>
              {"Continue"}
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    paddingVertical: 50,
  },
});
export default ChildScreen;
