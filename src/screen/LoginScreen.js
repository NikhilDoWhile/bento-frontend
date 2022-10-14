import React, { useState } from 'react'
import { StyleSheet, View, Text, Image, TextComponent } from 'react-native'
import ButtonComponent from '../components/ButtomComponent'
import ImageComponent from '../components/ImageComponent'
import TextInputComponent from '../components/TextInputComponent'

const LoginScreen = ({ navigation }) => {
    const [singUp, setSingUp] = useState(false)
    const singUpData = () => {
        setSingUp(!singUp)
    }
    const moveTomainScreen = () => {
        navigation.navigate('welcome')
    }
    return (
        <View style={styles.container}>
            <View style={{ alignSelf: 'center', backgroundColor: 'red' }}>
                <ImageComponent />
            </View>
            <View style={{ justifyContent: 'center' }}>
                {
                    singUp &&
                    <View style={{ margin: 7 }}>
                        <Text style={{ margin: 3 }}>Name</Text>
                        <TextInputComponent
                            placeholder={"User name"}
                            inputStyle={{ borderRadius: 10 }}
                        />
                    </View>
                }
                <View style={{ margin: 7 }}>
                    <Text style={{ margin: 3 }}>Email</Text>
                    <TextInputComponent
                        placeholder={"name@email.com"}
                        inputStyle={{ borderRadius: 10 }}
                    />
                </View>
                <View style={{ margin: 7 }}>
                    <Text style={{ margin: 3 }}>Password</Text>
                    <TextInputComponent
                        placeholder={"********"}
                        inputStyle={{ borderRadius: 10 }}
                    />
                </View>
                {
                    singUp &&
                    <View style={{ margin: 7 }}>
                        <Text style={{ margin: 3 }}>Confirm Password</Text>
                        <TextInputComponent
                            placeholder={"********"}
                            inputStyle={{ borderRadius: 10 }}
                        />
                    </View>
                }

                <ButtonComponent
                    buttonStyle={{ borderRadius: 30 }}
                    text={!singUp ? "LOGIN" : "SINGUP"}
                    onPress={() => moveTomainScreen()}
                />
                <View style={{ marginTop: 10, height: 50, alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ alignSelf: 'center', color: 'gray' }}>{!singUp ? "Don't have and account" : "Already have an account"} ?<Text onPress={() => singUpData()} style={{ color: 'blue' }}>{!singUp ? " Sing in" : " Login"}</Text></Text>
                    {
                        !singUp && <Text style={{ alignSelf: 'center', color: 'gray' }}>Forget Password</Text>
                    }
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: 'red'
        justifyContent: 'space-evenly'
    }

})
export default LoginScreen