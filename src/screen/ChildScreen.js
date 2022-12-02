import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ApiHandler from "../api/ApiHandler";
import ButtonComponent from "../components/ButtomComponent";
import ChildComponent from "../components/ChildrenComponent";

const ChildScreen = ({ navigation, route }) => {
  const [kidData, setKidData] = useState([]);
  const [isParent, setIsParent] = useState(false);
  const [kidName, setKidName] = useState("");

  useEffect(() => {
    getKid();
  }, []);

  const navigateOnSelect = (isParent) => {
    if (isParent) {
      navigation.navigate("Pantry", {
        kid: kidData,
        parentId: route?.params?.parentId,
      });
    } else {
      navigation.navigate("ChildTabNavigators", {
        screen: "ChildLunchBox",
        params: {
          parentId: route.params.parentId,
          name: kidName,
        },
      });
    }
  };
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
              //   borderWidth: isParent ? 2 : 0,
              // borderColor: "#FFAB00",
              // borderRadius:100
            }}
          >
            <ChildComponent
              isParent={true}
              parentSelected={isParent}
              name={route?.params?.userName}
              imgSource={require("../../assets/Ellipse67.png")}
              onPress={() => {
                setIsParent(true);
              }}
            />
          </View>
          <View style={{ alignItems: "center", paddingTop: 60 }}>
            <FlatList
              data={kidData}
              keyExtractor={(item, index) => item.id}
              numColumns={2}
              renderItem={({ item , index}) => {
                return (
                  <ChildComponent
                    name={item.name}
                    isParent={false}
                    firstKid={index === 0 ? true : false}
                    kidSelected={
                      !isParent && kidName === item.name ? true : false
                    }
                    onPress={() => {
                      setKidName(item.name);
                      setIsParent(false);
                    }}
                  />
                );
              }}
            />
          </View>
          <TouchableWithoutFeedback
            onPress={() => {
              navigateOnSelect(isParent);
            }}
          >
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
          </TouchableWithoutFeedback>
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