import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Image , Text, View, Button, TextInput, SafeAreaView, ScrollView , TouchableOpacity, RefreshControl } from 'react-native';


const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

  const Myprofile = ({navigation}) =>{
    
    const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
    
    const [ftext, setFtext] = React.useState('Papa Shrinivasan');
    const [mtext, setMtext] = React.useState('Mummy Shrinivasan');
    const [ptext, setPtext] = React.useState('9999999999');
    const [stext, setStext] = React.useState('9111111111');
    const [etext, setEtext] = React.useState('abcdef@gmail.com');
    const [atext, setAtext] = React.useState('Bagal Wali Khloi, Lalpur, Raipur, CG -493111');

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.toppart}>
          <View onStartShouldSetResponder={() => navigation.navigate('Alertscreen')} style={{marginTop:50, marginLeft: 20}}>
            <Image source={require('../assets/arrow.png')} style={{height: 20, width: 20}} />
          </View>
          <View style={styles.proimg}>
            <View style={{backgroundColor: '#fff', borderRadius: 80, padding: 5, }}>
              <View style={styles.img}>
                <Image  source={require('../assets/boy.png')} style={{height: 100, width: 100,}} />
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center', marginVertical: 10}}>
            <Text style={{fontWeight: 'bold', fontSize: 30, color: '#fff'}}>HITESH PATRE</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center',}}>
            <Text style={{fontWeight: 'bold', fontSize: 13, color: '#fff'}}>Class : X11, Division: A</Text>
          </View>

        </View>
        <View style={styles.bottompart}>
          <ScrollView  
            refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
          >
            <View style={{marginHorizontal: 20, marginTop: 20}}>
              <View style={{marginBottom: 10}}>
                <Text style={{color: '#9da3a8', marginBottom: 5}}>Father Name</Text>
                <TextInput
                  style={{height: 50, backgroundColor: '#f6f4f3' ,borderColor: '#fff', borderWidth: 1, borderRadius: 10, paddingHorizontal: 10, fontWeight: 'bold' }}
                  value={ftext} onChangeText={ftext => setFtext(ftext)}
                  />
              </View>
              <View style={{marginBottom: 10}}>
                <Text style={{color: '#9da3a8', marginBottom: 5}}>Mother Name</Text>
                <TextInput
                  style={{height: 50, backgroundColor: '#f6f4f3' ,borderColor: '#fff', borderWidth: 1, borderRadius: 10, paddingHorizontal: 10, fontWeight: 'bold' }}
                  value={mtext} onChangeText={mtext => setMtext(mtext)}
                  />
              </View>
              <View style={{marginBottom: 10}}>
                <Text style={{color: '#9da3a8', marginBottom: 5}}>Primary Contact Number</Text>
                <TextInput
                  style={{height: 50, backgroundColor: '#f6f4f3' ,borderColor: '#fff', borderWidth: 1, borderRadius: 10, paddingHorizontal: 10, fontWeight: 'bold' }}
                  value={ptext} onChangeText={ptext => setPtext(ptext)} keyboardType={'numeric'}
                  />
              </View>
              <View style={{marginBottom: 10}}>
                <Text style={{color: '#9da3a8', marginBottom: 5}}>Secondary Contact Number </Text>
                <TextInput
                  style={{height: 50, backgroundColor: '#f6f4f3' ,borderColor: '#fff', borderWidth: 1, borderRadius: 10, paddingHorizontal: 10, fontWeight: 'bold' }}
                  value={stext} onChangeText={stext => setStext(stext)} keyboardType={'numeric'}
                  />
              </View>
              <View style={{marginBottom: 10}}>
                <Text style={{color: '#9da3a8', marginBottom: 5}}>Email Id</Text>
                <TextInput
                  style={{height: 50, backgroundColor: '#f6f4f3' ,borderColor: '#fff', borderWidth: 1, borderRadius: 10, paddingHorizontal: 10, fontWeight: 'bold'}}
                  value={etext} onChangeText={etext => setEtext(etext)}
                  />
              </View>
              <View style={{marginBottom: 10}}>
                <Text style={{color: '#9da3a8', marginBottom: 5}}>Address</Text>
                <TextInput
                  style={{height: 50, backgroundColor: '#f6f4f3' ,borderColor: '#fff', borderWidth: 1, borderRadius: 10, paddingHorizontal: 10, fontWeight: 'bold' }}
                  value={atext} onChangeText={atext => setAtext(atext)}
                  />
              </View>
            </View>
            <View style={styles.btn}>
              <View style={{flexDirection: 'row',marginVertical: 20, justifyContent: 'space-around'}}>
                <TouchableOpacity onPress={()=>  alert('Hi')}><View style={{borderRadius: 5, borderWidth: 2, paddingHorizontal:20, paddingVertical: 10, backgroundColor: '#510487', borderColor: '#510487'}}><Text style={{color: '#9da3a8', fontWeight: 'bold', color: '#fff'}}>Update</Text></View></TouchableOpacity>
                <TouchableOpacity onPress={()=>  navigation.navigate('ResetPass')}><View style={{borderRadius: 5, borderWidth: 2, paddingHorizontal:20, paddingVertical: 10, backgroundColor: '#510487', borderColor: '#510487'}}><Text style={{color: '#9da3a8', fontWeight: 'bold', color: '#fff'}}>Reset Password</Text></View></TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>

        <StatusBar style="auto" /> 
      </SafeAreaView>
    );
  }

export default Myprofile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#fff',
  },

  toppart:{
      flex:2,
      backgroundColor: '#510487'
  },

  bottompart: {
    flex: 3,
    backgroundColor: '#fff'
  },
  img:{
    backgroundColor: '#fff',
    padding: 10,
    borderWidth: 2,
    borderRadius: 80,
    borderColor: 'gold',
    height: 150,
    width: 150,
    alignItems: 'center',
    justifyContent:'center'
  },
  proimg:{
    backgroundColor: '#510487',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 10,

  },
  btn:{
    marginHorizontal: 60,
  },
 
});
