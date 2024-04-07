import { View, Text, Pressable } from 'react-native'
import React from 'react'
import styles from './styles'
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface ProjectItemProps {
    project: {
        id: string,
        title: string,
        createdAt: string,
    }
}

const ProjectItem = ({project}: ProjectItemProps) => {

    const onPress = () => {
        console.warn(`Open project ${project.title}`)
    }
  return (
    <Pressable onPress={onPress} style={styles.root}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name="file-outline" size={24} color="black" />
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.title}>{project.title}</Text>
          <Text style={styles.time}>{project.createdAt}</Text>
        </View>
      </Pressable>
  )
}

export default ProjectItem