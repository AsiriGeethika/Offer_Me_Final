import React, { Component } from 'react';
import {View,ScrollView,ImageBackground,Text,StyleSheet,TouchableOpacity,} from 'react-native';
import ViewCard from '../../components/ViewCard';
import CustomHeader from '../../components/Header/Header';

 
class HScreen extends Component{
constructor(props){
    super(props);

} 
myfun=()=>{
  alert('Please sign in to create an advertisement.');
}
     render(){
        return(
            <ScrollView style={styles.container1}>
            
            <CustomHeader/>
              <ImageBackground source={require('./../../Images/suppliera.jpg')} style={styles.banner}>
              <View style={styles.container}>
          <Text style={styles.txt1}>Sign in with OfferMe</Text>
          <Text style={styles.txt2}>We can personalize your OfferMe experience</Text>
            <View style={styles.cont}>   
              <TouchableOpacity style={styles.btn1} onPress={() => this.props.navigation.navigate('SSignin')}>
                <Text style={styles.buttonText}>Sign In</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn1} onPress={() => this.props.navigation.navigate('Sreg')}>
                <Text style={styles.buttonText}>Register</Text>
              </TouchableOpacity>
            </View>
        </View>
            </ImageBackground>
            <View style={styles.contain}>
            <TouchableOpacity style={styles.btnn} onPress={this.myfun}>
              <Text style={styles.buttonText1}>Create Advertisement</Text>
            </TouchableOpacity>
              </View>
              <ViewCard/>
            </ScrollView>   
         )
     }
}
 
export default HScreen;


const styles = StyleSheet.create({
    container2: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
        alignItems: 'center',
      },
      container1: {
        flex: 1,
        backgroundColor: '#fff',  
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
        backgroundColor: 'rgba(151, 163, 168,0.5)',
        marginBottom: 50,
        marginTop: 50,
      },
      cont:{
        flex: 2,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
      },
    
      banner:{
        width: '100%',
        height: 250,
        alignItems: 'center',
        justifyContent: 'center',  
      },
      txt1:{
        fontFamily: 'Cochin',
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
      },
      txt2:{
        fontFamily: 'Cochin',
        fontSize: 14,
        color: '#000000',
        fontWeight: 'bold',
      },
      btn1:{
        shadowColor: '#ffccbc',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius:3,
        elevation:1,
        alignSelf:'center',
        padding: 10,
        backgroundColor: 'rgba(151, 163, 168,0.8)',
        marginTop: 15,
        marginBottom: 5,
        marginLeft: 20,
        marginRight: 20,
      },
      buttonText:{
        fontFamily: 'Cochin',
        fontSize: 16,
        color: '#000000',
        fontWeight: 'bold',
        alignItems: 'center',
      },
      contain :{
        width: '100%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor :'#0B0943',
        padding: 10,
      },
      btnn:{
        backgroundColor: 'rgb(205, 14, 14)',
        width: 300,
        height: 40,
        marginVertical: 20,
      },
      buttonText1:{
        fontSize: 18,
        fontWeight: '600',
        color: '#ffffff',
        textAlign: 'center',
        marginVertical:8,
      }
});