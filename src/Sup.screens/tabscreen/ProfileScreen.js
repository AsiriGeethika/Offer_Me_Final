import React, { Component } from 'react';
import {View,ScrollView,Image,Text,StyleSheet,TouchableOpacity,AsyncStorage} from 'react-native';
import CustomHeader from '../../components/Header/Header';
 
class STabScreen2 extends Component{
  constructor(props){
    super(props);
    this.state={
      data:null,
      isLoading:true
    }

} 
 componentDidMount(){
  this.getdata()
  console.log("cdccdccdccdccdccdcd")
 }
async getdata(){
  console.log("I am at token setasyncToken ");
  try{
      const data=await AsyncStorage.getItem("user_details");
      var dataJson=JSON.parse(data);
      console.log(data,"jbdjhgjshdgjhsgdhja ***");
      console.log(dataJson,"jbdjhgjshdgjhsgdhja ***");
      this.setState({
        data:dataJson,
        isLoading:false
      })
      console.log(dataJson.address+" addreess ***");
      console.log("in state data ",this.state.data);



  }catch(error){
      console.log("in dataHandler login token set ",error);
  }
  // this.props.navigation.navigate('SelectItem')

  
 } 


     render(){
       if(this.state.isLoading){
         return(
           <View>
             <Text>Wait</Text>
           </View>
         )
       }
       else{
        return(
          <ScrollView style={styles.container1}>
          <CustomHeader/>
          <View style={styles.cont}>
              <Text style={styles.txt2}>Profile</Text>
              <Image source={require('./../../Images/profile.png')} style={styles.banner}/>
              </View>
            <View style={styles.container}>
            {/* Icon: ({ tintColor }) => <Icon name="ios-log-out" size={17} */}
                <Text style={styles.txt1}>Name:</Text>
                <Text style={styles.txt1}> {this.state.data.name }</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.txt1}>Username:</Text>
                <Text style={styles.txt1}> {this.state.data.username }</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.txt1}>Address:</Text>
                <Text style={styles.txt1}> {this.state.data.address }</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.txt1}>Email:</Text>
                <Text style={styles.txt1}> {this.state.data.email }</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.txt1}>Contact No:</Text>
                <Text style={styles.txt1}> {this.state.data.telephone }</Text>
            </View>
            
      
      
      </ScrollView>
       )
       }
        
     }
}
export default STabScreen2;
const styles = StyleSheet.create({
  container1: {
      flex: 1,
      backgroundColor: '#fff',  
    },
    banner:{
      width: 200,
      height: 250,
      alignItems: 'center',
      justifyContent: 'center',  
    },
    txt1:{
      fontFamily: 'Cochin',
      fontSize: 18,
      color: '#000',
      fontWeight: '700',
    },
    txt2:{
      fontFamily: 'Cochin',
      fontSize: 26,
      color: 'black',
      fontWeight: '700',
      marginTop:10,
    },
    btn1:{
      marginTop: 30,
      marginBottom: 20,
      marginLeft: 20,
      marginRight: 20,
      padding: 5,
      backgroundColor: 'rgba(234, 162, 162,0.5)',

    },
    buttonText:{
      fontFamily: 'Cochin',
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    },
    cont:{
      flex: 1,
      alignItems: 'center',
      
    },
      container:{
        flex: 2,
        flexDirection:'row',
        alignItems:'flex-start',
        justifyContent: 'center',
        padding: 10,
        marginBottom: 10,
        borderColor:'#2196F3'
        
      },
    
});