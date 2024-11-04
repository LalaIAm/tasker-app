import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const Welcome = () => {
  return (
    <View style={styles.container}>
      <View style={styles.groupContainer}>
        <Image style={styles.groupChild} resizeMode='cover' source={require('../../assets/images/bg.png')} />
        <View style={[styles.groupWrapper, styles.bodyPosition]}>
    <Image style={styles.frameChild} resizeMode='cover' source={require('../../assets/images/welcomebg.png')} />
        </View>
      </View>
      <View style={[styles.logoParent, styles.basePosition]}>
        <View style={styles.logo}>
          <Text style={[styles.taskcy, styles.bodyPosition]}>Taskcy</Text>
        </View>
        <View style={styles.title}>
          <View style={[styles.body, styles.bodyPosition]}>
            <Text style={[styles.createAUnique, styles.createAUniqueTypo]}>Create a unisue emotional story that describes more than words.</Text>
          </View>
          <Text style={[styles.buildingBetterWork, styles.createAUniqueTypo]}>{'Building Better Workplaces'}</Text>
        </View>
        
      </View>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})