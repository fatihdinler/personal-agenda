import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ToDoItem from './to-do-item'

const ToDoSlice = ({data}) => {
  
  return (
    <ScrollView>
      {
        data.map(item => {
          return(
            <ToDoItem 
              id={item.id}
              content={item.text}
              isCompleted={item.isDone}
            />
          )
        })
      }
    </ScrollView>
  )
}

export default ToDoSlice

const styles = StyleSheet.create({})