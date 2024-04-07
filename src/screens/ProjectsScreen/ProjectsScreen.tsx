import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useState } from "react";
import ProjectItem from "../../components/ProjectItem";

const ProjectsScreen = () => {

    const [project, setProject] = useState([
    {
        id: '1',
        title: 'Project 1',
        createdAt: '2d'
    },
    {
        id: '2',
        title: 'Project 2',
        createdAt: '2d'
    },
    {
        id: '3',
        title: 'Project 3',
        createdAt: '2d'
    }]);

  return (
    <View style={styles.container}>
        <FlatList
            data={project}
            renderItem={({item}) => <ProjectItem project={item} />}
            style={{width: '100%',}}
        />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    justifyContent: "center",
    alignContent: "center",
  },
  
});
export default ProjectsScreen;
