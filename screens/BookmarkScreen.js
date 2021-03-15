import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native'


const BookmarkScreen = () => {
    return(
        <View style={styles.container}>
            <Text>Bookmarks</Text>
            <Button title="Click Here"
                    onPress={()=> alert('Button Clicked')}
                    />
        </View>
    );
}



export default BookmarkScreen;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});