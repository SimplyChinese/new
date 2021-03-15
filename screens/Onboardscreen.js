import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View, Text, Button, Image, StyleSheet} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const Skip = ({...props}) =>(
    <View style={{padding: 20, }}>
        <Text {...props} style={{fontWeight: 'bold', fontSize: 15}}>Skip</Text>
    </View>
    
);

const Next = ({...props}) =>(
    <View style={{padding: 20}}>
        <Text {...props} style={{fontWeight: 'bold',  fontSize: 15}}>Next</Text>
    </View>
);

const Done = ({...props}) =>(
    <View style={{padding: 20}}>
        <Text {...props} style={{fontWeight: 'bold',  fontSize: 15}}>Done</Text>
    </View>
);

const Onboardscreen =({navigation}) =>{
    return(
        <Onboarding
        bottomBarHighlight={false}
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        onSkip={() => navigation.navigate("Login")}
        onDone={() => navigation.navigate("Login")}
        pages={[
            {
                backgroundColor: '#f8fcff',
                image: <Image source={require('../assets/onboardone.png')} style={{ height: 380, width: 380}} />,
                containerStyles: {margin: 0, padding: 0},
                title: 'Lorem ipsum',
                titleStyles: {fontWeight: 'bold'},
                subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                subTitleStyles: {fontWeight: 'bold', fontSize: 13, fontSize: 13, marginLeft :40 ,marginRight: 40, paddingBottom: 200}
            },
            {
                backgroundColor: '#f8fcff',
                image: <Image source={require('../assets/onboardtwo.png')} style={{height: 380, width: 380}} />,
                title: 'Lorem ipsum',
                titleStyles: {fontWeight: 'bold'},
                subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                subTitleStyles: {fontWeight: 'bold', fontSize: 13, fontSize: 13, marginLeft :40 ,marginRight: 40, paddingBottom: 200}
            },
            {
                backgroundColor: '#f8fcff',
                image: <Image source={require('../assets/onboardthree.png')} style={{height: 380, width: 380}} />,
                title: 'Lorem ipsum',
                titleStyles: {fontWeight: 'bold'},
                subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                subTitleStyles: {fontWeight: 'bold', fontSize: 13, marginLeft :40 ,marginRight: 40, paddingBottom: 200}
            },
            
         ]}
        />
        
    );
    
};

<StatusBar style="auto" />

export default Onboardscreen;

const style = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});