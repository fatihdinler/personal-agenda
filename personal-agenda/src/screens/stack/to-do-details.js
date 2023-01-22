import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ToDoDetails = ({ route }) => {

    const {title, description} = route.params

    return (
        <View>
            <Text>{title}</Text>
            <Text>{description}</Text>
        </View>
    )
}

export default ToDoDetails

const styles = StyleSheet.create({})