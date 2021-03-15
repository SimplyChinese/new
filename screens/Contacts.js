import { ScrollView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, SafeAreaView, Dimensions,TouchableOpacity } from 'react-native';
import Header from './Header';
import AlertImage from '../assets/alertscreen.jpg';


const {height, width} = Dimensions.get('window');

const Contacts = ({navigation}) =>{
  return (
    <SafeAreaView style={styles.container}>
        
        <View style={styles.headerpart}>
          <View onStartShouldSetResponder={() => navigation.navigate('Homef') } style={{marginTop: -15, marginBottom:15}}><Image source={require('../assets/arrow.png')} style={{height: 20, width: 20}} /></View>
          <View>
            <Text style={{color: '#ffffff', fontWeight: 'bold', fontSize: 30}}>Contacts Us</Text>
          </View>
        </View>

        <View style ={{flex: 9}}>
          <ScrollView>
              <View>
                  <View style={{ flexDirection: 'row', justifyContent: 'center', height: 400, width: width, paddingLeft: 30, paddingRight: 30, paddingTop: 10, paddingBottom: 30,  marginTop: -30 , marginLeft: -15}}>
                      <Image source={require('../assets/contact.png')} style={{height: '80%', width: '80%' }} />
                  </View>
                  <View>
                  <View style={{marginHorizontal: 30, }}>
                      <View style={{flexDirection: 'row', marginTop: -60 }}>
                          <View ><Image source={require('../assets/pin.png')} style={{height: 20, width: 20}} /></View>
                          <View style={{marginHorizontal: 10}}><Text style={{fontWeight: 'bold', color: '#000', fontSize: 17}}> 151 New Park Ave, Hartford, CT 06106 United States</Text></View>
                      </View>
                      <View style={{flexDirection: 'row', marginVertical: 10 }}>
                          <View ><Image source={require('../assets/call.png')} style={{height: 20, width: 20}} /></View>
                          <View style={{marginHorizontal: 10}}><Text style={{fontWeight: 'bold', color: '#000', fontSize: 17}}>+1 (203) 302-9545</Text></View>
                      </View>
                      <View style={{flexDirection: 'row', marginVertical: 10}}>
                          <View ><Image source={require('../assets/email.png')} style={{height: 20, width: 20}} /></View>
                          <View style={{marginHorizontal: 10}}><Text style={{fontWeight: 'bold', color: '#000' , fontSize: 17}}> contactus@inveritasoft.com</Text></View>
                      </View>
                      <View style={{flexDirection: 'row', marginVertical: 10}}>
                          <View ><Image source={require('../assets/global.png')} style={{height: 20, width: 20}} /></View>
                          <View style={{marginHorizontal: 10}}><Text style={{fontWeight: 'bold', color: '#000' , fontSize: 17}}> www.educology.in</Text></View>
                      </View>
                  </View>
                  <View style={{marginHorizontal: 30, marginTop: '35%'}}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 50}}>
                            <View><Image source={require('../assets/facebookk.png')} style={{height: 40, width: 40}} /></View>
                            <View><Image source={require('../assets/whatsappp.png')} style={{height: 40, width: 40}} /></View>
                            <View><Image source={require('../assets/instagramm.png')} style={{height: 40, width: 40}} /></View>
                            <View><Image source={require('../assets/youtubee.png')} style={{height: 40, width: 40}} /></View>

                        </View>
                  </View>
                  </View>
              </View>
          </ScrollView>
        </View>
        
          <StatusBar style="auto" /> 
      </SafeAreaView>
  );
}
export default Contacts;

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      
      headerpart:{
          flex: 1,
          flexDirection: 'column',
          backgroundColor: '#510487',
          justifyContent: 'flex-start',
          height: 300,
          paddingTop: 70,
          position: 'relative',
          paddingHorizontal: 20,
      },
      scrollView:{
        // position: 'relative'
      },
      botele: {
        
        // padding: 10,
        
        marginHorizontal: 10,
        marginBottom: 20,
        flexDirection: 'row'
      },
 
  
});
