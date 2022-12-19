import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WorkingHoursCard from './working-hours-card'

const WorkingHoursSlice = () => {
  return (
    <View>
      <WorkingHoursCard />
      <WorkingHoursCard />
      <WorkingHoursCard />
    </View>
  )
}

export default WorkingHoursSlice

const styles = StyleSheet.create({})