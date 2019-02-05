//Registered user's view card

import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import {View,StyleSheet,Text,Image,ScrollView,TouchableOpacity,ActivityIndicator,AsyncStorage} from 'react-native';
import {Button,Body,Left,Icon,Right} from "native-base";
import { withNavigation } from 'react-navigation';
const host = require('./../../../src/config/config');


class ViewCardAuth extends Component{
    constructor(props){
        super(props);
        this.state={
            data:null,
            isLoading:true
            
        }
    }

    componentDidMount(){
        this.getAllJob()
    }
    
    getAllJob(){
     
        fetch(host.config.hostname+'/api/home/all', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }    
        }).then((response) => response.json())
          .then((res) => {
            console.log("I am in View Card ",res)
            this.setState({
                data:res,
                isLoading:false
            })
            console.log("Set state data ", this.state.data);
            console.log("Set state isLoading ", this.state.isLoading);
            })
            .done();
      }

      async viewMoreDetails(item_id, discount, endDate, name, newPrice, oldPrice, photoUrl, startDate){

        console.log("viewMoreDetails in View Auth Card "+ item_id.toString());
          console.log("viewMoreDetails in View Auth Card "+ discount.toString());
          console.log("viewMoreDetails in View Auth Card "+ endDate.toString());
          console.log("viewMoreDetails in View Auth Card "+ name.toString());
          console.log("viewMoreDetails in View Auth Card "+ newPrice.toString());
          console.log("viewMoreDetails in View Auth Card "+ oldPrice.toString());
          console.log("viewMoreDetails in View Auth Card "+ photoUrl.toString());
          console.log("viewMoreDetails in View Auth Card "+ startDate.toString());

          try{
            await AsyncStorage.setItem("item_id", item_id.toString());
            await AsyncStorage.setItem("discount", discount.toString());
            await AsyncStorage.setItem("endDate", endDate.toString());
            await AsyncStorage.setItem("name", name.toString());
            await AsyncStorage.setItem("newPrice", newPrice.toString());
            await AsyncStorage.setItem("oldPrice", oldPrice.toString());
            await AsyncStorage.setItem("photoUrl", photoUrl.toString());
            await AsyncStorage.setItem("startDate", startDate.toString()); 

            console.log("set item details async storage %%%%%% ");
    
        }catch(error){
            console.log("in dataHandler login token set ",error);
        }
        
        this.props.navigation.navigate('ItemDetails')
      }

      setSelectData(){
        console.log("setSelectData in View Auth Card ", data);

      }

      render(){
        if(this.state.isLoading){
            return(
                <View>
                    <ActivityIndicator size="large" color="red" />
                </View>

            )
        }else{
            console.log("View Card is else");
            let View_Card=this.state.data.map((val, key)=>{
            return(
                
                <View key={key} style={styles.col2}  >
                <Text style={styles.add}>{val.discount}% Off</Text>
                <Image style={styles.image} source={{uri: val.photoUrl}}/>
                <Text style={styles.item}>{val.name}</Text>
                <Text style={styles.date}>From {val.startDate.substring(0,10)} To {val.endDate.substring(0,10)}</Text>
                <Text style={styles.add1}>{val.oldPrice} LKR</Text>
                <Text style={styles.add2}>{val.newPrice} LKR</Text>

                <TouchableOpacity style={styles.more}
                    onPress={()=>this.viewMoreDetails(val.id,val.discount, val.endDate, val.name, val.newPrice, val.oldPrice, val.photoUrl, val.startDate)}
                >
                    <Text style={styles.moreText}>
                        More Details
                    </Text>
                </TouchableOpacity>
                
                </View>
            )
        })
    
        return(
            <ScrollView>
                {View_Card}
            </ScrollView>
         )
        }
     
    }
}
export default withNavigation(ViewCardAuth);

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 5,
        backgroundColor: '#0B0943', 
    },
    container1:{
        flex: 2,
        flexDirection: 'column',
        flexWrap: 'wrap',
        margin: 5,
        marginBottom: 5,
    },
    more:{
        backgroundColor:'red',
        padding:5,
    },
    container2:{
        flex: 2,
        flexDirection: 'column',
        flexWrap: 'wrap',
        marginBottom: 5,
        margin: 5, 
    },
    col1:{
      flex: 1,
      padding:5,
      borderColor:'#0B0682',
      borderWidth: 2,
      marginBottom: 10,
      width:'100%',
      alignItems: 'center',
      backgroundColor: '#fff',
      
    },
    col2:{
      flex: 1,
      padding:5,
      borderColor:'#0B0682',
      borderWidth: 2,
      marginBottom: 10,
      width:'100%',
      alignItems: 'center',
      backgroundColor: '#fff',
      
    },
    contentBanner:{
        width: '100%',
        alignItems: 'center',
        justifyContent:'center',
        padding: 5,
    },
    date:{
        fontFamily: 'Cochin',
        fontSize: 14,
        color: 'rgb(193, 66, 66)',
    },
    add:{
      fontFamily: 'Cochin',
      fontSize: 30,
      color: '#fff',
      fontWeight: 'bold',
      alignItems: 'flex-start',
      backgroundColor: '#d50000',
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 10,
      paddingTop:10,
      marginBottom: 10,
      marginTop: 5,
      
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
      fontWeight: '500',
      alignItems: 'center',
      paddingBottom: 5,
      marginTop: 10,
    },
    image:{
        width: '100%',
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'contain',
    },
    moreText:{
        fontFamily: 'Cochin',
        fontSize: 16,
        color: '#000000',
        fontWeight: 'bold',
    },
  
  });
  