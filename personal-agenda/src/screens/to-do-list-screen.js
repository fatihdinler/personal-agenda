import { StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../colors/color'
import TodoModal from '../components/modal/to-do-modal'

const TodoList = ({ list }) => {

    const [showList, setShowList] = useState(false);

    const completedCount = list.todos.filter(todo => todo.completed).length;
    const remainingCount = list.todos.length - completedCount;

    const toggleListModal = () => {
        setShowList(!showList);
    }


    return (
        <View>
            <Modal animationType='fade' visible={showList} onRequestClose={() => toggleListModal()}>
                <View style={{flex : 1}}>
                   <TodoModal 
                    closeModal={toggleListModal}
                    list={list}
                   />
                </View>
            </Modal>
            <TouchableOpacity
                style={[styles.listContainer, { backgroundColor: list.color }]}
                onPress={() => toggleListModal()}>
                <Text style={styles.listTitle} numberOfLines={1}>{list.name}</Text>
                <View>
                    <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                        <Text style={styles.count}>{remainingCount}</Text>
                        <Text style={styles.subtitle}>Remaining</Text>
                    </View>
                    <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                        <Text style={styles.count}>{completedCount}</Text>
                        <Text style={styles.subtitle}>Completed</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>

    )
}

export default TodoList

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