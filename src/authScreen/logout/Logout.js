import React, { Component } from 'react';
import {View,Text,StyleSheet,Alert,AsyncStorage} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { StackActions, NavigationActions } from 'react-navigation';
const host = require('./../../../src/config/config')
 
class Logout extends Component{ 

    constructor(props){
        super(props);
        this.getToken();
        this.getDecision();
    }
    state={
        decision:'',
        token:""
    };

    handletoken=(text)=>{
      this.setState({token:text});
      console.log("In handletoken Function : "+this.state.token+" ******** ")
    }

    getDecision(){
        Alert.alert(
            'Logout comfirmation',
            'do you want to logout?',
            [
            {text:'Yes', onPress:()=>this.removeToken()},
            // {text:'No', onPress:()=>this.props.navigation.pop()}
            {text:'No', onPress:()=>this.props.navigation.goBack()}

            ],
            { cancelable: false}
        )
    }

    async getToken(){
        try{
          let thistoken=await AsyncStorage.getItem("token");
          console.log("In Logout Function : "+thistoken+" ******** ")
         // let token=JSON.stringify(thistoken)

          //alert(a)
          if(thistoken!=null){
            this.handletoken(thistoken);
            // this.removeToken()
          }else{
            this.props.navigation.Login();             
          }
        }catch(error){
          alert(error);
          this.props.navigation.Login();          
        }
      }

    
    async removeToken(){
            try{
                let thistoken=await AsyncStorage.removeItem("token");
                // await AsyncStorage.removeItem("token");
                let thtoken=await AsyncStorage.getItem("token");
                console.log("In remove Token Function : "+thtoken+" ******** ")
                alert("You are sucessfuly loggedout");
                // this.props.navigation.navigate('AppStackNavigator',{},NavigationActions.navigate({ routeName: 'Login' }));
                // this.props.navigation.navigate('Login');
                console.log("before nav");
                this.props.navigation.navigate("DefaultScreen");
                console.log("after nav");
                //alert(a) 
            }catch(error){
                alert("token get error");
                this.props.navigation.pop();
            }
      }

     render(){
        return(
            <View style={styles.container}> 
                <Text></Text>
             </View>
         )
     }
}
 
export default Logout;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        },
});