import React from 'react'
import {Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ProjectsNewProjectHeader = ({toggleProjectListState, toggleNewProjectState}) => {
console.log(toggleProjectListState);

  return(
    <View>
    <View style={styles.projectsNewProjectsWrapper}>
      <TouchableOpacity style={styles.newProjectButton} onPress={toggleProjectListState}>
        <Text style={styles.buttonText}>New Project</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.projectsButton}
      onPress={toggleNewProjectState}>
        <Text style={styles.buttonText}>Projects</Text>
      </TouchableOpacity>
    </View>

    </View>

  )
}

const styles = StyleSheet.create({

  newProjectButton: {
    backgroundColor: 'darkgray',
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  projectsButton: {
    backgroundColor: 'darkgray',
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  projectsNewProjectsWrapper: {
    marginTop: 59,
    flexDirection:'row-reverse',
    height: 40,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold'
  }

});

export default ProjectsNewProjectHeader
