import React, { Component } from 'react';
import {View,StyleSheet,Image,TouchableOpacity} from 'react-native';
import { Container, Header, Content, Button, Text } from 'native-base';
 
class Login extends Component{
constructor(props){
    super(props);

} 

    loginHandler=()=>{
        this.props.navigation.navigate('Selection')
    }
     render(){
        return(
            <View style={styles.container}> 
                <View style={styles.header}>
                    <Image source={require('./../../Images/OfferMeLogo.png')} style = {styles.img1}  />  
                </View>
            
                <View style={{alignItems:'center'}}>
                    <TouchableOpacity style={styles.btnn} onPress={this.loginHandler}>
                        <Text style={styles.buttonText1}>Get Started!</Text>
                    </TouchableOpacity>
                </View>
            </View>
         )
     }
}
 
export default Login;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#33b5e5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    img1:{
        width:300,
        height:300
    },
    header:{
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20, 
    },
    btnn:{
        marginTop:80,
        marginBottom: 20,
    },
    buttonText1:{
        fontFamily: 'Cochin',
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
        alignItems: 'center',
    }
});