import AsyncStorage from "@react-native-async-storage/async-storage"

export default async function readData () {
    try {
        const value = await AsyncStorage.getItem('user')
        if(value) {
            return JSON.parse(value)
        }
    }
    catch(e) {
        console.log('Failed to read data...')
        console.log(e)
    }
}   