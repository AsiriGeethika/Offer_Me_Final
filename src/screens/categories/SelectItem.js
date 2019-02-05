//category category page

import React, { Component } from 'react';
import {View,ScrollView,ImageBackground,Text,StyleSheet,TouchableOpacity,AsyncStorage,ActivityIndicator} from 'react-native';
import CustomHeader from '../../components/Header/Header';
// import FoodView from '../../components/foodView/FoodView';
import SelectItemView from '../../components/selectItemView/SelectItemView';
const host = require('./../../../src/config/config')
 
class SelectItem extends Component{
constructor(props){
    super(props);
    this.state=({
        name:'',
        id:'',
        catid:'',    // use for is subscribe route
        isLoading:true,
        isSubscribe:'',
        userid:''
    })
}

componentDidMount(){
    console.log("SelectItems ******");
    this.getData()
    this.getUserDetails()
    this.getCatId()
}

handleuid = (text) =>{
    this.setState({userid:text})
   // this.isSubscribe()
}

getUserDetails = async () => {
    let user_details=await AsyncStorage.getItem("user_details");
    let user_id=JSON.parse(user_details).id;
    this.handleuid(user_id)
}

handlecatid = (text) =>{
    this.setState({catid:text})
}

getCatId = async () => {
    let catid=await AsyncStorage.getItem("category_id"); 
    this.handlecatid(catid) 
}

isSubscribe(){ 
    alert(this.state.userid)
    alert(this.state.catid)
    fetch(`http://10.10.24.184:8080/api/subscribe/find/${1}/${this.state.userid}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
  }).then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson)
          this.setState({isSubscribe:true})
          console.log("wade hari")
        })
}



async getData(){

    console.log("I am in selectItem in getData");
    try{
        let name=await AsyncStorage.getItem("category_name");
        let id=await AsyncStorage.getItem("category_id");
        console.log("get async storage "+name+" "+id);
        this.setState({
            name:name,
            id:id,
            isLoading:false
        })
        console.log("get async storage in state in select item "+this.state.name+" "+this.state.id+" "+this.state.isLoading);


    }catch(error){
        console.log("in dataHandler at selectItem ",error);
    }
}


subscribe(){
    alert("You have Subdcribed category, Stay tuned for more offers")
    fetch(host.config.hostname+'/api/subscribe/subscrbeCategory', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            categoryId:this.state.id,
            userId:this.state.userid
        })
  }).then((response) => response.json())
        .then((responseJson) => {
          this.setState({isSubscribe:true})
          alert("You have Subdcribed category, Stay tuned for more offers")
        })
}


render(){
    // console.log("this.state.isLoading "+this.state.name)
    // console.log("this.state.isLoading "+this.state.isLoading)
    var name=this.state.name
    if(this.state.isLoading){
    // if(true){
        console.log("Name ********** !!!!!!!!!!!!");

        return(
            <View>
                <ActivityIndicator size="large" color="red" />
            </View>

        )
    }else{

    return(
        <View style={styles.container1}>
            <CustomHeader/>

            <ScrollView>

              <ImageBackground source={require('./../../Images/cate.jpg')} style={styles.banner}>
              <View style={styles.container}>
                  <Text style={styles.txt1}>{name}</Text>
                  <View style={styles.cont}>
                    <TouchableOpacity style={styles.btn1} onPress={()=>{this.subscribe()}}>
                        <Text style={styles.buttonText}>Subscribe</Text>
                    </TouchableOpacity>
                  </View>
              </View>
        </ImageBackground>

          <SelectItemView />

            </ScrollView>
            
        </View>        
     )
    }
 
}
}
 
export default SelectItem;


const styles = StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor: '#fff',  
      },
      banner:{
        width: '100%',
        height: 250,
        alignItems: 'center',
        justifyContent: 'center',  
      },
      txt1:{
        fontFamily: 'Cochin',
        fontSize: 30,
        color: '#fff',
        fontWeight: '700',
      },
      btn1:{
        marginTop: 30,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
        padding: 10,
        backgroundColor: 'rgb(205, 14, 14)',
  
      },
      buttonText:{
        fontFamily: 'Cochin',
        fontSize: 18,
        color: '#fff',
        fontWeight: '500',
      },
      cont:{
        flex: 2,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
      },
        container:{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          shadowColor: '#ffccbc',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.8,
          shadowRadius:3,
          elevation:1,
          width: '70%',
          alignSelf:'center',
          padding: 25,
          backgroundColor: 'rgba(170, 169, 177,0.5)',
          marginBottom: 50,
          marginTop: 50,
        },
      
});