import React, {Component} from 'react';
import {View , Text, StyleSheet, Image} from 'react-native-elements';


const Styles= StyleSheet.create({
    bigblue:{
        color:'red',
    },
});
class IndexApp extends Component{
    render(){
        return(
        <View >
                <Text Style={Styles.bigblue}>My App maman mmm</Text>
            </View>
        ); 
    }
}


export default IndexApp;