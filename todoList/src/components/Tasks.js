import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'

const Task = (props) => {

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}>
                <Image style={{width: '100%', height: '100%'}} source={{
                    uri: 'https://images.vexels.com/media/users/3/135933/isolated/preview/19ac9c9b9ff7376fc86b45fee366a1a2-icono-de-lista-de-verificacion-de-archivos.png'
                }}/>
                </View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>

            <View style={styles.circle}>
                <TouchableOpacity></TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 24,
        height: 35,
        // backgroundColor: "#55BCF6",
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText: {
        maxWidth: '80%',
    },
    circle: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5,
    }
})

export default Task;