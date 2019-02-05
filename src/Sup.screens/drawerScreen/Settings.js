import React, { Component } from 'react';
import {View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import CustomHeader from '../../components/Header/Header';
 
class SDrawerScreen3 extends Component{
constructor(props){
    super(props);

} 
     render(){
        return(
            <View style={StyleSheet.container}>
        <CustomHeader/>
        <View style={StyleSheet.cont}>
        <Text>Settings</Text>
        </View>
        </View>
         )
     }
}
 
export default SDrawerScreen3;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        },
});