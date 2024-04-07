import { StyleSheet, TextInput, View, Text, FlatList, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import React, {useState} from 'react';
import ToDoItem from '../../components/ToDoItem';

let id = '4'

export default function TodoListScreen() {
  const [title, setTitle] = useState('')

  const [todos, setTodos] = useState([{
    id: '1',
    content: 'Buy milk',
    isCompleted: true
  },{
    id: '2',
    content: 'Buy cereal',
    isCompleted: false
  }, {
    id: '3',
    content: 'Pour milk',
    isCompleted: false
  }
])

const createNewItem = (atIndex: number) => {
  let newTodos = [...todos];
  console.warn(newTodos)
  newTodos.splice(atIndex, 0, {
    id: id,
    content: '',
    isCompleted: false
  })

  setTodos(newTodos);
}

  return (
    <View style={styles.container}>
      <ScrollView>
    <KeyboardAvoidingView 
    enabled={true}
    behavior={'position'}
    keyboardVerticalOffset={-500}
    style={{flex: 1}}>
      <TextInput 
      style={styles.title} 
      placeholder={'Title'}
      onChangeText={setTitle} 
      />
      <FlatList 
        data={todos}
        renderItem={({item, index}) => (
          <ToDoItem  
            todo={item} 
            onSubmit={() => createNewItem(index + 1)}
          />
        )}
        style={{width: '100%'}}
      />
    </KeyboardAvoidingView>
    </ScrollView>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    width: '100%',
    color: 'black',
    marginBottom: 12
  },
});
