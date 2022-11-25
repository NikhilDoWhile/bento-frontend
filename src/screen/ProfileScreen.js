import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import AntDesign from "react-native-vector-icons/AntDesign";

const ProfileScreen = ({ navigation }) => {
  let data = [
    { id: 1, screen: "Personal Setting" },
    { id: 2, screen: "Manage Accounts" },
    { id: 3, screen: "Change Password" },
    { id: 4, screen: "Push Notification" },
    { id: 5, screen: "Log out" },
  ];
  const [profileData, setProfileData] = useState(data);
  const navigateToprofileScreen = (profile) => {
    if (profile === "Personal Setting") {
      navigation.navigate("Profile");
    } else if (profile === "Manage Accounts") {
      navigation.navigate("ManageAccounts");
    } else if (profile === "Change Password") {
      navigation.navigate("ForgotPassword");
    } else if (profile === "Push Notification") {
      navigation.navigate("PushNotification");
    }else if (profile === "Log out") {
      navigation.navigate("login")
    }
  };
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigateToprofileScreen(item.screen)}
        style={{ margin: 5 }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 13,
            marginVertical: 8,
          }}
        >
          <Text
            style={{
              margin: 10,
              fontSize: 16,
              fontFamily: "Outfit-regular",
              fontWeight: "400",
              color: item.screen === "Log out" ?  "#FC6474": '#000'
            }}
          >
            {item.screen}
          </Text>
          {item.screen !== "Log out" && (
            <AntDesign
              onPress={() => navigateToprofileScreen(item.screen)}
              size={20}
              color="#FFAB00"
              name="right"
            />
          )}
        </View>

        {item.screen !== "Log out" && (
          <View
            style={{
              width: "90%",
              height: 2,
              backgroundColor: "black",
              marginBottom: 10,
              alignSelf: "center",
            }}
          />
        )}
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header
        logo
        onLogoPress={() => navigation.pop()}
        onNotiPress={() => navigation.navigate("PushNotification")}
        onUserPress={() => navigation.navigate("ProfileScreen")}
      />
      <View style={{ flex: 1,            backgroundColor:'#fff'
 }}>
        <View
          style={{
            height: 30,
            width: "100%",
            justifyContent: "center",
            marginTop: 20,
            backgroundColor:'#fff'
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
            Profile
          </Text>
        </View>
        <FlatList
          data={profileData}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default ProfileScreen;
