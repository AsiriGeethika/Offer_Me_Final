import { StyleSheet, View,TouchableOpacity, TextInput, ScrollView, Text, Alert } from 'react-native';
import React, { Component} from 'react';
import CustomHeader from '../../components/Header/Header';

 
class SupRegister extends Component { 
  static navigationOptions = {
    header: null,
  };

  constructor() {
    super()
    this.state = {
        UsersName: '',
        UserName: '',
        UserAddress: '',
        UserEmail: '',
        UserContact: '',
        //Userroll:'',
        UserPassword: ''
    }
  }
 
UserRegistrationFunction = () =>{
 
  fetch('http://10.10.6.39:8080/api/auth/signup', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
  
        name: this.state.UsersName,
        username: this.state.UserName,
        address: this.state.UserAddress,
        email: this.state.UserEmail,
        telephone: this.state.UserContact,
        password: this.state.UserPassword,
        userRoll: 2
  
    })
    
  
  }).then((response) => response.json())
        .then((responseJson) => {
  // Showing response message coming from server after inserting records.
         // Alert.alert(JSON.stringify(responseJson));
          if(responseJson.success === true )
        {
 
          Alert.alert(JSON.stringify(responseJson.message));
            this.props.navigation.navigate('HScreen');
 
        }
        else{
 
          Alert.alert(JSON.stringify(responseJson.message));
          this.props.navigation.navigate('Sreg');
        }  
        }).catch((error) => {
          console.error(error);
        });
      }

  render() {
    return (
      <ScrollView style={styles.Main}>
        <CustomHeader/>
      <View style={styles.MainContainer}>
      <Text style= {styles.title}>Supplier Registration</Text>
        <TextInput
          placeholder="Enter User Name"
          onChangeText={name => this.setState({UsersName : name})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
          />
          <TextInput
          placeholder="Enter UserName"
          onChangeText={username => this.setState({UserName : username})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
          />

        <TextInput 
          placeholder="Enter User Address"
          onChangeText={address => this.setState({UserAddress : address})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
          />
 
        <TextInput
          placeholder="Enter User Email"
          onChangeText={email => this.setState({UserEmail : email})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
          />

        <TextInput 
          placeholder="Enter Contact No"
          onChangeText={contact => this.setState({UserContact : contact})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
          />
 
        <TextInput
          placeholder="Enter User Password"
          onChangeText={password => this.setState({UserPassword : password})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
          secureTextEntry={true}
          />
 
        <TouchableOpacity  style={styles.button} onPress={this.UserRegistrationFunction}>
            <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity> 
      </View>       
      </ScrollView>
    );
  }
}
export default SupRegister;
 
const styles = StyleSheet.create({ 
  Main:{
    flex: 1,
    backgroundColor: '#fff',
  },

MainContainer :{
  alignItems: 'center',
  justifyContent: 'center',
  flex:1,
  backgroundColor: '#fff',
}, 
TextInputStyleClass: {
  textAlign: 'center',
  marginBottom: 7,
  height: 40,
  width: 380,
  borderWidth: 1,
  borderColor: '#2196F3',
  borderRadius: 5 ,
},
title:{
  marginTop:30,
  fontSize: 28, 
  fontWeight: '600',
  color: "#004D40", 
  textAlign: 'center', 
  marginBottom: 30,
},
buttonText: {
  fontSize: 18,
  fontWeight: '600',
  color: '#ffffff',
  textAlign: 'center',
  marginVertical:8,
},
button: {
  backgroundColor: '#1c313a',
  width: 300,
  borderRadius: 25,
  height: 40,
  marginVertical: 20, 
}
});
