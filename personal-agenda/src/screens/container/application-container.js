import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Ionicons from '@expo/vector-icons/Ionicons'
import ToDoScreen from '../stacks/to-do-screen'
import PerformanceScreen from '../stacks/performance-screen'
import colors from '../../colors/get-colors'

const ApplicationContainer = () => {

  const Stack = createNativeStackNavigator()
  const Tabs = createBottomTabNavigator()

  const TabsNavigator = () => {
    return (
      <Tabs.Navigator>
        <Tabs.Screen
          name='to-do-screen'
          component={ToDoScreen}
          options={{
            title: 'AVS',
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name='bar-chart-outline' color={color} size={size} />
            ),
          }
          }
        />
        <Tabs.Screen
          name='performance-screen'
          component={PerformanceScreen}
          options={{
            title: 'LDS',
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name='bookmark-outline' color={color} size={size} />
            ),
          }
          }
        />
      </Tabs.Navigator>
    )
  }


  return (
    <Stack.Navigator>
      <Stack.Screen
        name='composition-of-tabs'
        component={TabsNavigator}
        options={{
          headerShown: true,
          headerTitleAlign: 'left',
          headerTitle: '',
          headerStyle: { backgroundColor: colors.BLUE },
          headerLeft: () => {
            return (
              <View style={{ flexDirection: 'row', }}>
                <Text style={{ fontWeight: '300', fontSize: 25, color: 'white' }}>Günaydın </Text>
                <Text style={{ fontWeight: 'bold', fontSize: 25, color: 'white' }}>Fatih</Text>
              </View>
            )
          }, 
          headerRight : () => {
            return null
          }

        }}

      />
    </Stack.Navigator>
  )
}

export default ApplicationContainer

const styles = StyleSheet.create({})