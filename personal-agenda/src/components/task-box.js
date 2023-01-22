import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../colors/colors'
import { useNavigation } from '@react-navigation/native'

const TaskBox = ({ title, description }) => {
    
    const navigation = useNavigation()

    const handlePress = () => {
        navigation.navigate('to-do-details', {
            title : title,
            description : description
        })
    }

    return (
        <TouchableOpacity style={styles.container} onPress={handlePress}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
        </TouchableOpacity>
    )
}

export default TaskBox

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.LIGTH_BLUE,
        marginBottom: 15,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        borderRadius: 8,
        padding: 10,
    },
    title: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',

    },
    description: {
        color: 'white',
        fontSize: 17,
        fontWeight: '300',
        marginTop: 10,
    },
})