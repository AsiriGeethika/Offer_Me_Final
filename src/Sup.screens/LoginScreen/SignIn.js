import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity,TextInput, View, Alert, Button,ImageBackground, ScrollView,Text,AsyncStorage} from 'react-native';
import { StackNavigator } from 'react-navigation';
import CustomHeader from '../../components/Header/Header';
import ViewCard from '../../components/ViewCard';
const host = require('./../../config/config');


 
class LoginActivity extends Component {
  static navigationOptions = {
    header: null,
  };
 
  constructor(props) {
    super(props)
    this.state = {
      usernameOrEmail: '',
      password: ''
    }
  }
 
UserLoginFunction = () =>{
  const { usernameOrEmail }  = this.state ;
  const { password }  = this.state ;
  console.log("Username or Email :"+usernameOrEmail);
  console.log("password :"+password);
 
    fetch(host.config.hostname+'/api/auth/signin', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      
      body: JSON.stringify({
      usernameOrEmail: this.state.usernameOrEmail,
        password: this.state.password

        
      })
 
}).then((response) => response.json())
      .then((responseJson) => {
        console.log("I am in login ",responseJson)
        this.dataHandler(responseJson);
 
      })
  }

  dataHandler(data){
    console.log("login data Handler "+data.accessToken);
    this.setasyncToken(data.accessToken);
    this.props.navigation.navigate('SDrawerNav')
  }

  async setasyncToken(token){
    console.log("I am at token setasyncToken "+token);
    try{
        await AsyncStorage.setItem("token", token);
        console.log("set token async storage ");

    }catch(error){
        console.log("in dataHandler login token set ",error);
    }
    // this.props.navigation.navigate('SelectItem')

    this.getUserDetails(token);
}

getUserDetails(token){
  const { usernameOrEmail }  = this.state ;
  const { password }  = this.state ;
  console.log("Username or Email :"+usernameOrEmail);
  console.log("password :"+password);
 
    fetch(`http://10.10.24.184:8080/api/user/${token}`, {
      method: 'GET',
 
}).then((response) => response.json())
      .then((responseJson) => {
        console.log("I am in login user Details ",responseJson)
        this.userHandler(responseJson);
 
      })

}

async userHandler(data){
  console.log("I am in UserHandler in SignIn ",data)
  // console.log("I am in UserHandler in SignIn ",data.toString())
  var user_details=JSON.stringify(data)
  console.log("I am in UserHandler in SignIn "+user_details)

  try{
    await AsyncStorage.setItem("user_details", user_details);
    console.log("set user details async storage &&&");

}catch(error){
    console.log("in dataHandler login user details set ",error);
}


}
 
  render() {
    return (
      <ScrollView style={styles.Main}>
      <CustomHeader/>
      <View style={styles.MainContainer}>
        <Text style= {styles.TextComponentStyle}>User Login</Text>
        <TextInput 
          placeholder="Enter User Email"
          onChangeText={usernameOrEmail => this.setState({usernameOrEmail})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
        />
        <TextInput
          placeholder="Enter User Password" 
          onChangeText={password => this.setState({password})} 
          underlineColorAndroid='transparent' 
          style={styles.TextInputStyleClass} 
          secureTextEntry={true}
        /> 
        <TouchableOpacity style={styles.button} onPress={this.UserLoginFunction}>
            <Text style={styles.buttonText1}>Sign In</Text>
        </TouchableOpacity>
        <Button title="Back to Home" onPress={()=>this.props.navigation.navigate('HScreen')} style={styles.btn}/>
    </View>           
    </ScrollView>
    );
  }
}

class ProfileActivity extends Component
{
   static navigationOptions ={header: null,};

  render(){
     const {goBack} = this.props.navigation;
      return(
         /*<View style = { styles.MainContainer }>
            <Text style = {styles.TextComponentStyle}> { this.props.navigation.state.params.Email } </Text>
            <Button title="Click here to Logout" onPress={ () => goBack(null) } />
         </View>
         */
        <ScrollView style={styles.container1}>
        <CustomHeader/>
        <ImageBackground source={require('./../../Images/ww.jpg')} style={styles.banner}>
          <View style={styles.container}>
            <Text style={styles.txt1}>Sign in with OfferMe</Text>
            <Text style={styles.txt2}>We can personalize your OfferMe experience</Text>
          </View>
        </ImageBackground>
              
        <View style={styles.contain}>
          <TouchableOpacity style={styles.btnn} onPress={() => this.props.navigation.navigate('Categories')}>
            <Text style={styles.buttonText1}>Categories</Text>
          </TouchableOpacity>
        </View>
                
        <ViewCard/>
      </ScrollView>   
      );
   }
}
 
export default MainProject = StackNavigator(
{
  First: { screen: LoginActivity },
  Second: { screen: ProfileActivity },
});
 
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
width: 380,
textAlign: 'center',
marginBottom: 7,
height: 40,
borderWidth: 1,
borderColor: '#2196F3',
borderRadius: 5 ,
 
},
 
TextComponentStyle: {
  fontSize: 28,
  fontWeight: '600',
  color: "#004D40",
  textAlign: 'center', 
  marginBottom: 30,
  marginTop: 100,
 },
 buttonText1: {
  fontSize: 18,
  fontWeight: '600',
  color: '#ffffff',
  textAlign: 'center',
  marginVertical:8,
},

button: {
  backgroundColor: '#1c313a',
  width: 200,
  borderRadius: 25,
  height: 40,
  marginVertical: 20,
  alignItems: 'center', 
},
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