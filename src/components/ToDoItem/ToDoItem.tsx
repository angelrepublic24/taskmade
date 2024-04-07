import React, {useState, useEffect, useRef} from "react";
import { View, TextInput, KeyboardAvoidingView, Platform } from "react-native";
import Checkbox from '../Checkbox';

interface ToDoItemProps {
    todo: {
        id: string,
        content: string,
        isCompleted: boolean,
    },
    onSubmit: () => void,
}

const ToDoItem = ({todo, onSubmit}: ToDoItemProps) => {
    
    const [isChecked, setIsChecked] = useState(false);
    const [content, setContent] = useState('');

    const input = useRef(null)

    useEffect (() => {
        if(!todo) {return}
        setIsChecked(todo.isCompleted)
        setContent(todo.content)
    },[todo])

    useEffect (() => {
        if(input.current){
            setTimeout(() => {
                input?.current?.focus()
            }, 0)
        }  
    },[input])


    const onKeyPress = ({nativeEvent}) => {
        if(nativeEvent.key === 'Backspace' && content === '' ) {
            console.warn('Delete item')
        }
    }

  return (
    <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 3 }}>
        {/* Checkbox */}
      <Checkbox
        isChecked={isChecked}
        onPress={() => {
            setIsChecked(!isChecked);
        }}
      />
      {/* Text Input */}
      <TextInput
        ref={input}
        value={content}
        blurOnSubmit={true}
        onSubmitEditing={onSubmit}
        onKeyPress={onKeyPress}
        onChangeText={setContent}
        multiline={true}
        style={{
          flex: 1,
          fontSize: 18,
          color: "black",
          marginLeft: 12,
        }}
      />
    </View>  
  );
};

export default ToDoItem;
