import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ToDoItem from './to-do-item'

const ToDoSlice = () => {
  return (
    <ScrollView>
      <ToDoItem content="Do the things"/>
      <ToDoItem content="Dont do the things"/>
      <ToDoItem content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
      <ToDoItem content="asdasd"/>
      <ToDoItem content="adsasd"/>
    </ScrollView>
  )
}

export default ToDoSlice

const styles = StyleSheet.create({})