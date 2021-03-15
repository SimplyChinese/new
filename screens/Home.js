import React, {Component} from 'react';
import { render } from 'react-dom';
import { StyleSheet, Button, Text, View, Image, Modal, ScrollView, SafeAreaView, ImageBackground, TouchableOpacity, RefreshControl, Share, onRefresh } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Alertdesc from './Alertdesc';
 



const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}
  
const Exambox = ()=> {
  return(
    <View style={styles.botele} >
                <View style={{flexDirection: 'row', }}>
                <View style={{ justifyContent:'center', backgroundColor: '#fff', borderWidth: 1, borderRadius:50, borderColor: '#ffede8', height: 25, width: 25, padding: 20, }}><Image source={require('../assets/exam.png')} style={{ width: 25, height: 25, margin:-10}} /></View>
                    <View><Text style={{color: '#000', fontSize: 17, fontWeight: 'bold'}} > Hitesssh Practice Test</Text>
                            <Text style={{fontSize: 10, fontWeight: 'bold', color:'#000'}}>  Physics | Chemistry | Biology</Text>
                    </View>
                    
                </View>
                <View style={{paddingTop: 10}} >
                    <Text style={{color: '#9da3a8', fontWeight: 'bold', fontSize: 11}} >Joint Entrance Examination - Main, formly All India Engineering Entrance Examination, ia an all India examination conducted by the national Testing Agency.</Text>
                </View>
                
                  <View style={{flex: 1, flexDirection: 'row', paddingVertical: 5, }} >
                      <View style={{flex: 1, flexDirection:'row', alignContent: 'center', justifyContent: 'center'}}>
                        <View><Image source={require('../assets/alarmclock.png')} style={{width: 22, height: 22}} /></View>
                        <View style={{justifyContent: 'center', paddingLeft: 15}}><Text style={{fontWeight: 'bold', color: '#9da3a8', fontSize: 11}}>10 Minutes | 10 Marks </Text></View>
                      </View>
                      <View style={styles.startnow} ><Text style={styles.startnowtext} onPress={() => Linking.openURL('https://nta.ac.in/quiz')}>START NOW</Text></View>
                  </View>
                
            </View>
  );
}


class DummyTxt extends Component {
  render(){
    return(
      <View><Text style={{fontWeight: 'bold', fontSize: 14}} >Joint Entrance Examination - Main, formly All India Engineering Entrance Examination, ia an all India examination conducted by the national Testing Agency.</Text></View>
    );
  }
}

const Noti = ({navigation})=> {
  
  
    return(
      
      <TouchableOpacity onPress={()=>  {Alertdesc} }>
        <View style={styles.botele} >
          <View style={{flexDirection: 'row'}}>
            <View style={{ justifyContent:'center', padding: 20, }}><Image source={require('../assets/bellll.png')} style={{ width: 34, height: 34, margin:-10}} /></View>
            <View style={{justifyContent:'center'}}><Text style={{color: '#000', fontSize: 17, fontWeight: 'bold'}} > AlertScreens</Text></View>         
          </View>
          <View style={{paddingTop: 10}} >
            <Text style={{color: '#9da3a8',  fontSize: 12}} numberOfLines={2}>Joint Entrance Examination - Main, formly All India Engineering Entrance Examination, ia an all India examination conducted by the national Testing Agency.</Text>
          </View>
          
        </View>
      </TouchableOpacity>
      
    );
  
}


const Home = ({navigation}) =>{ 
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);


  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'Educology, New way of Learning',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground source={require('../assets/bging.png')} style={styles.image}>
        <View style={styles.topmost}>
        <View onStartShouldSetResponder={() => navigation.openDrawer() } style={{flex: 1, flexDirection:'row',}}><Image source={require('../assets/menuu.png')} style={{ width: 30, height: 30 }}  /></View>
          <View style={{flex: 1, flexDirection:'row', justifyContent:'flex-end' }}>
            <View onStartShouldSetResponder={()=> onRefresh() } style={{marginRight: 20}}><Image source={require('../assets/reload.png')} style={{ width: 30, height: 30, }} /></View>
            <View onStartShouldSetResponder={() => navigation.navigate('Alertscreen')} ><Image source={require('../assets/bell.png')} style={{ width: 30, height: 30, justifyContent:'flex-end', }} /></View>
          </View>
        </View>
        
        <View style={styles.maincontent}>
          <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView} 

              refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
          
          >

            <View style={{marginTop: 20, marginBottom: 5}} >
              <Text style={styles.boldText} >Welcome,</Text>
            </View>
            <View style={{ marginBottom: 40 }} >
              <Text style={styles.nameText} >Mr. K.Adatiya Shrinivasan</Text>
            </View>
        <View style={styles.midele}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
            <TouchableOpacity  onPress={() => alert('Underdevelopment')} ><View style={{ justifyContent:'center', backgroundColor: '#ffede8', borderWidth: 1, borderRadius:50, borderColor: '#ffede8', height: 30, width: 30, padding: 30, }}><Image source={require('../assets/test.png')} style={{ width: 30, height: 30, margin:-10}} /></View></TouchableOpacity>
            <TouchableOpacity onPress={() => alert('Underdevelopment')} ><View style={{ justifyContent:'center', backgroundColor: '#ececfe', borderWidth: 1, borderRadius:50, borderColor: '#ececfe', height: 30, width: 30, padding: 30, }}><Image source={require('../assets/correct.png')} style={{ width: 30, height: 30, margin:-15}} /></View></TouchableOpacity>
            <TouchableOpacity onPress={() => alert('Underdevelopment')} ><View style={{ justifyContent:'center', backgroundColor: '#ececfe', borderWidth: 1, borderRadius:50, borderColor: '#ececfe', height: 30, width: 30, padding: 30, }}><Image source={require('../assets/graphic.png')} style={{ width: 30, height: 30, margin:-15}} /></View></TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
            <View ><Text style={{flex: 1, marginLeft: 20 ,fontWeight: 'bold', }}>Test</Text></View>
            <View ><Text style={{flex: 1, marginLeft: 25 ,fontWeight: 'bold'}}>Self Practice</Text></View>
            <View ><Text style={{flex: 1, marginLeft: 20 ,fontWeight: 'bold'}}>Analysis</Text></View>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
            <TouchableOpacity onPress={() => alert('Underdevelopment')} ><View style={{ justifyContent:'center', backgroundColor: '#ffe9f0', borderWidth: 1, borderRadius:50, borderColor: '#ffe9f0', height: 30, width: 30, padding: 30, }}><Image source={require('../assets/bookmark.png')} style={{ width: 40, height: 40, margin:-19}} /></View></TouchableOpacity>
            <TouchableOpacity onPress={() => alert('Underdevelopment')} ><View style={{ justifyContent:'center', backgroundColor: '#fbebfd', borderWidth: 1, borderRadius:50, borderColor: '#fbebfd', height: 30, width: 30, padding: 30, }}><Image source={require('../assets/feedback.png')} style={{ width: 30, height: 30, margin:-15}} /></View></TouchableOpacity>
            <TouchableOpacity onPress={onShare} ><View  style={{ justifyContent:'center', backgroundColor: '#f1ecff', borderWidth: 1, borderRadius:50, borderColor: '#f1ecff', height: 30, width: 30, padding: 30, }}><Image source={require('../assets/share.png')} style={{ width: 30, height: 30, margin:-15}} /></View></TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
            <View ><Text style={{flex: 1, marginLeft: 5 ,fontWeight: 'bold'}}>Bookmark</Text></View>
            <View ><Text style={{flex: 1, marginLeft: 20 ,fontWeight: 'bold'}}>Feedback</Text></View>
            <View ><Text style={{flex: 1, marginLeft: 20 ,fontWeight: 'bold'}}>Share Us</Text></View>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center', marginHorizontal: 10}}>
              <View style={{flexDirection: 'row' , justifyContent: 'center' , flexWrap: 'wrap' , marginTop: 10, marginBottom:5 , paddingHorizontal: 7 , paddingVertical: 3, borderWidth: 1, borderRadius:10, borderColor:'#fae4c4', backgroundColor: '#fae4c4',}}>
                <Text style={{color: '#000', fontWeight: '400'}}> 12  JAN  2021</Text>
              </View>
          </View>
        
        <Noti />
        <Noti />
        <Noti />
        <Exambox />
        <View style={{flexDirection: 'row', justifyContent: 'center', marginHorizontal: 10}}>
              <View style={{flexDirection: 'row' , justifyContent: 'center' , flexWrap: 'wrap' , marginTop: 10, marginBottom:5 , paddingHorizontal: 7 , paddingVertical: 3, borderWidth: 1, borderRadius:10, borderColor:'#fae4c4', backgroundColor: '#fae4c4',}}>
                <Text style={{color: '#000', fontWeight: '400'}}> 10  JAN  2021</Text>
              </View>
          </View>
        <Noti />
        <Exambox />
        <Exambox />
        <Exambox />
        <Exambox />
        <Noti />
            
        
        </ScrollView>
        </View>
        </ImageBackground>
      </SafeAreaView>
      
    );
    
  
  
}


export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f5fb',
    
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  maincontent:{
    paddingTop: 10,
    paddingLeft : 30,
    paddingRight: 30,
    paddingBottom: 30,
    // paddingTop: 58,
  },
  topmost:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#510487',
    padding : 30,
    paddingTop: 140,
    position: 'relative'
  },
  scrollView:{
    marginBottom: 50,
  },
  boldText: {
    fontWeight: 'bold',
    fontSize : 35,
    color : '#e6c240',
    paddingBottom: 10,
  },
  nameText: {
    fontSize : 25,
    color: '#fff'
  },
  
  midele: {
    borderWidth: 4,
    borderColor: '#fff',
    borderRadius: 20,
    padding: 30,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  mideletxt: {
    color: '#000'
  },
  botele: {
    backgroundColor: '#fff',
    borderWidth: 4,
    borderColor: '#fff',
    borderRadius: 20,
    padding: 20,
    marginVertical: 10,
  },

  startnow:{
    borderRadius:15, 
    backgroundColor: '#510487', 
    paddingHorizontal: 17,
    paddingVertical: 10, 
    marginLeft: 40, 
    justifyContent:'center',
    height: 27, 
  },
  startnowtext: {
    color: '#fff', 
    fontWeight: 'bold', 
    fontSize: 10
  },
  belltext:{
    flexDirection: 'row',
},
  exmcont:{
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10.
},

  image: {
    flex : 1,
    resizeMode: 'stretch',
    justifyContent: 'center',
  }
  
});
