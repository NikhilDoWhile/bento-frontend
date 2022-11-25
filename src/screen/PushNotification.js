import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const PushNotification = ({ navigation }) => {
  const [pushToggleData, setPushToggleData] = useState(false);
  const [reminderToggleData, setReminderToggleData] = useState(false);

  const [togglePush, setTogglePush] = useState(false);
  const [pushTapped, setPushTapped] = useState();
  const [reminderTapped, setReminderTapped] = useState();

  const List = [
    { id: "1", data: "Push Notifications" },
    { id: "2", data: "Remainder to Update pantry" },
  ];
  const toggleButton = (item) => {
    setToggleData(!toggleData);
  };
  const toggleButtonPushNotification = () => {
    setToggleData(!toggleData);
  };

  const renderNotiOption = (text) => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 18,
            alignSelf: "center",
            fontWeight: "400",
            fontFamily: "Outfit-regular",
          }}
        >
          {text}
        </Text>
        <MaterialCommunityIcons
          onPress={() =>
            item.data === "Push Notifications"
              ? toggleButtonPushNotification()
              : toggleButton()
          }
          style={{ alignSelf: "flex-end" }}
          size={50}
          color={toggleData == true ? "grey" : "orange"}
          name={toggleData == true ? "toggle-switch-off" : "toggle-switch"}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={Styles.container}>
      <Header onBackPress={() => navigation.pop()} />
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 1 / 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 24,
              alignSelf: "center",
              fontWeight: "400",
              fontFamily: "Sniglet-regular",
            }}
          >
            Notifications
          </Text>
        </View>
        <View style={{ flex: 9 / 10 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 20,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 18,
                alignSelf: "center",
                fontWeight: "400",
                fontFamily: "Outfit-regular",
              }}
            >
              {List[0].data}
            </Text>
            <MaterialCommunityIcons
              onPress={() => {
                setPushToggleData(!pushToggleData);
              }}
              style={{ alignSelf: "flex-end" }}
              size={50}
              color={pushToggleData ? "orange" : "grey"}
              name={pushToggleData ? "toggle-switch-off" : "toggle-switch"}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 20,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 18,
                alignSelf: "center",
                fontWeight: "400",
                fontFamily: "Outfit-regular",
              }}
            >
              {List[1].data}
            </Text>
            <MaterialCommunityIcons
              onPress={() => {
                setReminderToggleData(!reminderToggleData);
              }}
              style={{ alignSelf: "flex-end" }}
              size={50}
              color={reminderToggleData ? "orange" : "grey"}
              name={reminderToggleData ? "toggle-switch-off" : "toggle-switch"}
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
  },
});
export default PushNotification;
