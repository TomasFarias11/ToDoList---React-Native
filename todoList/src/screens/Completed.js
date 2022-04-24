import React from "react";
import {useSelector, useDispatch} from "react-redux"
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native';
import Tasks from '../components/Tasks.js'
import {deleteCompletedTask} from '../actions/actionCompleted.js'

export default function Completed () {

    const completed = useSelector((state) => state.completed.completed);
    const dispatch = useDispatch();

    const deleteTask = (index) => {
        dispatch(deleteCompletedTask(index));
        alert("Eliminado con exito")
      }
    
    return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <ScrollView>
          <View style={styles.items}>
            {
              completed.map((e, index) => {
                return (
                  <TouchableOpacity key={index} onPress = {() => deleteTask(index)}>
                    <Tasks text={e}/>
                  </TouchableOpacity>
                )
              })
            }
          </View>
        </ScrollView>
      </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'skyblue',
    },
  
    tasksWrapper: {
      paddingTop: 60,
      paddingHorizontal: 20,
    },

    items: {
      marginTop: 30
    },
  
  });
  