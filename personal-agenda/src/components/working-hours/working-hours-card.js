import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import getDimensions from '../../dimensions/get-dimensions'


const WorkingHoursCard = () => {

  const date = new Date().toUTCString()
  const todaysDate = date.substring(0, 16)
  console.log(todaysDate)


  return (
    <TouchableOpacity style={styles.container}>
      <View>
        <Text>{todaysDate}</Text>
      </View>
      <View>

      </View>
    </TouchableOpacity>
  )
}

export default WorkingHoursCard

const styles = StyleSheet.create({
  container: {
    height: getDimensions.SCREEN_HEIGTH / 4,
    backgroundColor: 'white',
    marginBottom: 15,
    margin: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    borderRadius : 12,
  }
})