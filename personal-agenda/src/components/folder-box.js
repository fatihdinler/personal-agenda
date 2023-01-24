import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const FolderBox = ({ name, color, todos, onLongPressEvent }) => {

    const navigation = useNavigation()

    const handlePress = () => {
        navigation.navigate('folder-details-screen', {
            name : name,
            color : color,
            todos : todos
        })
    }   

    const handleLongPress = () => {
        Alert.alert(
            'Caution !',
            'Are you sure about to delete this to do ?',
            [
                {
                    text: 'Yes',
                    onPress: () => onLongPressEvent()
                },
                {
                    text: 'Cancel',
                    onPress: () => null
                }
            ]
        )
    }

    return (
        <TouchableOpacity
            style={[styles.listContainer, { backgroundColor: color }]}
            onLongPress={handleLongPress}
            onPress={handlePress}
        >
            <Text style={styles.listTitle} numberOfLines={1}>{name}</Text>
            <View>
                <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                    <Text style={styles.count}>0</Text>
                    <Text style={styles.subtitle}>Remaining</Text>
                </View>
                <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                    <Text style={styles.count}>0</Text>
                    <Text style={styles.subtitle}>Completed</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default FolderBox

const styles = StyleSheet.create({
    listContainer: {
        paddingVertical: 32,
        paddingHorizontal: 16,
        borderRadius: 6,
        marginHorizontal: 12,
        alignItems: 'center',
        width: 200,
        height: 250,
    },
    listTitle: {
        fontSize: 24,
        fontWeight: '700',
        color: 'white',
        marginBottom: 18,
    },
    count: {
        fontSize: 48,
        fontWeight: '200',
        color: 'white',

    },
    subtitle: {
        fontSize: 12,
        fontWeight: '700',
        color: 'white',
        marginLeft: 5,
    }
})