import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import colors from '../../colors/get-colors'
import AsyncStorage from '@react-native-async-storage/async-storage'


const ToDoItem = ({ content, isCompleted, id }) => {

    const [isDone, setIsDone] = useState(false)
    const [isDoneFromData, setIsDoneFromData] = useState(false)

    const handleTouch = () => {
        setIsDone(!isDone)
        get()
    }

    const get = async () => {
        const result = await AsyncStorage.getItem('todos')
        const allValues = JSON.parse(result)
        const x = allValues.filter(item => {
            return item.id == id ? item : null
        })
        x[0].isDone = !isDone
        console.log(x[0].isDone)
        setIsDoneFromData(x[0].isDone)
    }

    return (
        <TouchableOpacity style={[styles.container, { backgroundColor: isDoneFromData ? colors.GREEN : '#fff' }]} onPress={handleTouch}>
            <View style={[styles.isDoneView, { backgroundColor: isDoneFromData ? '#fff' : colors.GREEN }]}></View>
            <View style={styles.toDoText}>
                <Text style={{ color: isDoneFromData ? '#fff' : '#000' }}>{content}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ToDoItem

const styles = StyleSheet.create({
    container: {
        borderWidth: 0.3,
        borderColor: colors.GREEN,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 10,
        margin: 10,
        borderRadius: 8,

    },
    isDoneView: {
        backgroundColor: colors.GREEN,
        width: 15,
        height: 15,
        marginLeft: 10,
        borderRadius: 15 / 2
    },
    toDoText: {
        margin: 15,
        marginRight: 40,
    }

})