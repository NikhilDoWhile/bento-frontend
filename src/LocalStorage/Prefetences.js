import AsyncStorage from '@react-native-async-storage/async-storage';


class Preferences {
    static setItem = async (key, value) => {
        try {
            await AsyncStorage.setItem(key, value)
        } catch (error) {
            console.log(error)
        }
    }
    static getItem = async (key) => {
        try {
            let value = await AsyncStorage.getItem(key)
            return value
        } catch (error) {
            console.log(error)
        }
    }
    static removeItem = async (key) => {
        try {
            await AsyncStorage.removeItem(key)
        } catch (error) {
            console.log(error)
        }
    }
}
export default Preferences