import React from 'react'
import { StyleSheet, View, Text, SafeAreaView,LogBox } from 'react-native'
import TextInputComponent from './src/components/TextInputComponent'
import { StatusBar } from 'expo-status-bar'
import LoginScreen from './src/screen/LoginScreen'
import StackNavigators from './src/navigation/StackNavigators'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>

      {/* <LoginScreen /> */}
      <StackNavigators />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
    //backgroundColor: 'red'
  }

})
export default App
LogBox.ignoreAllLogs();