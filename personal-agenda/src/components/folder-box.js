import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const FolderBox = ({ name, color, todos }) => {
    return (
        <TouchableOpacity
            style={[styles.listContainer, { backgroundColor: color }]}
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
        color: colors.white,
        marginBottom: 18,
    },
    count: {
        fontSize: 48,
        fontWeight: '200',
        color: colors.white,

    },
    subtitle: {
        fontSize: 12,
        fontWeight: '700',
        color: colors.white,
        marginLeft: 5,
    }
})