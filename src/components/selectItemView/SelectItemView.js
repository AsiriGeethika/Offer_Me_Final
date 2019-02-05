//Category wise View card

import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import {View,StyleSheet,Text,Image,ScrollView,TouchableOpacity,ActivityIndicator,AsyncStorage} from 'react-native';
import {Button,Body,Left,Icon,Right} from "native-base";
// import CustomImage from './CustomImage';

class SelectItemView extends Component{
    constructor(props){
        super(props);
        this.state={
            data:null,
            isLoading:true,
            id:''            
        }
    }

    componentDidMount(){
        console.log("I am in SelectView in component Did Mount");
        this.getItemId();
        // this.getAllJob()
    }

    async getItemId(){
        console.log("I am in selectItem View in getData");
    try{
        let id=await AsyncStorage.getItem("category_id");
        console.log("get async storage selectItemView "+id);
        this.setState({
            id:id,
            // isLoading:false
        })
        console.log("get async storage in state in select item "+this.state.id+" "+this.state.isLoading);
        this.getAllJob()



    }catch(error){
        console.log("in dataHandler at selectItem ",error);
    }
    }
    
    getAllJob(){
        fetch(`http://10.10.24.184:8080/api/home/${this.state.id}`, {

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
            console.log("Set state data selectItemView fdd ", this.state.data);
            console.log("Set state isLoading ", this.state.isLoading);
            })
            .done();
      }

      render(){
          
          console.log("Select item view render");
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
                <View key={key} style={styles.col2}  >
                <Text style={styles.add}>{val.discount}% Off</Text>
                <Image style={styles.image} source={{uri: val.photoUrl}}/>
                <Text style={styles.item}>{val.name}</Text>
                {/* str.substring(1, 4); */}
                <Text style={styles.date}>From {val.startDate.substring(0,10)} To {val.endDate.substring(0,10)}</Text>
                <Text style={styles.add1}>{val.oldPrice} LKR</Text>
                <Text style={styles.add2}>{val.newPrice} LKR</Text>

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
export default SelectItemView;

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
    date:{
        fontFamily: 'Cochin',
        fontSize: 14,
        color: 'rgb(193, 66, 66)',
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
    image:{
        width: '100%',
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'contain',
    },
  
  });
  