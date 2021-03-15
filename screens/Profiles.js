import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Profiles = ({navigation}) =>{
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Image style={styles.imgtop} source={require('../assets/halfCircle.png')} />
      </View>
      <View style={styles.textarea}>
        <Text style={styles.txt}>Please </Text>
        <Text style={styles.txt}>Select Profile.</Text>
      </View>
      <View style={styles.proarea}>
      <View style={styles.imgarea}>
        <View style={styles.img} onStartShouldSetResponder={() => navigation.navigate('Home')}><Image  source={require('../assets/boy.png')} style={{height: 100, width: 100,}} /></View>
        <View style={styles.img} onStartShouldSetResponder={() => navigation.navigate('Homef')}><Image  source={require('../assets/woman.png')} style={{height: 100, width: 100}} /></View>
      </View>
      </View>
      <View style={styles.imgtextarea}>
        <View style={styles.imgtxt} ><Text style={{fontSize: 20, fontWeight :'bold'}}>K.Adatiya</Text>
                                    <Text style={{fontSize: 20, fontWeight :'bold'}}>Shrinivasan</Text>
                                    <Text></Text>
                                    <Text style={{fontSize: 12, fontWeight: 'bold'}}>Class : XII [Morning]</Text>
        </View>
        <View style={styles.imgtxt}><Text style={{fontSize: 20, fontWeight :'bold'}}>Anushka</Text>
                                    <Text style={{fontSize: 20, fontWeight :'bold'}}>Shrinivasan</Text>
                                    <Text></Text>
                                    <Text style={{fontSize: 12, fontWeight: 'bold'}}>Class IX [Evening]</Text>
        </View>
      </View>
      
          
      <StatusBar style="auto" />
    </View>
  );
}

export default Profiles

const styles = StyleSheet.create({
  container: {
    padding: 40,
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  imgtop: {
    marginTop: 20,
    height: 74,
    width: 60,
  },
  textarea:{
    paddingTop: 90,
    
  },
  txt:{
    fontSize: 30,
    fontWeight: 'bold',
  },
  imgarea:{
    paddingTop: 40,
    flexDirection : 'row',
    justifyContent: 'space-evenly',
  },
  imgtextarea:{
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  proarea:{
    
  },
  imgtxt: {
    alignContent: 'center',
  },
  img:{
    padding: 20,
    borderWidth: 2,
    borderRadius: 70,
    borderColor: 'gold',
  }
});
