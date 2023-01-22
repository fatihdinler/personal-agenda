import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import ToDoScreen from './src/screens/stack/to-do-screen'
import colors from './src/colors/colors'
import getTime from './src/helper/get-time'

const App = () => {

  const Stack = createNativeStackNavigator()
  let toolbarMessage = getTime()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='to-do-screen'
          component={ToDoScreen}
          options={{
            headerTitleAlign : 'left',
            headerTitle : '',
            headerStyle : {
              backgroundColor : colors.BLUE
            },
            headerLeft : () => {
              return(
                <View>
                  <Text style={{fontWeight : '300', fontSize : 23, color : 'white'}}>
                    {toolbarMessage } Ayşe !
                  </Text>
                </View>
              )
            }
          }}

        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({

})