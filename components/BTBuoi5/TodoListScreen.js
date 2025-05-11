import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Keyboard } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { collection, addDoc, onSnapshot, updateDoc, doc } from 'firebase/firestore';
import { db } from '../../Firebase/FirebaseConfig';

const TodoListScreen = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'todos'), (snapshot) => {
      setTodos(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });
    return unsubscribe;
  }, []);

  const handleAddTodo = async () => {
    if (newTodo.trim() === '') return;
    await addDoc(collection(db, 'todos'), {
      text: newTodo,
      completed: false,
    });
    setNewTodo('');
    Keyboard.dismiss();
  };

  const toggleTodo = async (id, completed) => {
    await updateDoc(doc(db, 'todos', id), {
      completed: !completed,
    });
  };

  const renderItem = ({ item }) => (
    <View style={styles.todoItem}>
      <TouchableOpacity onPress={() => toggleTodo(item.id, item.completed)}>
        <MaterialIcons
          name={item.completed ? 'check-circle' : 'cancel'}
          size={24}
          color={item.completed ? 'green' : 'gray'}
        />
      </TouchableOpacity>
      <Text style={[styles.todoText, item.completed && styles.completedText]}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>TODOs List</Text>
      </View>
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16 }}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="New Todo"
          value={newTodo}
          onChangeText={setNewTodo}
        />
      </View>
      <TouchableOpacity style={styles.addButton} onPress={handleAddTodo}>
        <Text style={styles.addButtonText}>ADD TODO</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{ 
    flex: 1, 
    backgroundColor: '#fff' 
  },
  header:{ 
    backgroundColor: '#8000ff', 
    padding: 16 
  },
  headerText:{ 
    color: '#fff', 
    fontSize: 20, 
    fontWeight: 'bold' 
  },
  todoItem:{ 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 16 
  },
  todoText:{ 
    marginLeft: 12, 
    fontSize: 16 
  },
  completedText:{ 
    textDecorationLine: 'line-through', 
    color: 'gray' 
  },
  inputContainer:{ 
    backgroundColor: '#f2f2f2', 
    paddingHorizontal: 8 
  },
  input:{ 
    height: 40, 
    fontSize: 16 
  },
  addButton:{ 
    backgroundColor: '#fff', 
    alignItems: 'center', 
    padding: 12 
  },
  addButtonText:{ 
    color: '#8000ff', 
    fontWeight: 'bold', 
    fontSize: 16, 
    letterSpacing: 1 
  },
});

export default TodoListScreen; 