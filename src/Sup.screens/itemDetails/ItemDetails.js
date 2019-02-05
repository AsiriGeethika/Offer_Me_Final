import { StyleSheet, View,TouchableOpacity, TextInput, Button, Text, Alert, Image,ScrollView } from 'react-native';
import React, { Component} from 'react';
import CustomImage from './../../components/CustomImage';

 
class ItemDetails extends Component { 
  static navigationOptions = {
    header: null,
  };

  
 

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.head}>
            <Text style={styles.add}>25% OFF</Text>
          </View>
          <Image source={require('./../../Images/sportshoes.jpeg')} style={styles.banner}/>
          <View style={styles.container1}>
            <Text style={styles.item}>Nike Sports Shoes</Text>
            <Text style={styles.add1}>2500 LKR</Text>
            <Text style={styles.add2}>1875 LKR</Text>
            <Text style={styles.item}>From 15th-30th December</Text>
            <Text style={styles.item}>at KANDY</Text>
          </View>
        </View>
        <View style={styles.cont}>   
                  <TouchableOpacity style={styles.btn1} onPress={() => this.props.navigation.navigate('Signin')}>
                    <Text style={styles.buttonText}>Add to Wish List</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.btn1} onPress={() => this.props.navigation.navigate('Reg')}>
                    <Text style={styles.buttonText}>Order Item</Text>
                  </TouchableOpacity>
                </View>
        </ScrollView>  
    );
  }
}
export default ItemDetails;
 
const styles = StyleSheet.create({ 
  container:{
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    padding: 5,
    backgroundColor: '#fff',  
  },
  container1:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  
  add:{
    fontFamily: 'Cochin',
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d50000',
    padding: 3,
    marginBottom: 10,
    marginTop: 5,  
  },
  banner:{
    width: '100%',
    height: 220,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain',

  },
      add1:{
        fontFamily: 'Cochin',
        fontSize: 20,
        color: '#3E4551',
        fontWeight: 'bold',
        textDecorationLine: 'line-through', 
        textDecorationStyle: 'solid',
        alignItems: 'center',
        paddingBottom: 5,
      },
      add2:{
        fontFamily: 'Cochin',
        fontSize: 20,
        color: '#d50000',
        fontWeight: 'bold',
        alignItems: 'center',
        paddingBottom: 5,
      },
      item:{
        fontFamily: 'Cochin',
        fontSize: 18,
        color: '#1C2331',
        fontWeight: 'bold',
        alignItems: 'center',
        paddingBottom: 5,
        marginTop: 10,
      },
      cont:{
        flex: 2,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'column',
      },
      btn1:{
        width: 400,
        alignItems:'center',
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
        paddingTop: 20,
        backgroundColor: 'rgba(222, 25, 22, 0.7)',
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
      },
});
