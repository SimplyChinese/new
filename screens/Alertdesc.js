import { ScrollView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, SafeAreaView, Dimensions,TouchableOpacity, RefreshControl } from 'react-native';
import AlertImage from '../assets/alertscreen.jpg';


const {height, width} = Dimensions.get('window');

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const Alertdesc = ({navigation}) =>{

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);


  return (
    <SafeAreaView style={styles.container}>
        
        <View style={styles.headerpart}>
          <View onStartShouldSetResponder={() => navigation.navigate('Alertscreen') } style={{marginTop: -15, marginBottom:15}}><Image source={require('../assets/arrow.png')} style={{height: 20, width: 20}} /></View>
          <View>
            <Text style={{color: '#ffffff', fontWeight: 'bold', fontSize: 30}}>Notifications</Text>
          </View>
        </View>
        
        

          <View style ={{flex: 9}}>
          <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView} 
            refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
          >
          <View style={{flexDirection: 'row', justifyContent: 'center', marginHorizontal: 10}}>
              <View style={{flexDirection: 'row' , justifyContent: 'center' , flexWrap: 'wrap' , marginTop: 10, marginBottom:5 , paddingHorizontal: 7 , paddingVertical: 3, }}>
                <Text style={{fontWeight: 'bold', fontSize: 23, color: '#000'}}>Heading of Alert Desc</Text>
              </View>
          </View>
          <View style={{height : 300, width: width, padding: 10, marginBottom: 5}} >
                <Image source={AlertImage} style={{height : '100%', width: '100%', borderRadius: 10}} />               
            </View>
          
        <View style={styles.botele} >
            <View >
                <Text style={{fontSize: 16, lineHeight: 24}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                <Text style={{fontSize: 16, lineHeight: 24}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                <Text style={{fontSize: 16, lineHeight: 24}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                <Text style={{fontSize: 16, lineHeight: 24}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                <Text style={{fontSize: 16, lineHeight: 24}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                <Text style={{fontSize: 16, lineHeight: 24}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                <Text style={{fontSize: 16, lineHeight: 24}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>

            </View>         
        </View>
      
                  
          

        <View style={{flexDirection: 'row',}}>
          <View style={{flexDirection: 'row', marginHorizontal: 10, borderWidth: 1, width: '11%', padding: 10, backgroundColor: '#510487', borderRadius: 50, justifyContent: 'center'}}>
              <Image source={require('../assets/chainlink.png')} style={{height: 20 ,width:20}} />
          </View>
          <View style={{justifyContent: 'center'}}><Text style={{fontWeight: 'bold'}}>Click Here</Text></View>
        </View>

            


          </ScrollView> 
          </View>
        
          <StatusBar style="auto" /> 
      </SafeAreaView>
  );
}
export default Alertdesc;

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
