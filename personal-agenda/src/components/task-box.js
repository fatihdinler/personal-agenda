import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import colors from '../colors/colors'
import { useNavigation } from '@react-navigation/native'
import getDimensions from '../dimensions/get-dimensions'

const TaskBox = ({ title, description, dateTime, onLongPressEvent}) => {

    const navigation = useNavigation()

    const handlePress = () => {
        navigation.navigate('to-do-details', {
            title: title,
            description: description,
            dateTime : dateTime,
        })
    }

    const handleLongPress = () => {
        Alert.alert(
            'Caution !',
            'Are you sure about to delete this to do ?',
            [
                {
                    text : 'Yes',
                    onPress : () => onLongPressEvent()
                },
                {
                    text : 'Cancel',
                    onPress : () => null
                }
            ]
            )
    }

    return (
        <TouchableOpacity style={styles.container} onPress={handlePress} onLongPress={handleLongPress}>
            <Text style={styles.title} numberOfLines={1}>
                {title}
            </Text>
            <Text style={styles.description} numberOfLines={2} ellipsizeMode='tail'>
                {description}
            </Text>
        </TouchableOpacity>
    )
}

export default TaskBox

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.WHITE,
        marginBottom: 15,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        borderRadius: 8,
        padding: 10,
        height: getDimensions.height / 7,
        paddingLeft : 30,
        paddingRight : 10,
        shadowColor: "#000",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        
        elevation: 4,
    },
    title: {
        color: 'black',
        fontSize: 25,


    },
    description: {
        color: 'black',
        fontSize: 17,
        fontWeight: '200',
        marginTop: 10,
    },
})