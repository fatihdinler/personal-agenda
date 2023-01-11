import AsyncStorage from '@react-native-async-storage/async-storage'

const saveData = async (key, param) => {
    try {
        const jsonValue = JSON.stringify(param)
        await AsyncStorage.setItem(key, jsonValue)
    }
    catch (error) {
        console.log(error)
    }
}

export default saveData