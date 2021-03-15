import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, Linking } from 'react-native';

const Exmpage = ({navigation}) =>{
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>
      <View style={styles.topmost}>
        <View style={{flex: 1 ,justifyContent: 'flex-start', alignContent: 'center'}}><Image source={require('../assets/menuu.png')} style={{ width: 40, height: 40 }} /></View>
        <View style={{flex: 0 ,justifyContent: 'flex-end'}} ><Image source={require('../assets/reload.png')} style={{ width: 40, height: 40, marginRight: 10 }} /></View>
        <View style={{flex: 0, justifyContent: 'flex-end'}} ><Image source={require('../assets/bell.png')} style={{ width: 40, height: 40, justifyContent:'flex-end', }} /></View>
      </View>
      <View style={styles.contents}>
          <View style={styles.exmcont}>
              <View style={styles.belltext}>
                  <Image source={require('../assets/belle.png')} style={{ width: 40, height: 40 }} />
                  <View style={{marginLeft: 20,}}><Text style={{fontWeight: 'bold'}}> JEE examination form available | </Text><Text style={{fontWeight: 'bold'}}> Apply online now.</Text></View>
              </View>
              <View style={{flex: 1, flexWrap:'wrap' ,marginTop: 10, borderRadius: 10}} onStartShouldSetResponder={() => Linking.openURL('https://forms.gle/jBX941WU4qHZuHAB9')}>
                  <Image source={require('../assets/exmbtn.png')} style={{width: 370, height: 250, borderRadius: 10}} />
              </View>
              <View style={{marginTop:10, padding: 5}}>
                  <Text style={{fontWeight: 'bold', color: '#9da3a8'}}>The National Testing Agency, NTA has extended the JEE Main registration last date for all the candidate till January 23, 2021. Read more to know about it.</Text>
              </View>
          </View>
          <View style={{width: 70, paddingTop: 15, paddingBottom: 15, borderRadius: 20}}>
            <Text style={{backgroundColor: '#fcba03', fontWeight: 'bold', padding: 10}}>12 JAN</Text>
          </View>
            <View style={styles.botele} onStartShouldSetResponder={() => navigation.navigate('Exmpage')}>
                <View style={{flexDirection: 'row', }}>
                    <Image source={require('../assets/test.png')} style={{ width: 40, height: 40 }} />
                    <View><Text style={{color: '#000', fontSize: 20, fontWeight: 'bold'}} > JEE Practice Test</Text>
                            <Text style={{fontSize: 12, fontWeight: 'bold'}}>  Physics | Chemistry | Biology</Text>
                    </View>
                    
                </View>
                <View style={{paddingTop: 10}} >
                    <Text style={{color: '#9da3a8', fontWeight: 'bold', fontSize: 13}}>Joint Entrance Examination - Main, formly All India Engineering Entrance Examination, ia an all India examination conducted by the national Testing Agency.</Text>
                </View>
                <View>
                  <View style={{flexDirection: 'row', paddingTop: 10}} >
                      <View><Image source={require('../assets/alarmclock.png')} style={{width: 30, height: 30}} /></View>
                      <View style={{justifyContent: 'center', paddingLeft: 15}}><Text style={{fontWeight: 'bold', color: '#9da3a8'}}>10 Minutes | 10 Marks </Text></View>
                      <View style={{borderRadius:15, backgroundColor: '#510487', padding: 10, marginLeft: 50}} ><Text style={{color: '#fff', fontWeight: 'bold'}} onPress={() => Linking.openURL('https://nta.ac.in/quiz')}>START NOW</Text></View>
                  </View>
                </View>
            </View>
      </View>
      
      
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}
export default Exmpage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  
  },
  topmost:{
    backgroundColor: '#510487',
    flexDirection: 'row',
    padding: 20,
  },
  contents:{
      backgroundColor: '#f9f0fc',
      padding: 10,
  },
  exmcont:{
      backgroundColor: '#fff',
      padding: 10,
      borderRadius: 10.
  },
  belltext:{
      flexDirection: 'row',
  },
  botele: {
    backgroundColor: '#fff',
    borderWidth: 4,
    borderColor: '#fff',
    borderRadius: 10,
    padding: 20,
  },
});
