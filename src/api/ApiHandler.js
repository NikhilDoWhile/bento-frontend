import { baseUrl } from "./baseUrl.";

export default class ApiHandler {
    static login = async (email, password) => {
        try {
            const fetchResponse = await fetch(baseUrl.login + `userName=${email}&password=${password}`);
            if (fetchResponse.status === 200) {
                return 200
            } else {
                return 404;
            }
        } catch (e) {
            console.log("error==", e)
        }
    }
    static singUp = async (password, name, userName) => {
        try {
            const params = {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
            }
            const fetchResponse = await fetch(baseUrl.Sing_UP + `password=${password}&name=${name}&userName=${userName}`, params);
            console.log("url===", fetchResponse.status)
            if (fetchResponse.status === 200) {
                return true
            } else {
                return false
            }
        } catch (e) {
            console.log("singup===", e)
        }
    }
    static getAllIngredients = async () => {
        try {
            const fetchResponse = await fetch(baseUrl.getAllIngredients);
            let data = fetchResponse.json();
            return data;
        } catch (e) {
            console.log("error==", e)
        }
    }
    static getmatchUnmatchIngredients = async (message) => {
        try {
            const fetchResponse = await fetch(baseUrl.matchUnmatchIngredients + `${message}`);
            let data = fetchResponse.json()
            // if (fetchResponse.status === 200) {
            //     return 200
            // } else {
            //     return 404;
            // }
            //console.log("fetchData====", data)
            return data
        } catch (e) {
            console.log("error==", e)
        }
    }
    static getShoppingList =async () =>{
        try {
            let fetchResponse= await fetch (baseUrl.getShoppingList)
            let data=fetchResponse.json()
            return data;
        } catch (e){
            console.log("getShoppingList",e)
        }
    }
    static removeShoppingList = async (ingredients)=>{
        try {
            const params = {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
               
            }
            const fetchResponse = await fetch(baseUrl.removeShoppingList + `${ingredients}`, params)
            if(fetchResponse){
                return fetchResponse
            } 
        } catch (e){
            console.log("removeShoppingList",e);
        }
    }
}