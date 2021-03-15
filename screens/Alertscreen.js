import React, {Component} from 'react';
import { StyleSheet,Modal, Text, View, Image, ScrollView, SafeAreaView, TouchableOpacity, StatusBar, RefreshControl} from 'react-native';


// const Descc = ({navigation}) =>{
//   return(
//     <TouchableOpacity onPress={()=>  navigation.navigate('Alertdesc') } >
     
//         <View style={styles.botele} >
//                   <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
//                   <View style={{ justifyContent:'center', padding: 20, position: 'absolute' }}><Image source={require('../assets/bellll.png')} style={{ width: 35, height: 35, margin:-20, }} /></View>
//                       <View style={{justifyContent:'center', marginLeft: 40}}><Text style={{color: '#000', fontSize: 17, fontWeight: 'bold', justifyContent: 'space-between' }} numberOfLines={2} > Two New Kendriya Vidyalayas Open In Karnataka, Punjab</Text>
                              
//                       </View>
                      
//                   </View>
//                   <View style={{paddingTop: 10}} >
//                       <Text style={{color: '#9da3a8', fontWeight: '200', fontSize: 14}} numberOfLines={2}  >New Delhi: The Kendriya Vidyalaya Sangathan has launched two new Kendriya Vidyalayas (KVs) in Karnataka and Punjab. The new KVs will be opened in Sadalaga, Belagavi, Karnataka and KV IIT Ropar, Punjab. With the introduction of these two new Kendriya Vidyalayas in Karnataka and Punjab, the total number of KVs has increased to 1,247. The Kendriya Vidyalaya will start functioning from Class 1 to Class 5 initially from the academic year 2021-22. The admission process to this Kendriya Vidyalaya in Karnataka and Punjab will be as per the schedule prescribed for the upcoming academic session. Union Minister of Education Ramesh Pokhriyal ‘Nishank’, took to Twitter to announce the launch and congratulate the students and parents. The Minister said: “I am very happy to share that two new names are going to be added to the huge range of Kendriya Vidyalayas. Kendriya Vidyalaya Sangathan is launching two new schools in Karnataka and Punjab.” “With these two schools, the total number of Kendriya Vidyalayas in the country will increase to 1247,” the Education Minister added.</Text>
//                   </View>
//                   <View></View>
                  
//               </View>
//       </TouchableOpacity>
//   );
// }

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const Alertscreen = ({navigation}) =>{ 

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

    return (
      <SafeAreaView style={styles.container}>
        
        <View style={styles.headerpart}>
          <View onStartShouldSetResponder={() => navigation.navigate('Home') } style={{marginTop: -15, marginBottom:15}}><Image source={require('../assets/arrow.png')} style={{height: 20, width: 20}} /></View>
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
              <View style={{flexDirection: 'row' , justifyContent: 'center' , flexWrap: 'wrap' , marginTop: 10, marginBottom:5 , paddingHorizontal: 7 , paddingVertical: 3, borderWidth: 1, borderRadius:10, borderColor:'#fae4c4', backgroundColor: '#fae4c4',}}>
                <Text style={{color: '#000', fontWeight: '400'}}> 12  JAN  2021</Text>
              </View>
          </View>
          <TouchableOpacity onPress={()=>  navigation.navigate('Alertdesc') } >
      {/* // {this.setState({show:true})}} */}
        <View style={styles.botele} >
                  <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                  <View style={{ justifyContent:'center', padding: 20, position: 'absolute' }}><Image source={require('../assets/bellll.png')} style={{ width: 35, height: 35, margin:-20, }} /></View>
                      <View style={{justifyContent:'center', marginLeft: 40}}><Text style={{color: '#000', fontSize: 17, fontWeight: 'bold', justifyContent: 'space-between' }} numberOfLines={2} > Two New Kendriya Vidyalayas Open In Karnataka, Punjab</Text>
                              
                      </View>
                      
                  </View>
                  <View style={{paddingTop: 10}} >
                      <Text style={{color: '#9da3a8', fontWeight: '200', fontSize: 14}} numberOfLines={2}  >New Delhi: The Kendriya Vidyalaya Sangathan has launched two new Kendriya Vidyalayas (KVs) in Karnataka and Punjab. The new KVs will be opened in Sadalaga, Belagavi, Karnataka and KV IIT Ropar, Punjab. With the introduction of these two new Kendriya Vidyalayas in Karnataka and Punjab, the total number of KVs has increased to 1,247. The Kendriya Vidyalaya will start functioning from Class 1 to Class 5 initially from the academic year 2021-22. The admission process to this Kendriya Vidyalaya in Karnataka and Punjab will be as per the schedule prescribed for the upcoming academic session. Union Minister of Education Ramesh Pokhriyal ‘Nishank’, took to Twitter to announce the launch and congratulate the students and parents. The Minister said: “I am very happy to share that two new names are going to be added to the huge range of Kendriya Vidyalayas. Kendriya Vidyalaya Sangathan is launching two new schools in Karnataka and Punjab.” “With these two schools, the total number of Kendriya Vidyalayas in the country will increase to 1247,” the Education Minister added.</Text>
                  </View>
                  <View></View>
                  
              </View>
      </TouchableOpacity>
                  
      <View style={{flexDirection: 'row', justifyContent: 'center', marginHorizontal: 10}}>
              <View style={{flexDirection: 'row' , justifyContent: 'center' , flexWrap: 'wrap' , marginTop: 10, marginBottom:5 , paddingHorizontal: 7 , paddingVertical: 3, borderWidth: 1, borderRadius:10, borderColor:'#fae4c4', backgroundColor: '#fae4c4',}}>
                <Text style={{color: '#000', fontWeight: '400'}}> 10  JAN  2021</Text>
              </View>
          </View>

              

            <TouchableOpacity onPress={()=>  navigation.navigate('Alertdesc') } >
      {/* // {this.setState({show:true})}} */}
        <View style={styles.botele} >
                  <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                  <View style={{ justifyContent:'center', padding: 20, position: 'absolute' }}><Image source={require('../assets/bellll.png')} style={{ width: 35, height: 35, margin:-20, }} /></View>
                      <View style={{justifyContent:'center', marginLeft: 40}}><Text style={{color: '#000', fontSize: 17, fontWeight: 'bold', justifyContent: 'space-between' }} numberOfLines={2} > Two New Kendriya Vidyalayas Open In Karnataka, Punjab</Text>
                              
                      </View>
                      
                  </View>
                  <View style={{paddingTop: 10}} >
                      <Text style={{color: '#9da3a8', fontWeight: '200', fontSize: 14}} numberOfLines={2}  >New Delhi: The Kendriya Vidyalaya Sangathan has launched two new Kendriya Vidyalayas (KVs) in Karnataka and Punjab. The new KVs will be opened in Sadalaga, Belagavi, Karnataka and KV IIT Ropar, Punjab. With the introduction of these two new Kendriya Vidyalayas in Karnataka and Punjab, the total number of KVs has increased to 1,247. The Kendriya Vidyalaya will start functioning from Class 1 to Class 5 initially from the academic year 2021-22. The admission process to this Kendriya Vidyalaya in Karnataka and Punjab will be as per the schedule prescribed for the upcoming academic session. Union Minister of Education Ramesh Pokhriyal ‘Nishank’, took to Twitter to announce the launch and congratulate the students and parents. The Minister said: “I am very happy to share that two new names are going to be added to the huge range of Kendriya Vidyalayas. Kendriya Vidyalaya Sangathan is launching two new schools in Karnataka and Punjab.” “With these two schools, the total number of Kendriya Vidyalayas in the country will increase to 1247,” the Education Minister added.</Text>
                  </View>
                  <View></View>
                  
              </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>  navigation.navigate('Alertdesc') } >
      {/* // {this.setState({show:true})}} */}
        <View style={styles.botele} >
                  <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                  <View style={{ justifyContent:'center', padding: 20, position: 'absolute' }}><Image source={require('../assets/bellll.png')} style={{ width: 35, height: 35, margin:-20, }} /></View>
                      <View style={{justifyContent:'center', marginLeft: 40}}><Text style={{color: '#000', fontSize: 17, fontWeight: 'bold', justifyContent: 'space-between' }} numberOfLines={2} > Two New Kendriya Vidyalayas Open In Karnataka, Punjab</Text>
                              
                      </View>
                      
                  </View>
                  <View style={{paddingTop: 10}} >
                      <Text style={{color: '#9da3a8', fontWeight: '200', fontSize: 14}} numberOfLines={2}  >New Delhi: The Kendriya Vidyalaya Sangathan has launched two new Kendriya Vidyalayas (KVs) in Karnataka and Punjab. The new KVs will be opened in Sadalaga, Belagavi, Karnataka and KV IIT Ropar, Punjab. With the introduction of these two new Kendriya Vidyalayas in Karnataka and Punjab, the total number of KVs has increased to 1,247. The Kendriya Vidyalaya will start functioning from Class 1 to Class 5 initially from the academic year 2021-22. The admission process to this Kendriya Vidyalaya in Karnataka and Punjab will be as per the schedule prescribed for the upcoming academic session. Union Minister of Education Ramesh Pokhriyal ‘Nishank’, took to Twitter to announce the launch and congratulate the students and parents. The Minister said: “I am very happy to share that two new names are going to be added to the huge range of Kendriya Vidyalayas. Kendriya Vidyalaya Sangathan is launching two new schools in Karnataka and Punjab.” “With these two schools, the total number of Kendriya Vidyalayas in the country will increase to 1247,” the Education Minister added.</Text>
                  </View>
                  <View></View>
                  
              </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>  navigation.navigate('Alertdesc') } >
      {/* // {this.setState({show:true})}} */}
        <View style={styles.botele} >
                  <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                  <View style={{ justifyContent:'center', padding: 20, position: 'absolute' }}><Image source={require('../assets/bellll.png')} style={{ width: 35, height: 35, margin:-20, }} /></View>
                      <View style={{justifyContent:'center', marginLeft: 40}}><Text style={{color: '#000', fontSize: 17, fontWeight: 'bold', justifyContent: 'space-between' }} numberOfLines={2} > Two New Kendriya Vidyalayas Open In Karnataka, Punjab</Text>
                              
                      </View>
                      
                  </View>
                  <View style={{paddingTop: 10}} >
                      <Text style={{color: '#9da3a8', fontWeight: '200', fontSize: 14}} numberOfLines={2}  >New Delhi: The Kendriya Vidyalaya Sangathan has launched two new Kendriya Vidyalayas (KVs) in Karnataka and Punjab. The new KVs will be opened in Sadalaga, Belagavi, Karnataka and KV IIT Ropar, Punjab. With the introduction of these two new Kendriya Vidyalayas in Karnataka and Punjab, the total number of KVs has increased to 1,247. The Kendriya Vidyalaya will start functioning from Class 1 to Class 5 initially from the academic year 2021-22. The admission process to this Kendriya Vidyalaya in Karnataka and Punjab will be as per the schedule prescribed for the upcoming academic session. Union Minister of Education Ramesh Pokhriyal ‘Nishank’, took to Twitter to announce the launch and congratulate the students and parents. The Minister said: “I am very happy to share that two new names are going to be added to the huge range of Kendriya Vidyalayas. Kendriya Vidyalaya Sangathan is launching two new schools in Karnataka and Punjab.” “With these two schools, the total number of Kendriya Vidyalayas in the country will increase to 1247,” the Education Minister added.</Text>
                  </View>
                  <View></View>
                  
              </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>  navigation.navigate('Alertdesc') } >
      {/* // {this.setState({show:true})}} */}
        <View style={styles.botele} >
                  <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                  <View style={{ justifyContent:'center', padding: 20, position: 'absolute' }}><Image source={require('../assets/bellll.png')} style={{ width: 35, height: 35, margin:-20, }} /></View>
                      <View style={{justifyContent:'center', marginLeft: 40}}><Text style={{color: '#000', fontSize: 17, fontWeight: 'bold', justifyContent: 'space-between' }} numberOfLines={2} > Two New Kendriya Vidyalayas Open In Karnataka, Punjab</Text>
                              
                      </View>
                      
                  </View>
                  <View style={{paddingTop: 10}} >
                      <Text style={{color: '#9da3a8', fontWeight: '200', fontSize: 14}} numberOfLines={2}  >New Delhi: The Kendriya Vidyalaya Sangathan has launched two new Kendriya Vidyalayas (KVs) in Karnataka and Punjab. The new KVs will be opened in Sadalaga, Belagavi, Karnataka and KV IIT Ropar, Punjab. With the introduction of these two new Kendriya Vidyalayas in Karnataka and Punjab, the total number of KVs has increased to 1,247. The Kendriya Vidyalaya will start functioning from Class 1 to Class 5 initially from the academic year 2021-22. The admission process to this Kendriya Vidyalaya in Karnataka and Punjab will be as per the schedule prescribed for the upcoming academic session. Union Minister of Education Ramesh Pokhriyal ‘Nishank’, took to Twitter to announce the launch and congratulate the students and parents. The Minister said: “I am very happy to share that two new names are going to be added to the huge range of Kendriya Vidyalayas. Kendriya Vidyalaya Sangathan is launching two new schools in Karnataka and Punjab.” “With these two schools, the total number of Kendriya Vidyalayas in the country will increase to 1247,” the Education Minister added.</Text>
                  </View>
                  <View></View>
                  
              </View>
      </TouchableOpacity>

      <View style={{flexDirection: 'row', justifyContent: 'center', marginHorizontal: 10}}>
              <View style={{flexDirection: 'row' , justifyContent: 'center' , flexWrap: 'wrap' , marginTop: 10, marginBottom:5 , paddingHorizontal: 7 , paddingVertical: 3, borderWidth: 1, borderRadius:10, borderColor:'#fae4c4', backgroundColor: '#fae4c4',}}>
                <Text style={{color: '#000', fontWeight: '400'}}> 1  JAN  2021</Text>
              </View>
          </View>

          <TouchableOpacity onPress={()=>  navigation.navigate('Alertdesc') } >
      {/* // {this.setState({show:true})}} */}
        <View style={styles.botele} >
                  <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                  <View style={{ justifyContent:'center', padding: 20, position: 'absolute' }}><Image source={require('../assets/bellll.png')} style={{ width: 35, height: 35, margin:-20, }} /></View>
                      <View style={{justifyContent:'center', marginLeft: 40}}><Text style={{color: '#000', fontSize: 17, fontWeight: 'bold', justifyContent: 'space-between' }} numberOfLines={2} > Two New Kendriya Vidyalayas Open In Karnataka, Punjab</Text>
                              
                      </View>
                      
                  </View>
                  <View style={{paddingTop: 10}} >
                      <Text style={{color: '#9da3a8', fontWeight: '200', fontSize: 14}} numberOfLines={2}  >New Delhi: The Kendriya Vidyalaya Sangathan has launched two new Kendriya Vidyalayas (KVs) in Karnataka and Punjab. The new KVs will be opened in Sadalaga, Belagavi, Karnataka and KV IIT Ropar, Punjab. With the introduction of these two new Kendriya Vidyalayas in Karnataka and Punjab, the total number of KVs has increased to 1,247. The Kendriya Vidyalaya will start functioning from Class 1 to Class 5 initially from the academic year 2021-22. The admission process to this Kendriya Vidyalaya in Karnataka and Punjab will be as per the schedule prescribed for the upcoming academic session. Union Minister of Education Ramesh Pokhriyal ‘Nishank’, took to Twitter to announce the launch and congratulate the students and parents. The Minister said: “I am very happy to share that two new names are going to be added to the huge range of Kendriya Vidyalayas. Kendriya Vidyalaya Sangathan is launching two new schools in Karnataka and Punjab.” “With these two schools, the total number of Kendriya Vidyalayas in the country will increase to 1247,” the Education Minister added.</Text>
                  </View>
                  <View></View>
                  
              </View>
      </TouchableOpacity>

            


          </ScrollView> 
          </View>
        
          <StatusBar style="auto" /> 
      </SafeAreaView>
      
    );
    
  
  
}



export default Alertscreen;

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
    backgroundColor: '#fff',
    borderWidth: 4,
    borderColor: '#fff',
    borderRadius: 20,
    padding: 20,
    marginVertical: 5,
    marginHorizontal: 20,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },

  
});
