import { StyleSheet, View,TouchableOpacity, TextInput, Button,KeyboardAvoidingView, Text, Alert, ScrollView } from 'react-native';
import React, { Component} from 'react';
import CustomHeader from '../../components/Header/Header';
const host = require('./../../../src/config/config');


class Register extends Component { 
  static navigationOptions = {
    header: null,
  };

  constructor() {
    super()
    this.state = {
        Name: '',
        nameValidate:false,
        Username: '',
        usernamevalidate:false,
        Email: '',
        emailvalidate:false,
        Telephone: '',
        phonenovalidate:false,
        Address: '',
        addressvalidate:false,
        Password: '',
        passwordvalidate:false,
        UserRoll:''
    }
  }


handleName = (text) => {
  if(this.validatetext(text)){
    this.setState({Name:text})
    this.setState({nameValidate:true})
  }else{
    this.setState({nameValidate:false})
  }
}

handleusername = (text) => {
  let reg = /^[a-zA-z0-9,.]+$/;
  if (reg.test(text)) {
    this.setState({ username: text })
    this.setState({ usernamevalidate: true })
  } else {
    this.setState({ usernamevalidate: false })
  }
}

handleemail = (text) => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  if (reg.test(text)) {
    this.setState({ Email: text })
    this.setState({ emailvalidate: true })
  } else {
    this.setState({ emailvalidate: false })
  }
}

handlephoneno = (text) => {
  let reg = /^[0-9]+$/;
  if (reg.test(text)) {
    this.setState({ Telephone: text })
    this.setState({ phonenovalidate: true })
  } else {
    this.setState({ phonenovalidate: false })
  }
}

handleaddress = (text) => {
  let reg = /^[a-zA-z0-9,.]+$/;
  if (reg.test(text)) {
    this.setState({ address: text })
    this.setState({ addressvalidate: true })
  } else {
    this.setState({ addressvalidate: false })
  }
}

handlepassword = (text) => {
  if(this.validatetext(text)){
    this.setState({Password:text})
    this.setState({passwordvalidate:true})
  }else{
    this.setState({passwordvalidate:false})
  }
}

validatetext(text){
  let alph = /^[a-zA-Z]+$/
  if(alph.test(text)){
    return true;
  }else {
    return false;
  }
}

 
UserRegistrationFunction = () =>{
 
  fetch(host.config.hostname+'/api/auth/signup', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        name : this.state.Name,
        username: this.state.Username,
        email: this.state.Email,
        telephone: this.state.Telephone,
        address: this.state.Address,
        password: this.state.Password,
        userRoll:"customer"
  
    })
    
  
  }).then((response) => response.json())
        .then((responseJson) => {
          if(responseJson.success === true)
          {
            Alert.alert(JSON.stringify(responseJson.message));
              this.props.navigation.navigate('RegisterSuccess'); 
          }
          else{
            Alert.alert(JSON.stringify(responseJson.message));
              this.props.navigation.navigate('Reg');
          }  
        }).catch((error) => {
          console.error(error);
        });
      }

  render() {
    return (
      //<KeyboardAvoidingView>
      <ScrollView style={styles.Main}>
        <CustomHeader/>
      <View style={styles.MainContainer}>
      <Text style= {styles.title}>Customer Registration</Text>
      <KeyboardAvoidingView>
      <TextInput
          placeholder="Enter Your Name"
          onChangeText={this.handleName}
          underlineColorAndroid='transparent'
          style={this.state.nameValidate? styles.TextInputStyleClassValidated:styles.TextInputStyleClassNotValidated}
          />
        <TextInput
          placeholder="Enter User Name"
          onChangeText={this.handleusername}
          underlineColorAndroid='transparent'
          style={this.state.usernamevalidate? styles.TextInputStyleClassValidated:styles.TextInputStyleClassNotValidated}
          />

        <TextInput
          placeholder="Enter User Email"
          onChangeText={this.handleemail}
          underlineColorAndroid='transparent'
          style={this.state.emailvalidate? styles.TextInputStyleClassValidated:styles.TextInputStyleClassNotValidated}
          />

        <TextInput 
          placeholder="Enter Contact No"
          onChangeText={this.handlephoneno}
          underlineColorAndroid='transparent'
          style={this.state.phonenovalidate? styles.TextInputStyleClassValidated:styles.TextInputStyleClassNotValidated}
          />

        <TextInput 
          placeholder="Enter User Address"
          onChangeText={this.handleaddress}
          underlineColorAndroid='transparent'
          style={this.state.addressvalidate? styles.TextInputStyleClassValidated:styles.TextInputStyleClassNotValidated}
          />
 
        
 
        <TextInput
          placeholder="Enter User Password"
          onChangeText={this.handlepassword}
          underlineColorAndroid='transparent'
          style={this.state.passwordvalidate? styles.TextInputStyleClassValidated:styles.TextInputStyleClassNotValidated}
          secureTextEntry={true}
          />
          </KeyboardAvoidingView>
 
        <TouchableOpacity  style={styles.button} onPress={this.UserRegistrationFunction}>
            <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity> 


        <Button title="Back to Home" onPress={()=>this.props.navigation.navigate('DefaultScreen')} style={styles.btn}/>
           </View>       
      </ScrollView>
      //</KeyboardAvoidingView>
    );
  }
}
export default Register;
 
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
TextInputStyleClassValidated: {
  textAlign: 'center',
  marginBottom: 7,
  height: 40,
  width: 380,
  borderWidth: 1,
  borderColor: '#2196F3',
  borderRadius: 5 ,
},

TextInputStyleClassNotValidated: {
  textAlign: 'center',
  marginBottom: 7,
  height: 40,
  width: 380,
  borderWidth: 1,
  borderColor: 'red',
  borderRadius: 5 ,
},

title:{
  marginTop: 70,
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
