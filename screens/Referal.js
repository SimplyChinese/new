import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image,  Share, RefreshControl } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const Referal = ({navigation}) =>{

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
          url: 'https//www.hiteshpatre.com',
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
    <View style={styles.container}>
        <View style={styles.headerpart}>
            <View style={styles.topmost}>
                <View onStartShouldSetResponder={() => navigation.openDrawer()} ><Image source={require('../assets/menuu.png')} style={{ width: 30, height: 30 }} /></View>
                <View style={{flexDirection: 'row' }}>
                    <View onStartShouldSetResponder={()=> onRefresh()} style={{paddingHorizontal: 5}}><Image source={require('../assets/reload.png')} style={{ width: 30, height: 30, }} /></View>
                    <View onStartShouldSetResponder={()=> navigation.navigate('Alertscreen')} style={{paddingHorizontal: 5}}><Image source={require('../assets/bell.png')} style={{ width: 30, height: 30, }} /></View>
                    
                </View>
            </View>
        </View>
        
          <View>
          <ScrollView   
          refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        >
          <View style={styles.referalpart}>
            <View style={styles.img}>
                <Image source={require('../assets/referal.png')} style={{height: 350, width: 370, borderRadius: 20, }} />
            </View>
            <View style={{paddingHorizontal: 30}}>
                <View ><Text style={{fontSize: 30, fontWeight: 'bold'}}>Refer a Friend</Text></View>
                <View>
                    <Text style={{fontSize: 20}}>1. Share your referral code.</Text>
                    <Text></Text>
                    <Text style={{fontSize: 20}}>2. Friend uses your referral code while buying Tst Series.</Text>
                    <Text></Text>
                    <Text style={{fontSize: 20}}>3. He gets Rs 50 off and you get Rs 50 Paytm cashback when your friend buys a test series using your referral code.</Text>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'center'}}><View style={{marginTop: 15,paddingHorizontal: 20, paddingVertical: 10 ,borderWidth: 1, width: 150, borderRadius: 7, flexDirection: 'row', justifyContent: 'center'}} ><Text>HEL31465024</Text></View></View>
                <TouchableOpacity onPress={onShare}><View style={styles.logbtn2}><Text style={{color: '#fff',  fontSize: 23}}>Invite a Friend</Text></View></TouchableOpacity>
            </View>
        </View>
        </ScrollView>
          </View>
        
            


        <StatusBar style="auto" />
    </View>
  );
}
export default Referal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
  topmost:{
    marginTop:10,
    backgroundColor: '#510487',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingBottom: 10,
    // paddingVertical: 50,
    // position: 'relative',
  },
  headerpart:{
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#510487',
    justifyContent: 'flex-start',
    alignContent: 'center',
    paddingTop: 40,
    // height: 300,
    // position: 'relative',  
},
referalpart: {
    flex: 12,
    marginTop: 20
},
img: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop:-5,
    marginBottom: 25,
    
},
logbtn2:{
    // flex: 1
    flexDirection: 'row',
  
    marginTop: 20,
    // height: 50,
    backgroundColor: '#6024a2',
    borderRadius: 10,
    justifyContent: 'center',
    paddingVertical: 15,
    
  },
  
});
