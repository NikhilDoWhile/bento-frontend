import { baseUrl } from "./baseUrl.";

export default class ApiHandler {
    static login = async (email, password) => {
        console.log("login url===",baseUrl.login + `userName=${email}&password=${password}`)
        try {
            const fetchResponse = await fetch(baseUrl.login + `userName=${email}&password=${password}`);
            if (fetchResponse.status === 200) {
                let data=fetchResponse.json()
                return data
            } else {
                return fetchResponse.status
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
            const data=fetchResponse.json()
            return data;
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
            const fetchResponse = await fetch(baseUrl.removeShoppingList + `${ingredients}`)
            const data= fetchResponse.json()
                return data
        } catch (e){
            console.log("removeShoppingList",e);
        }
    }
    static addLunchBox = async (recipeId,parentId,day) => {
        console.log("day========",recipeId,parentId,day)
        try {
            const params = {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
            }
            const fetchResponse = await fetch(baseUrl.addLunchBox + `${recipeId}?parentId=${parentId}&day=${day}`, params);
            const data= fetchResponse.json()
            return data
             
        } catch (e) {
            console.log("addLunchBox==", e)
        }
    }
    static getLunchBox =async (parentId) =>{
        try {
            let fetchResponse= await fetch (baseUrl.getLunchBox+parentId)
            let data=fetchResponse.json()
            return data;
        } catch (e){
            console.log("getShoppingList",e)
        }
    }
    static addShoppingList = async (shoppingList) => {
        try {
            const params = {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
            }
            const fetchResponse = await fetch(baseUrl.addShoppingList + `${shoppingList}`, params);
            const data= fetchResponse.json()
            return data
             
        } catch (e) {
            console.log("addLunchBox==", e)
        }
    }
    static addKid = async (parentId,kidData) => {
        try {
            const params = {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(kidData)
            }
            const fetchResponse = await fetch(baseUrl.addKid + `parentId=${parentId}`, params);
            const data= fetchResponse.json()
            return data
             
        } catch (e) {
            console.log("addKid==", e)
        }
    }
    static getKid =async (parentId) =>{
        try {
            let fetchResponse= await fetch (baseUrl.getKid+ `parentId=${parentId}`)
            let data=fetchResponse.json()
            return data;
        } catch (e){
            console.log("getKid==",e)
        }
    }
    static forgotPassword = async (userName,password) => {
        try {
            const params = {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
            }
            const fetchResponse = await fetch(baseUrl.forgotPassword + `userName=${userName}&password=${password}`, params);
            const data= fetchResponse.json()
            console.log("data====",data)
            return data
             
        } catch (e) {
            console.log("forgotpassword==", e)
        }
    }
    static assignKid = async (LunchBoxId,parentId,kidsName,day) => {
       console.log("day========",baseUrl.addLunchBox + `${LunchBoxId}?parentId=${parentId}&kidsName=${kidsName}&day=${day}`)
        try {
            const params = {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
            }
            const fetchResponse = await fetch(baseUrl.assignKid + `${LunchBoxId}?parentId=${parentId}&kidsName=${kidsName}&day=${day}`, params);
            const data= fetchResponse.json()
            return data
             
        } catch (e) {
            console.log("addLunchBox==", e)
        }
    }
    static getAssignKid =async (parentId) =>{
        console.log("baseUrl====",baseUrl.getAssignKid+ `${parentId}`)
        try {
            let fetchResponse= await fetch (baseUrl.getAssignKid+ `${parentId}`)
            let data=fetchResponse.json()
            return data;
        } catch (e){
            console.log("getKid==",e)
        }
    }
    static addrating = async (parentId,rating,kidName) => {
        try {
            const params = {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
            }
            const fetchResponse = await fetch(baseUrl.addRating + `parentId=${parentId}&rating=${rating}&kidName=${kidName}`, params);
            const data=fetchResponse.json()
            return data;
        } catch (e) {
            console.log("singup===", e)
        }
    }
    static getRating =async (parentId,kidName) =>{
        console.log("url===",baseUrl.getRating+ `parentId=${parentId}&kidName${kidName}`)
        try {
            let fetchResponse= await fetch (baseUrl.getRating+ `parentId=${parentId}&kidName=${kidName}`)
            let data=fetchResponse.json()
            return data;
        } catch (e){
            console.log("getKid==",e)
        }
    }
    static updateProfile = async (parentId,password,name) => {
        console.log("url=====",baseUrl.updateProfile + `parentId=${parentId}/parent/normal?password=${password}&name=${name}`)
        try {
            const params = {
                method: 'PATCH',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
            }
            const fetchResponse = await fetch(baseUrl.updateProfile + `${parentId}/parent/normal?password=${password}&name=${name}`, params);
            const data=fetchResponse.json()
            return data;
        } catch (e) {
            console.log("singup===", e)
        }
    }
    static deleteKid = async (parentId,kidName,) => {
        console.log("deleteKid",baseUrl.deleteKid + `parentId=${parentId}&kidName=${kidName}`)
        try {
            const params = {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
            }
            const fetchResponse = await fetch(baseUrl.deleteKid + `parentId=${parentId}&kidName=${kidName}`, params);
            const data= fetchResponse.json()
            return data
             
        } catch (e) {
            console.log("addLunchBox==", e)
        }
    }
}