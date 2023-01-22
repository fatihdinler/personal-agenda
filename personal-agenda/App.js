import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import ToDoScreen from './src/screens/stack/to-do-screen'
import ToDoDetails from './src/screens/stack/to-do-details'
import colors from './src/colors/colors'
import getTime from './src/helper/get-time'
import { Provider } from 'react-redux'
import { store } from './src/redux/store'

const App = () => {

  const Stack = createNativeStackNavigator()
  let toolbarMessage = getTime()

  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen
            name='to-do-screen'
            component={ToDoScreen}
            options={{
              headerTitleAlign: 'left',
              headerTitle: '',
              headerStyle: {
                backgroundColor: colors.BLUE
              },
              headerLeft: () => {
                return (
                  <View>
                    <Text style={{ fontWeight: '300', fontSize: 23, color: 'white' }}>
                      {toolbarMessage} Ayşe !
                    </Text>
                  </View>
                )
              },
              headerRight: () => {
                return (
                  <View>
                    <MaterialCommunityIcons name="flower" size={27} color='white' />
                  </View>
                )
              }
            }}
          />
          <Stack.Screen
            name='to-do-details'
            component={ToDoDetails}
            options={{
              headerStyle : {
                backgroundColor : colors.BLUE,
              },
              headerTitle : () => <Text style={{color : 'white', fontWeight : '300', fontSize : 23}}>List of details</Text>,
                            
            }}
          />  
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({

})