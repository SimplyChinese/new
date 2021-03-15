import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Profiles = ({navigation}) =>{
  return (
    <View onStartShouldSetResponder={() => navigation.navigate('Onboardscreen')} style={styles.container}>
      <Text style={{color: '#fff', fontWeight:'bold', fontSize: 50 }}>Logout</Text>
    </View>
  );
}

export default Profiles

const styles = StyleSheet.create({
  container: {
    padding: 40,
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#510487',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
