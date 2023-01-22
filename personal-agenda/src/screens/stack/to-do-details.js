import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'

const ToDoDetails = ({ route }) => {

    const { title, description, dateTime } = route.params

    return (
        <ScrollView>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.divider}></View>
            <View>
                <Text style={styles.description}>{description}</Text>
            </View>
        </ScrollView>
    )
}

export default ToDoDetails

const styles = StyleSheet.create({
    titleContainer: {
        alignSelf: 'center',
        marginTop: 15,
    },
    title: {
        fontSize: 50,
        fontWeight: '300',
    },
    divider: {
        borderWidth: 0.5,
        marginLeft: 20,
        marginRight: 20,

    },
    description: {
        marginLeft : 20,
        marginRight : 20,
        marginTop : 40,
        fontSize: 25,
        fontWeight: '300',
    },
})

{/* <Text>{title}</Text>
            <Text>{description}</Text>
            <Text>{dateTime}</Text> */}