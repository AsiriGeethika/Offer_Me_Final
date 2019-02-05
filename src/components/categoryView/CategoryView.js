//Get the categories list 

import React, { Component } from 'react';
import {View,ScrollView,ImageBackground,Text,StyleSheet,TouchableOpacity,ActivityIndicator,AsyncStorage} from 'react-native';
import CustomHeader from '../../components/Header/Header';
import { withNavigation } from 'react-navigation'
import { config } from '../../config/config';
const host = require('./../../../src/config/config')

class DrawerScreen4 extends Component{
constructor(props){
    super(props);
    this.state={
        data:null,
        isLoading:true
    }

}

componentDidMount(){
    console.log("CategoryView ******");
    console.log(this.props.navigation);
    this.getCategory()
}

getCategory(){
 
    fetch(host.config.hostname+'/api/home/allCategory', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }    
    }).then((response) => response.json())
      .then((res) => {
        console.log("I am in getCategory  ",res)
        this.setState({
            data:res,
            isLoading:false
        })
        console.log("Set state data ", this.state.data);
        console.log("Set state isLoading ", this.state.isLoading);
        })
        .done();
  }


    async dataHandler(name, id){
        console.log("I am at DataHandler "+name+" "+id);

        try{
            await AsyncStorage.setItem("category_name", name.toString());
            await AsyncStorage.setItem("category_id", id.toString());
            console.log("set async storage ");

        }catch(error){
            console.log("in dataHandler at CategoryView ",error);
        }
        this.props.navigation.navigate('SelectItem')
    }

     render(){
        if(this.state.isLoading){
            return(
                <View>
                    <ActivityIndicator size="large" color="red" />
                </View>

            )
        }else{
            console.log("getCategoryis else");
            console.log(" getCategories in state ", this.state.data);
            let View_Card=this.state.data.map((val, key)=>{
               return(
                   //Style here
               <View key={key} style={styles.btnn}>
                    <TouchableOpacity onPress={() => this.dataHandler(val.name, val.id)}>
                        <Text style={styles.Textstyle}>{val.name}</Text>
                    </TouchableOpacity>
               </View>
               )
        })
    
        return(
            <ScrollView>
                <View style={styles.cont}>
                  {View_Card}
                </View>
            </ScrollView>
         )
        }
     
    }
}
 
export default withNavigation(DrawerScreen4);


const styles = StyleSheet.create({
    Textstyle: {
        fontSize: 20,
        alignItems: 'center',
        fontWeight: '600',
        color: "#fff",
        textAlign: 'center', 
        //margin: 10,
        padding : 10,
    },
    btnn:{
        
        alignItems: 'center',
        justifyContent:'space-around',
        borderWidth: 3,
        borderColor: '#fff',
        margin: 10,
        padding:10,
        borderRadius: 5,
        fontSize:18,
        fontWeight:'500',
    },
    cont:{
        
        marginTop:50,
        marginBottom:50,
        padding:20,
        backgroundColor:'rgba(161, 159, 171,0.4)'

    },

});