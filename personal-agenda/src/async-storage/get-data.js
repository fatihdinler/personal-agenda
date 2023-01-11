import AsyncStorage from '@react-native-async-storage/async-storage'

const getData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key)
        console.log(value)
        if (value != null || value != undefined) {
            return JSON.parse(value)
        }
    }
    catch (error) {
        console.log(error)
    }
}

export default getData