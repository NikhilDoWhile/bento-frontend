import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";

const Header = ({
  logo,
  onBackPress,
  headerTitle,
  showHeaderTitle,
  onUserPress,
  onNotiPress,
}) => {
  return (
    <View style={styles.container}>
      {logo ? (
        <Image
          source={require("../../assets/bentoLogo-grn.png")}
          style={{ height: 18, width: 97 }}
        />
      ) : (
        <AntDesign
          onPress={onBackPress}
          size={20}
          color="gray"
          name="arrowleft"
        />
      )}
      {showHeaderTitle ? (
        <Text style={{ fontSize: 17, fontWeight: "900" }}>{headerTitle}</Text>
      ) : null}

      <View
        style={{
          flexDirection: "row",
          width: 50,
          justifyContent: "space-between",
          marginRight: 7
        }}
      >
        {/* <Feather onPress={onUserPress} size={22} color="gray" name="user" />
                <AntDesign  onPress={onNotiPress} size={20} color="gray" name="bells" /> */}
        <TouchableWithoutFeedback onPress={onUserPress}>
          <Image
            source={require("../../assets/user_Profile.png")}
            style={{ height: 22, width: 22 }}
            resizeMode="contain"
          />
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={onNotiPress}>
          <Image
            source={require("../../assets/icon_notification.png")}
            style={{ height: 22, width: 22 }}
            resizeMode="contain"
          />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 55,
    backgroundColor: "white",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
});
export default Header;
