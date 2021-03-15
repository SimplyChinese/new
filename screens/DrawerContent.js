import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Linking} from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch,
    paperTheme
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export function DrawerContent(props){
    
    return(
            <View style={{flex:1}}>
                <DrawerContentScrollView {...props}>
                    <View style={styles.drawerContent}>
                        <View style={styles.userInfoSection}>
                            <View style={{flexDirection:'row',marginTop: 15}}>
                                <Avatar.Image 
                                    source={
                                        require('../assets/boy.png')
                                    }
                                    size={50}
                                />
                                <View style={{marginLeft:15, flexDirection:'column'}}>
                                    <Title style={styles.title}>Hitesh Patre</Title>
                                    <Caption style={styles.caption}>@hiteshpatre1920</Caption>
                                </View>
                            </View>
    
                            
                        </View>
    
                        <Drawer.Section style={styles.drawerSection}>
                            <DrawerItem 
                                icon={({color, size}) => (
                                    <Icon 
                                    name="home-outline" 
                                    color={color}
                                    size={size}
                                    />
                                )}
                                label="Home"
                                onPress={() => {props.navigation.navigate('Home')}}
                            />
                            <DrawerItem 
                                icon={({color, size}) => (
                                    <Icon 
                                    name="account-outline" 
                                    color={color}
                                    size={size}
                                    />
                                )}
                                label="My Profile"
                                onPress={() => {props.navigation.navigate('Myprofile')}}
                            />
                            <DrawerItem 
                                icon={({color, size}) => (
                                    <Icon 
                                    name="bookmark-outline" 
                                    color={color}
                                    size={size}
                                    />
                                )}
                                label="Change Language"
                                onPress={() => {props.navigation.navigate('SettingsScreen')}}
                            />
                            <DrawerItem 
                                icon={({color, size}) => (
                                    <Icon 
                                    name="bookmark-outline" 
                                    color={color}
                                    size={size}
                                    />
                                )}
                                label="Bookmarks"
                                onPress={() => {props.navigation.navigate('BookmarkScreen')}}
                            />
                            <DrawerItem 
                                icon={({color, size}) => (
                                    <Icon 
                                    name="bookmark-outline" 
                                    color={color}
                                    size={size}
                                    />
                                )}
                                label="Refer a Friend"
                                onPress={() => {props.navigation.navigate('Referal')}}
                            />
                            
                            
                            
                            <DrawerItem 
                                icon={({color, size}) => (
                                    <Icon 
                                    name="contacts" 
                                    color={color}
                                    size={size}
                                    />
                                )}
                                label="Contact Us"
                                onPress={() => {props.navigation.navigate('Contacts')}}
                            />
                            <DrawerItem 
                                icon={({color, size}) => (
                                    <Icon 
                                    name="exit-to-app" 
                                    color={color}
                                    size={size}
                                    />
                                )}
                                label="Sign Out"
                                onPress={() => {props.navigation.navigate('Logout')}}
                            />
                        </Drawer.Section>
                    </View>
                </DrawerContentScrollView>
                <Drawer.Section style={styles.bottomDrawerSection}>
                    <View style={styles.row}>
                        <TouchableOpacity onPress={()=> Linking.openURL('http://facebook.com') }><Image source={require('../assets/facebook.png')} style={{ height: 30, width: 30}} /></TouchableOpacity>
                        <TouchableOpacity onPress={()=> Linking.openURL('http://whatsapp.com/9340678470') }><Image source={require('../assets/whatsapp.png')} style={{ height: 30, width: 30}} /></TouchableOpacity>
                        <TouchableOpacity onPress={()=> Linking.openURL('http://instagram.com/hiteshpatre1920') }><Image source={require('../assets/instagram.png')} style={{ height: 30, width: 30}} /></TouchableOpacity>
                        <TouchableOpacity onPress={()=> Linking.openURL('https://www.youtube.com/channel/UCD_a3ELqxrCo4DGUtlld0Zw') }><Image source={require('../assets/youtube.png')} style={{ height: 30, width: 30}} /></TouchableOpacity>
                    </View>
                </Drawer.Section>
            </View>
        
    );
}





const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
      },
      userInfoSection: {
        paddingLeft: 20,
      },
      title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
      },
      caption: {
        fontSize: 14,
        lineHeight: 14,
      },
      row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 55,
        marginVertical: 13,
      },
      section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
      },
      paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
      },
      drawerSection: {
        marginTop: 15,
      },
      bottomDrawerSection: {
          marginBottom: 15,
          borderTopColor: '#f4f4f4',
          borderTopWidth: 1
      },
      preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
      },
  });