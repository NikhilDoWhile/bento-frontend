import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import Feather from "react-native-vector-icons/Feather";

const ChildComponent = ({
  onPress,
  name,
  isParent,
  kidSelected,
  parentSelected,
}) => {
  return (
    <View style={{ width: 120, alignItems: "center" }}>
      <TouchableOpacity onPress={onPress} style={{}}>
        <Image
          source={require("../../assets/Ellipse68.png")}
          style={{
            height: 100,
            width: 100,
            marginBottom: 10,
            borderWidth: ( parentSelected || kidSelected ? 3 :0 ),
            borderColor: "#FFAB00",
            borderRadius: 50,
          }}
        />
      </TouchableOpacity>
      <Text>{name}</Text>
    </View>
  );
};
const Styles = StyleSheet.create({
  container: {
    height: 100,
    width: 100,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
});
export default ChildComponent;
