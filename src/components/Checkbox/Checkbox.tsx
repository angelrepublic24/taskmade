import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {View, Pressable} from 'react-native'

interface CheckBoxProps {
    isChecked: boolean,
    onPress: () => void
}

const Checkbox = (props:  CheckBoxProps) => {
   const {onPress, isChecked} = props;
    const name = props.isChecked ? 'checkbox-marked-outline' : 'checkbox-blank-outline';

  return (
    <Pressable onPress={onPress}>
        <MaterialCommunityIcons name={name} size={24} color="black" />
    </Pressable>
  )
}

export default Checkbox