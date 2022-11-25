import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TextComponent,
  ScrollView,
  Dimensions,
  Alert,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ApiHandler from "../api/ApiHandler";
import ButtonComponent from "../components/ButtomComponent";
import ImageComponent from "../components/ImageComponent";
import TextInputComponent from "../components/TextInputComponent";
import Preferences from "../LocalStorage/Prefetences";
import { loginStyle } from "../style/LoginStyle";
const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const LoginScreen = ({ navigation }) => {
  const [singUp, setSingUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [userGoogleInfo, setUserGoogleInfo] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [fontLoded, setFontLoaded] = useState(false);


  useEffect(() => {
    //   initAsync()
    setEmail("")
    setPassword("")
    setUserName("")
  }, []);

  const singUpData = () => {
    setSingUp(!singUp);
  };

  const moveTomainScreen = async (email, password) => {
    ApiHandler.login(email, password).then((response) => {
      console.log("Login===", response);
      if (response.response) {
        navigation.navigate("Child", {
          userName: response.name,
          parentId: response.response,
        });
      } else {
        Alert.alert(`LoginUser is not present:${(email, password)}`);
      }
    });
  };
  // const IosClintId='200403249051-thusd9nqq34koinfk36rbke90a9utl4n.apps.googleusercontent.com'
  // const initAsync = async () => {
  //     await GoogleSignIn.initAsync({
  //       // You may ommit the clientId when the firebase `googleServicesFile` is configured
  //       clientId: IosClintId,
  //     });
  //     _syncUserWithStateAsync();
  //   };

  //   const _syncUserWithStateAsync = async () => {
  //    // const googleSignin= await GoogleSignIn.signIn
  //     const user = await GoogleSignIn.signInSilentlyAsync();
  //     setUserGoogleInfo({user})
  //   };
  //  const signOutAsync = async () => {
  //     await GoogleSignIn.signOutAsync();
  //     setUserGoogleInfo(null)
  //   };

  //  const signInAsync = async () => {
  //     try {
  //       await GoogleSignIn.askForPlayServicesAsync();
  //       const { type, user } = await GoogleSignIn.signInAsync();
  //       if (type === 'success') {
  //         _syncUserWithStateAsync();
  //       }
  //     } catch ({ message }) {
  //       alert('login: Error:' + message);
  //     }
  //   };

  //  const onPressData = () => {
  //     if (userGoogleInfo) {
  //       signOutAsync();
  //     } else {
  //     signInAsync();
  //     }
  //   };
  const moveToSingUp = (password, userName, email) => {
    ApiHandler.singUp(password, userName, email).then((response) => {
      console.log("singup===", response.name, email);
      if (response.response) {
        let name = response.name;
        let parentId = response.response;
        let data = { name, email, parentId, password };
        Preferences.setItem("userDetail", JSON.stringify(data));
        navigation.navigate("welcome", {
          userName: response.name,
          parentId: response.response,
        });
      } else {
        Alert.alert(`User Already SIgnin:${(email, password)}`);
      }
    });
  };

  const hideShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <SafeAreaView vertical={false}>
      <View style={{ backgroundColor: "#F6F3E7" }}>
        <ScrollView scrollEnabled={false}>
          <View
            style={[loginStyle.loginImageView, { backgroundColor: "#F6F3E7" }]}
          >
            <Image
              source={require("../../assets/bentoLogo-grn.png")}
              style={{ height: 50, width: screenWidth / 1.4 }}
              resizeMode='cover'
            />
          </View>
          <View
            style={[
              {
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                backgroundColor: "white",
                paddingBottom: 100,
                paddingHorizontal: 20,
              },
            ]}
          >
            <Text
              style={{
                fontSize: 30,
                marginHorizontal: 20,
                marginTop: 20,
                color: "#FFAB00",
                fontFamily: "Sniglet-regular",
              }}
            >
              {singUp ? "Sign Up" : "Login"}
            </Text>
            <View>
              <View style={{ marginHorizontal: 7 }}>
                <Text
                  style={{
                    margin: 10,
                    fontWeight: "600",
                    fontFamily: "Sniglet-regular",
                    fontSize: 16,
                  }}
                >
                  Email
                </Text>
                <TextInputComponent
                  placeholder={"name@email.com"}
                  symbol="email"
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                  inputStyle={[
                    loginStyle.inputStyle,
                    {
                      justifyContent: "space-evenly",
                      right: 0,
                      color: "#7B8794",
                    },
                  ]}
                  icon
                  inputContainer={[
                    loginStyle.inputViewStyle,
                    { borderRadius: 20 },
                  ]}
                />
              </View>
              <View style={{ marginHorizontal: 7 }}>
                <Text
                  style={{
                    margin: 10,
                    fontWeight: "600",
                    fontFamily: "Sniglet-regular",
                    fontSize: 16,
                  }}
                >
                  Password
                </Text>
                <TextInputComponent
                  placeholder={"********"}
                  inputStyle={loginStyle.inputStyle}
                  symbol={"lock"}
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                  icon
                  inputContainer={[
                    loginStyle.inputViewStyle,
                    { borderRadius: 20, color: "#7B8794" },
                  ]}
                  secureTextEntry={showPassword ? false : true}
                  // eyeSymbol={showPassword ? "eye" : "eye-with-line"}
                  onEyePress={() => hideShowPassword()}
                  showHidePassword
                />
              </View>
              {singUp && (
                <View style={{ marginHorizontal: 7 }}>
                  <Text
                    style={{
                      margin: 10,
                      fontWeight: "600",
                      fontFamily: "Sniglet-regular",
                      fontSize: 16,
                    }}
                  >
                    Confirm Password
                  </Text>
                  <TextInputComponent
                    placeholder={"********"}
                    inputStyle={loginStyle.inputStyle}
                    symbol={"lock"}
                    icon
                    inputContainer={[
                      loginStyle.inputViewStyle,
                      { borderRadius: 20, color: "#7B8794" },
                    ]}
                    secureTextEntry={showPassword ? false : true}
                    // eyeSymbol={showPassword ? "eye" : "eye-with-line"}
                    onEyePress={() => hideShowPassword()}
                    showHidePassword
                  />
                </View>
              )}

              {!singUp && (
                <Text
                  onPress={() =>
                    navigation.navigate("ForgotPassword", { email: email })
                  }
                  style={[
                    loginStyle.forgotPassword,
                    {
                      alignSelf: "flex-end",
                      right: 20,
                      color: "#FFCC7E",
                      fontSize: 16,
                      marginBottom: 15,
                      marginTop: 10,
                    },
                  ]}
                >
                  Forgot your Password ?
                </Text>
              )}
              <ButtonComponent
                buttonStyle={{
                  borderRadius: 30,
                  backgroundColor: "#FFAB00",
                  width: 145,
                  alignSelf: "center",
                }}
                textStyle={{ fontWeight: "400", fontSize: 16, lineHeight: 20 }}
                text={!singUp ? "Login" : "Sign up"}
                onPress={() =>
                  !singUp
                    ? moveTomainScreen(email, password)
                    : moveToSingUp(password, userName, email)
                }
              />
              <View style={{ padding: 0 }}>
                <Text style={[loginStyle.forgotPassword]}>{"or"}</Text>
              </View>
              <View
                style={{
                  marginTop: 10,
                  // padding: 2,
                  backgroundColor: "#FFF",
                  borderRadius: 30,
                  borderColor: "#F2E1E3",
                  borderWidth: 1,
                  marginHorizontal:25
                }}
              >
                <ButtonComponent
                  showImage
                  google
                  buttonStyle={{
                    backgroundColor: "white",
                    // borderWidth: 1,
                    //width: screenWidth / 1.3,
                    alignSelf: "center",
                    // borderRadius: 30,
                    // borderColor: "#F2E1E3",
                    // height: 60,
                    // paddingHorizontal: 40
                  }}
                  // onPress={()=>onPressData}
                />
              </View>
            </View>
            <View style={{ paddingTop: !singUp ? 20 : 5 }}>
              <Text style={[loginStyle.loginSingInSingUpText]}>
                {!singUp
                  ? "You don't have an account"
                  : "Already have an account"}
                ?
                <Text
                  onPress={() => singUpData()}
                  style={[loginStyle.singUpColor]}
                >
                  {!singUp ? " Sign up" : " Login"}
                </Text>
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default LoginScreen;
