import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native';
import { Keyboard, Platform } from 'react-native-web';
import { useNavigation } from '@react-navigation/native';
import Tasks from '../components/Tasks.js'
import {completedTask} from '../actions/actionCompleted.js'

export default function Home() {
  const [task, setTask] = useState('')
  const [allTasks, setAllTasks] = useState([])
  const dispatch = useDispatch()

  const handleAddTask = () => {
    // Keyboard.dismiss()
    if (task === null) {
      alert('Necesita escribir algo para agregarlo a la lista')
    } else {
      setAllTasks([...allTasks, task])
      setTask(null)
    }
  }

  const completeTask = (index) => {
    let itemsCopy = [...allTasks]
    let completed = itemsCopy.splice(index, 1); 
    setAllTasks(itemsCopy)
    dispatch(completedTask(completed[0])) 
    alert("Completado con exito")
  }

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>To Do List</Text>
        <TouchableOpacity onPress = {() => navigation.navigate("Completed")} style = {styles.buttonCompleted}>
            <Text style={styles.textCompleted}>Completed</Text>
        </TouchableOpacity>
        
        <ScrollView>
          <View style={styles.items}>
            {
              allTasks.map((e, index) => {
                return (
                  <TouchableOpacity key={index} onPress = {() => completeTask(index)}>
                    <Tasks text={e}/>
                  </TouchableOpacity>
                )
              })
            }
          </View>
        </ScrollView>
      </View>

      <KeyboardAvoidingView behavior={Platform.OS === "android" ? 'height' : 'padding'} style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder="Escribir tarea a realizar" value = {task} onChangeText = {(text => setTask(text))}/>

        <TouchableOpacity onPress = {() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Image style={{width: '100%', height: '100%'}} source={{
              uri: 'https://www.pngmart.com/files/21/Green-Add-Button-PNG-Picture.png'
            }}/>
          </View>
        </TouchableOpacity>

      </KeyboardAvoidingView>

    </View>
  );
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

  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    alignSelf: "center",
  },

  items: {
    marginTop: 30
  },

  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 250,
    backgroundColor: "#fff",
    borderRadius: 60,
    borderColor: 'black',
    borderWidth: 1,
  },

  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
    borderColor: 'black',
    borderWidth: 1,
  },

  buttonCompleted: {
    backgroundColor: "salmon", 
    padding: 10, 
    marginTop: 15, 
    // alignSelf: "center",
    borderRadius: 10,
    // alignItems: "flex-start",
    width: "30%",
  },

  textCompleted: {
      fontSize: 14,
      textAlign: "center",
      color: "black",
      fontWeight: "bold"
  }
});
