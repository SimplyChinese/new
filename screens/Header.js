import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default class Header extends React.Component {
  render(){
    return(
      <View style={styles.Header}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>Header</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Header: {
    width: '100%',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#510487',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
