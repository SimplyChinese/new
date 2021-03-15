import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Image , Text, View, Button, TextInput, SafeAreaView, ScrollView , Linking } from 'react-native';
import home from 'react';
  const Login = ({navigation}) =>{
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
        <View style={styles.responsiveBox}>
          <View style={{flexDirection: 'row'}}>
            <Image style={styles.imgtop} source={require('../assets/halfCircle.png')} />
          </View>
          <Text style={styles.texton}>Hey, </Text>
          <Text style={styles.texttw}>Login Now.</Text>
          <Text style={styles.texttwo}>If you are new <Text style={styles.textttwo} onPress={() => Linking.openURL('http://google.com')}>Enquiry Now  </Text></Text>
            <View style={styles.inputarea}>
            
            <TextInput
              style={{ paddingLeft: 10,  borderRadius: 10 , marginBottom: 20, height: 50, backgroundColor: '#fee1b3' ,borderColor: '#fff', borderWidth: 1,  } }
                  placeholder="Login id"     />
            <TextInput
              style={{ paddingLeft: 10 ,borderRadius: 10 ,marginBottom: 20, height: 50, backgroundColor: '#f6f4f3' ,borderColor: '#fff', borderWidth: 1 }}
              placeholder="Password"  secureTextEntry={true}              />
            </View>
            <View onStartShouldSetResponder={() => navigation.navigate('Otplogin')}><Text style={styles.otp} >Login through OTP</Text></View>
            <View onStartShouldSetResponder={() => navigation.navigate('Profiles')} style={styles.logbtn}><Text style={{color: '#fff', fontWeight: 'bold'}}>Login</Text></View>
            <View style={{justifyContent: 'center', marginTop: 50, flexDirection: 'row'}} ><Text>Powered by <Text style={{fontWeight: 'bold', color: '#4d0870'}} >Educology</Text></Text></View>
        </View>
        </ScrollView>
        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fff',
  },
  responsiveBox: {
    // width: ('84.5%'),
    paddingLeft: 50,
    paddingRight: 70,
    borderWidth: 2,
    borderColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'space-around' 
  },
  texton :{
    // flexDirection: 'row',
    // flex: 1,
    marginTop: 80,
    marginBottom: 5,
    color: '#000000',
    fontSize: 27,
    fontWeight: 'bold',
  },

  texttw :{
    // flexDirection: 'row',
    color: '#000000',
    fontSize: 27,
    fontWeight: 'bold',
    marginBottom: 20,

  },
  textttwo:{
    // flexDirection: 'row',
    fontWeight: 'bold',
  },
  texttwo:{
    color: '#000000',
  },
  otp:{ 
    // flexDirection: 'row',
    fontWeight: 'bold'
  },
  imgtop: {
    marginTop: 20,
    height: 74,
    width: 60,
  },
  logbtn:{
    flex: 1,
    flexDirection: 'row',
    
    marginTop: 50,
    height: 50,
    backgroundColor: '#6024a2',
    borderRadius: 10,
    justifyContent: 'center',
    paddingVertical: 15
  },
  inputarea:{
    // flexDirection: 'row',
    marginTop: 50,
  }
});
