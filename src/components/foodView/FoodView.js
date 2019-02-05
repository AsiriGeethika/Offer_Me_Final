import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import {View,StyleSheet,Text,Image,ScrollView,TouchableOpacity,ActivityIndicator} from 'react-native';
import {Button,Body,Left,Icon,Right} from "native-base";
// import CustomImage from './CustomImage';
<<<<<<< HEAD

=======
const host = require('./../../../src/config/config')
>>>>>>> 2cd2877f15e60f0a27702b6e6271bcd13664b4fa


const data=[
    {
       discount:'50',
       photoUrl:'csfsd.png',
       name:'Ladies Shoes',
       startDate:'15th Dec',
       endDate: '31st Dec',
       oldPrice: '3500 LKR',
       newPrice:'1750 LKR'
    },

    {
        discount:'20',
        photoUrl:'csfsd.png',
        name:'Nike Sports Shoes',
        startDate:'15th Dec',
        endDate: '31st Dec',
        oldPrice: '3500 LKR',
        newPrice:'1750 LKR'
     },

    {
       discount:'30',
       photoUrl:'csfsd.png',
       name:'Nike Sports Shoes',
       startDate:'15th Dec',
       endDate: '31st Dec',
       oldPrice: '3500 LKR',
       newPrice:'1750 LKR'
    }
]
class FoodView extends Component{
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
        // http://localhost:8080/api/home/5
<<<<<<< HEAD
        fetch(' http://10.10.6.39:8080/api/home/2', {
=======
        fetch(host.config.hostname+'/api/home/2', {
>>>>>>> 2cd2877f15e60f0a27702b6e6271bcd13664b4fa
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
        // let View_Card=data.map((val, key)=>{
            return(
                // https://ng.jumia.is/YX7Q5y5lIxyzZj5Nmh9wuByrmlM=/fit-in/680x680/filters:fill(white):sharpen(1,0,false):quality(100)/product/95/76869/1.jpg
                <View key={key} style={styles.col2}  >
                <Text style={styles.add}>{val.discount}% Off</Text>
                {/* <CustomImage imageSource={require('./../Images/Shoe.jpg')}/> */}
                {/* <CustomImage imageSource={require('https://drive.google.com/file/d/1Sa-95G3S_u7IRRuU1N0rrrxBopwv1lpP/view?usp=sharing')}/> */}
                
                <Image
                    style={{width: 50, height: 50}}
                    source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                />
                <Text style={styles.item}>{val.name}</Text>
                {/* str.substring(1, 4); */}
                <Text>From {val.startDate.substring(0,10)} To {val.endDate.substring(0,10)}</Text>
                <Text style={styles.add1}>{val.oldPrice}</Text>
                <Text style={styles.add2}>{val.newPrice}</Text>
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
export default FoodView;

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
  
  });
  