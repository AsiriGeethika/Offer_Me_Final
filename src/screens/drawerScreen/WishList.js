import React, { Component } from 'react';
import {View,Text,StyleSheet,TouchableOpacity,ScrollView,Image,ImageBackground,AsyncStorage,ActivityIndicator} from 'react-native';
import CustomHeader from '../../components/Header/Header';
 
class DrawerScreen1 extends Component{

    static navigationOptions = {
        header: null,
      };

constructor(props){
    super(props);
    this.state=({
        data:null,
        isLoading:true
    })

}
componentDidMount(){
    this.getuser_id();
}

async getuser_id(){    
    console.log("wishlist in getuser_id");
    try{
      var user_details=await AsyncStorage.getItem("user_details");


      console.log("wishlist in getuser_id $$$$$$ ");  
    console.log("wishlist in getuser_id user_details "+ user_details)

    this.setState({
      user_details:user_details,
    })

    console.log("wishlist in getuser_id user_details in state ", this.state.user_details);

    

  }catch(error){
      console.log("in dataHandler login token set ",error);
  }

  this.getWishlist();
  
}

getWishlist(){
    console.log("view wish list");

    var user_id=JSON.parse(this.state.user_details).id
    console.log("add Wish List_User_id  "+user_id);

    console.log("view wish list");


   
      fetch(`http://10.10.24.184:8080/api/wishList/WishLists/${user_id}`, {
        method: 'GET',
   
  })
  .then((response) => response.json())
  .then((responseJson) => {
    console.log("in show wishlist ",responseJson)
    this.wishlistHandler(responseJson);
  })
  }

  wishlistHandler(data){
      console.log("I am in wishlistHandler ", data)
      this.setState({
        data:data,
        isLoading:false
    })

    console.log("show Wishlist in state ",this.state.data);
  }

  deleteWishlist(id){
      //alert("Pending delete wait for Gera API")
      var user_id=JSON.parse(this.state.user_details).id
      var item_id=id
      fetch(`http://10.10.24.184:8080/api/wishList/DeleteWishList/${item_id}/${user_id}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
  }).then((response) => response.json())
        .then((responseJson) => {
          alert('Remove Successfully'),
        this.props.navigation.navigate('Home')
        })

  }

    render(){
        if(this.state.isLoading){
            return(
                <ScrollView style={styles.container1}>
                <CustomHeader/>
                <ImageBackground source={require('./../../Images/wishlist.jpg')} style={styles.banner}>
                      <View style={styles.container}>
                          <Text style={styles.txt1}>Wish List</Text>
                      </View>      
                </ImageBackground>
                <View>
                    <ActivityIndicator size="large" color="red" />
                </View>
                </ScrollView>  

            )
        }else{
            console.log("View Card is else");
            let View_Card=this.state.data.map((val, key)=>{
        // let View_Card=data.map((val, key)=>{
            return(
                <View key={key} style={styles.col}  >
                <Image style={styles.image} source={{uri: val.photoUrl}}/>
                <Text style={styles.item}>{val.name}</Text>
                <Text style={styles.add2}>{val.newPrice} LKR</Text>
                <TouchableOpacity style={styles.del} onPress={()=>this.deleteWishlist(val.id)}>
                    <Text delText>
                        Delete from list
                    </Text>
                </TouchableOpacity>
                
                </View>
            )
        })
    
        return(
            <ScrollView style={styles.container1}>
            <CustomHeader/>
              <ImageBackground source={require('./../../Images/wish.png')} style={styles.banner}>
                   <View style={styles.container}>
                      <Text style={styles.txt1}>Wish List</Text>
                  </View>
               
            </ImageBackground>
            <ScrollView>
                    {View_Card}
                </ScrollView>
            </ScrollView>  
            
         )
        }
     
    }


    }
     
export default DrawerScreen1;
    
    const styles = StyleSheet.create({
        container1: {
            flex: 2,
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
            fontSize: 26,
            color: '#000',
            fontWeight: '700',
        },
        col:{
            flex:1,
            padding:5,
            borderColor:'#0B0682',
            borderWidth: 2,
            marginBottom: 10,
            width:'100%',
            alignItems: 'center',
            backgroundColor: '#fff',
        },
        del:{
            backgroundColor:'red',
            padding:5,
        },
        cont:{
            flex: 2,
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
        },
        container:{
            flex: 2,
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: '#ffccbc',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.8,
            shadowRadius:3,
            elevation:1,
            alignSelf:'center',
            padding: 25,
            width: '70%',
            backgroundColor: 'rgba(234, 162, 162,0.5)',
            marginBottom: 50,
            marginTop: 50,
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
        add2:{
            fontFamily: 'Cochin',
            fontSize: 20,
            color: '#d50000',
            fontWeight: 'bold',
            alignItems: 'center',
            paddingBottom: 5,
        },
        image:{
            width: '100%',
            height: 150,
            alignItems: 'center',
            justifyContent: 'center',
            resizeMode: 'contain',
        },
        delText:{
            fontFamily: 'Cochin',
            fontSize: 16,
            color: '#000000',
            fontWeight: 'bold',
        },
    })