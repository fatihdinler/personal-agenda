import AsyncStorage from "@react-native-async-storage/async-storage"

export default async function saveData (param) {
    try {
        const jsonValue = JSON.stringify(param)
        await AsyncStorage.setItem('user', jsonValue)
    }
    catch(e) {
        console.log('Failed to save data...')
        console.log(e)
    }
}   