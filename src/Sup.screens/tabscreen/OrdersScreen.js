import React, { Component } from 'react';
import {View,ScrollView,ImageBackground,Text,StyleSheet,TouchableOpacity} from 'react-native';
import CustomHeader from '../../components/Header/Header';

class STabScreen3 extends Component{
constructor(props){
    super(props);
} 
     render(){
        return(
            <ScrollView style={styles.container1}>
        <CustomHeader/>
          <ImageBackground source={require('./../../Images/OrderScreen.jpg')} style={styles.banner}>
              <View style={styles.container}>
                  <Text style={styles.txt1}>My Offers</Text>
              </View>
        </ImageBackground>
        </ScrollView>  
         )
     }
}
 
export default STabScreen3;


const styles = StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor: '#fff',  
      },
      banner:{
        width: '100%',
        height: 250,
        alignItems: 'center',
        justifyContent: 'center',  
      },
      txt1:{
        fontFamily: 'Cochin',
        fontSize: 30,
        color: '#000000',
        fontWeight: '900',
      },
      btn1:{
        marginTop: 30,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
        padding: 5,
        backgroundColor: 'rgba(166, 239, 30,0.8)',
      },
      buttonText:{
        fontFamily: 'Cochin',
      fontSize: 16,
      color: '#000000',
      fontWeight: 'bold',
      },
      cont:{
        flex: 2,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
      },
      container:{
        flex: 2,
          alignItems: 'center',
          justifyContent: 'center',
          shadowColor: '#ffccbc',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.8,
          shadowRadius:3,
          elevation:1,
          alignSelf:'center',
          padding: 25,
          backgroundColor: 'rgba(166, 239, 30,0.5)',
          marginBottom: 50,
          marginTop: 50,
      },
    })