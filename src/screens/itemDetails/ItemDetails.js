import { StyleSheet, View,TouchableOpacity, TextInput, Button, Text, Alert, Image,ScrollView,AsyncStorage } from 'react-native';
import React, { Component} from 'react';
import CustomImage from './../../components/CustomImage';
const host = require('./../../../src/config/config')
 
class ItemDetails extends Component { 
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props)
    this.state = {
      user_details:'',
      discount:'',
      endDate:'',
      name:'',
      newPrice:'',
      oldPrice:'',
      photoUrl:'',
      startDate :''
    }
  }

  componentDidMount(){
    this.getMoreDetails();
  }

  // http://localhost:8080/api/user/

  addWishList(){
    console.log("Add wish list");

    var user_id=JSON.parse(this.state.user_details).id;
    console.log("addWishList_User_id "+user_id);
    console.log("addWishList_Item_id "+this.state.item_id);

   
      fetch('http://10.10.24.184:8080/api/wishList/addWishListList', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        
        body: JSON.stringify({
          userId:user_id,
          itemId:this.state.item_id
          

          // userId: 1,
	        // itemId: 4
        })
   
  })
  // .then((response) => console.log(response))
  .then((response) => {
    console.log("in Item Details ",response)
    console.log("in Item Details wishlist status ",response._bodyText)
    alert(response._bodyText+" to wish list")

  })
  }
  
  wishlistHandler(data){
      console.log("wishlistHandler in item Details "+data);

  }

  addOrder(){
    console.log("add order");

    var user_id=JSON.parse(this.state.user_details).id;
    console.log("addWishList_User_id "+user_id);
    console.log("addWishList_Item_id "+this.state.item_id);

   
      fetch(host.config.hostname+'/api/order/addOrderList', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        
        body: JSON.stringify({
          itemId:this.state.item_id,
          userId:user_id,
        })
   
  })
  // .then((response) => console.log(response))
  .then((response) => {
    console.log("in Item Details add order ",response)
    console.log("in Item Details add order status ",response._bodyText)
    alert(response._bodyText+" to your orders")

  })
  }


  async getMoreDetails(){    
    console.log("getMoreDetails in ItemDetails");
    try{
      var item_id=await AsyncStorage.getItem("item_id");
      var user_details=await AsyncStorage.getItem("user_details");
      var discount=await AsyncStorage.getItem("discount");
      var endDate=await AsyncStorage.getItem("endDate");
      var name=await AsyncStorage.getItem("name");
      var newPrice=await AsyncStorage.getItem("newPrice");
      var oldPrice=await AsyncStorage.getItem("oldPrice");
      var photoUrl=await AsyncStorage.getItem("photoUrl");
      var startDate=await AsyncStorage.getItem("startDate"); 
      var startDate=await AsyncStorage.getItem("startDate"); 
      var startDate=await AsyncStorage.getItem("startDate"); 


      console.log("get more details in Item details $$$$$$ ");

    console.log("get more details in Item details user_details "+ item_id);   
    console.log("get more details in Item details user_details "+ user_details);   
    // var user_detailsJson=JSON.parse(user_details);
    // console.log("get more details in Item details user_details ",user_detailsJson ); 
    console.log("get more details in Item details "+ discount);
    console.log("get more details in Item details "+ endDate);
    console.log("get more details in Item details "+ name);
    console.log("get more details in Item details "+ newPrice);
    console.log("get more details in Item details "+ oldPrice);
    console.log("get more details in Item details "+ photoUrl);
    console.log("get more details in Item details "+ startDate);

    this.setState({
      item_id:item_id,
      user_details:user_details,
      discount:discount,
      endDate:endDate,
      name:name,
      newPrice:newPrice,
      oldPrice:oldPrice,
      photoUrl:photoUrl,
      startDate:startDate,
    })

    console.log("get more details in Item details in state ", this.state.item_id);
    console.log("get more details in Item details in state ", this.state.user_details);
    console.log("get more details in Item details in state "+ this.state.discount);
    console.log("get more details in Item details in state "+ this.state.endDate);
    console.log("get more details in Item details in state "+ this.state.name);
    console.log("get more details in Item details in state "+ this.state.newPrice);
    console.log("get more details in Item details in state "+ this.state.oldPrice);
    console.log("get more details in Item details in state "+ this.state.photoUrl);
    console.log("get more details in Item details in state "+ this.state.startDate);

    

  }catch(error){
      console.log("in dataHandler login token set ",error);
  }
  
}

  
 

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.head}>
            <Text style={styles.add}>{this.state.discount}% OFF</Text>
          </View>
          {/* <Image style={styles.image} source={{uri: this.state.photoUrl}}/> */}
          <Image source={{uri: this.state.photoUrl}} style={styles.banner}/>
          <View style={styles.container1}>
            <Text style={styles.item}>{this.state.name}</Text>
            <Text style={styles.add1}>{this.state.oldPrice} LKR</Text>
            <Text style={styles.add2}>{this.state.newPrice} LKR</Text>
            <Text style={styles.item}>From {this.state.startDate.substring(0, 10)}</Text>
            <Text style={styles.item}>To {this.state.endDate.substring(0, 10)}</Text>
            {/* <Text style={styles.item}>at KANDY</Text> */}
          </View>
        </View>
        <View style={styles.cont}>   
                  <TouchableOpacity style={styles.btn1} onPress={() => this.addWishList()}>
                    <Text style={styles.buttonText}>Add to Wish List</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.btn1} onPress={() => this.addOrder()}>
                    <Text style={styles.buttonText}>Order Item</Text>
                  </TouchableOpacity>
                </View>
        </ScrollView>  
    );
  }
}
export default ItemDetails;
 
const styles = StyleSheet.create({ 
  container:{
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    padding: 5,
    backgroundColor: '#fff',  
  },
  container1:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  
  add:{
    fontFamily: 'Cochin',
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d50000',
    padding: 3,
    marginBottom: 10,
    marginTop: 5,  
  },
  banner:{
    width: '100%',
    height: 220,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain',

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
        fontWeight: 'bold',
        alignItems: 'center',
        paddingBottom: 5,
        marginTop: 10,
      },
      cont:{
        flex: 2,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'column',
      },
      btn1:{
        width: 400,
        alignItems:'center',
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
        paddingTop: 20,
        backgroundColor: 'rgba(222, 25, 22, 0.7)',
        marginTop: 15,
        marginBottom: 5,
        marginLeft: 20,
        marginRight: 20,
    
      },
      buttonText:{
        fontFamily: 'Cochin',
        fontSize: 16,
        color: '#000000',
        fontWeight: 'bold',
      },
});
