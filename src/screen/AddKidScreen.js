import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Dimensions,
  ScrollView,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ApiHandler from "../api/ApiHandler";
import ButtonComponent from "../components/ButtomComponent";
import Header from "../components/Header";
import TextInputComponent from "../components/TextInputComponent";
import { loginStyle } from "../style/LoginStyle";
const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const AddKidScreen = ({ route, navigation }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [kidList, setKidList] = useState([]);

  const updateKid = () => {
    var order = [];
    kidList.forEach((item, index) => {
      order.push(
        <View style={{ marginHorizontal: 20, marginTop: 15 }}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Sniglet-regular",
              fontWeight: "400",
              marginTop: 5,
            }}
          >
            Kid {index + 1}
          </Text>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#F2E1E3",
              borderRadius: 10,
              paddingHorizontal: 15,
              paddingBottom: 10,
            }}
          >
            <Text
              style={{
                fontFamily: "Sniglet-regular",
                fontWeight: "400",
                fontSize: 14,
                marginTop: 5,
              }}
            >
              {item.name}
            </Text>
            <Text
              style={{
                fontFamily: "Sniglet-regular",
                fontWeight: "400",
                fontSize: 14,
                marginTop: 5,
              }}
            >
              {item.age} year old
            </Text>
          </View>

          {/* <View
            style={{
              height: 2,
              width: "90%",
              backgroundColor: "black",
              alignSelf: "center",
              marginTop: 5,
            }}
          /> */}
        </View>
      );
    });
    return order;
  };
  const addKidData = () => {
    if (name != "" && age != "") {
      let data = [...kidList];
      data.push({ name: name, age: age });
      setKidList(data);
      setName("");
      setAge("");
    } else {
      Alert.alert("please enter name and age");
    }
  };
  const navigateToScreen = () => {
    if (kidList.length > 0) {
      ApiHandler.addKid(route.params.parentId, kidList).then((response) => {
        if (response) {
          navigation.navigate("Pantry");
        }
      });
    } else {
      Alert.alert("please enter name and age");
    }
  };
  return (
    <SafeAreaView style={Styles.container}>
      <Header />
      <View style={{ flex: 1, justifyContent: "center" }}>
        <View style={{ flex: 1 / 1.2, backgroundColor: "#FFF" }}>
          <View style={{ flex: 9 / 10 }}>
            <ScrollView>
              <Text
                style={{
                  fontSize: 20,
                  alignSelf: "center",
                  margin: 10,
                  fontFamily: "Sniglet-regular",
                  fontWeight: "400",
                }}
              >
                Add Your Kid
              </Text>
              {updateKid()}
              <View style={{ margin: 15 }}>
                <Text
                  style={{
                    fontSize: 16,
                    margin: 10,
                    fontFamily: "Sniglet-regular",
                    fontWeight: "400",
                  }}
                >
                  Kid
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    marginLeft: 10,
                    fontFamily: "Sniglet-regular",
                    fontWeight: "400",
                  }}
                >
                  Name
                </Text>
                <TextInputComponent
                  capitalize={"words"}
                  placeholder={"Add Kid"}
                  inputStyle={[
                    loginStyle.inputStyle,
                    {
                      borderWidth: 1,
                      borderColor: "#F2E1E3",
                      borderRadius: 10,
                      alignSelf: "center",
                    },
                  ]}
                  onChangeText={(text) => setName(text)}
                  value={name}
                />
              </View>
              <View style={{ marginLeft: 15 }}>
                <Text style={{ fontSize: 16, marginLeft: 10 }}>Age</Text>
                <TextInputComponent
                  placeholder={"Age"}
                  inputStyle={[
                    loginStyle.inputStyle,
                    {
                      borderWidth: 1,
                      borderColor: "#F2E1E3",
                      borderRadius: 10,
                      marginLeft: 15,
                      width: 100,
                    },
                  ]}
                  onChangeText={(text) => setAge(text)}
                  value={age}
                />
              </View>
              <ButtonComponent
                buttonStyle={{
                  width: 100,
                  alignSelf: "center",
                  borderRadius: 20,
                }}
                text={"Add Kids"}
                onPress={() => addKidData()}
              />
            </ScrollView>
          </View>
          <View style={{ flex: 1 / 10, backgroundColor: "#FFF" }}>
            <ButtonComponent
              buttonStyle={{
                width: screenWidth / 5,
                alignSelf: "center",
                borderRadius: 20,
              }}
              showArrow
              onPress={() => navigateToScreen()}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
export default AddKidScreen;
