import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WorkingHoursSlice from '../../components/working-hours/working-hours-slice'

const PerformanceScreen = () => {
  return (
    <ScrollView>
      <WorkingHoursSlice />
    </ScrollView>
  )
}

export default PerformanceScreen

const styles = StyleSheet.create({})