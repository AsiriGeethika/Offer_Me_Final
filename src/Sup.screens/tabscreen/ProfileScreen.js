import React, { Component } from 'react';
import {View,StyleSheet,Image,Text,Icon,TouchableOpacity,AsyncStorage} from 'react-native';
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
      console.log(data,"jbdjhgjshdgjhsgdhja *****");
      console.log(dataJson,"jbdjhgjshdgjhsgdhja *****");
      this.setState({
        data:dataJson,
        isLoading:false
      })
      console.log(dataJson.address+" addreess *****");
      console.log("in state data ",this.state.data);



  }catch(error){
      console.log("in dataHandler login token set ",error);
  }
  // this.props.navigation.navigate('SelectItem')

  
 } 


     render(){
       if(this.state.isLoading ){
         return(
           <View>
             <Text>Wait</Text>
           </View>
         )
       }
       else{
        return(
      
      <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={require('./../../Images/profile.png')}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>{this.state.data.username }</Text>
              
              <Text style={styles.info}>{this.state.data.address }</Text>
              
              
              
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>{this.state.data.email }</Text>  
              </TouchableOpacity>              
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>{this.state.data.telephone }</Text> 
              </TouchableOpacity>
            </View>
        </View>
      </View>
       )
       }
        
     }
}
export default STabScreen2;
const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
    height:200,
  },
  placeIcon: {
    color: 'white',
    fontSize: 26,
  },
  avatar: {
    width: 230,
    height: 230,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:30
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
});