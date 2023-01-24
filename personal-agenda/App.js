import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './src/redux/store'
import FolderScreen from './src/screens/folder-screen'
import FolderDetailsScreen from './src/screens/folder-details-screen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const App = () => {

  const Stack = createNativeStackNavigator()

  return (  
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen
            name='foler-screen'
            component={FolderScreen}
            options={{
              headerShown : false,
            }}
          />
          <Stack.Screen
            name='folder-details-screen'
            component={FolderDetailsScreen}
            options={{
              headerShown : false,
            }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})