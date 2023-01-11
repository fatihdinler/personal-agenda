import * as SecureStore from 'expo-secure-store';

export async function getValueFor(key) {
    let result = await SecureStore.getItemAsync(key);
    if (result) {
        return result
    } else {
      console.log('error')
    }
  }