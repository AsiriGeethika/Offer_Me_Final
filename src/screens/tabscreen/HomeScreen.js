import React, { Component } from 'react';
import {View,ScrollView,ImageBackground,Text,StyleSheet,TouchableOpacity,} from 'react-native';
import ViewCard from '../../components/ViewCard';
import CustomHeader from '../../components/Header/Header';
import ViewCardAuth from '../../components/viewCard/ViewCardAuth';
 
class TabScreen1 extends Component{
constructor(props){
    super(props);

} 
render(){
  return(
    <ScrollView style={styles.container1}>
      <CustomHeader/>
      <ImageBackground source={require('./../../Images/ww.jpg')} style={styles.banner}>
        <View style={styles.container}>
          <Text style={styles.txt1}>Welcome to OfferMe</Text>
          <Text style={styles.txt2}>You can find best products with best offers </Text>
        </View>
      </ImageBackground>
            
      <View style={styles.contain}>
        <TouchableOpacity style={styles.btnn} onPress={() => this.props.navigation.navigate('Categories')}>
          <Text style={styles.buttonText1}>Categories</Text>
        </TouchableOpacity>
      </View>
              
      {/* <ViewCard/> */}

      <ViewCardAuth />
    </ScrollView>   
  )
  }
}
 
export default TabScreen1;

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
        fontSize: 18,
        color: '#000000',
        fontWeight: 'bold',
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
        width: '50%',
        padding: 10,
        backgroundColor: '#33b5e5',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 5,
        marginRight:5,
        borderWidth: 3,
        borderColor: '#000000',
      },
      buttonText1:{
        fontFamily: 'Cochin',
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        alignItems: 'center',
      },
});