import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native'


const ProfileScreen = () => {
    return(
        <View style={styles.container}>
            <Text>ProfileScreen</Text>
            <Button title="Click Here"
                    onPress={()=> alert('Button Clicked')}
                    />
        </View>
    );
}



export default ProfileScreen;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});