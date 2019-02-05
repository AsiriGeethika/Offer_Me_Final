import { AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ActivityIndicator,
  TouchableOpacity,
 ScrollView,
 Picker,
 TextInput
} from 'react-native';
import React, { Component} from 'react';
import CustomHeader from '../../components/Header/Header';
import * as firebase from 'firebase';
import RNFetchBlob  from 'react-native-fetch-blob';
import ImagePicker from 'react-native-image-crop-picker';

const config = {
  apiKey: "AIzaSyCk2O7gNv2NTk99OKq6Uqx2bjrGLJ0ost8",
  databaseURL: "https://tabdrower.firebaseio.com",
  storageBucket: "tabdrower.appspot.com",
}
firebase.initializeApp(config);

class createAd extends Component { 
  static navigationOptions = {
    header: null,
  };

  constructor() {
    super()
    this.state = {
        Name: '',
        oldPrice: '',
        newPrice: '',
        itemCode: '',
        rate: '',
        discount: '',
        startDate: '',
        endDate: '',
        photoUrl: '',
        categoryId: '',
        loading: false,
        dp: null
       
    }
  }
  openPicker(){
    this.setState({ loading: true })
    const Blob = RNFetchBlob.polyfill.Blob
    const fs = RNFetchBlob.fs
    window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
    window.Blob = Blob
    //const { uid } = this.state.user
    const uid = "12345"
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      mediaType: 'photo'
    }).then(image => {

      const imagePath = image.path

      let uploadBlob = null

      const imageRef = firebase.storage().ref(uid).child("dp.jpg")
      let mime = 'image/jpg'
      fs.readFile(imagePath, 'base64')
        .then((data) => {
          console.log(data);
          return Blob.build(data, { type: `${mime};BASE64` })
      })
      .then((blob) => {
          uploadBlob = blob
          return imageRef.put(blob, { contentType: mime })
        })
        .then(() => {
          uploadBlob.close()
          return imageRef.getDownloadURL()
        })
        .then((url) => {
          // this.setState({ photoUrl: url})
          let userData = {}
           console.log(url)
           alert(url)
          
          //userData[dpNo] = url
          //firebase.database().ref('users').child(uid).update({ ...userData})
          //"loading"=false
          let obj = {}
          obj["loading"] = false
          obj["dp"] = url
          this.setState(obj)
          console.log("set let")
          this.setState({
                      photoUrl: url
                 })
                 console.log("set let 1")
            

      })
      // .then((url) => url.json())
      //     .then((res) => {
      //       console.log("photurl 1")
      //       this.setState({
      //          photoUrl: res
      //       })
      //       console.log("photurl 2")
      //       })
      
      
        .catch((error) => {
          console.log(error)
        })
    })
    .catch((error) => {
      console.log(error)
    })
  }
UserRegistrationFunction = () =>{
 
  fetch('http://10.10.6.39:8080/api/item/addAdvertisment', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
  
        name: this.state.Name,
        oldPrice: this.state.oldPrice,
        newPrice: this.state.newPrice,
        itemCode: this.state.itemCode,
        rate: this.state.rate,
        discount: this.state.discount,
        startDate: this.state.startDate,
        endDate: this.state.endDate,
        photoUrl: this.state.photoUrl,
        categoryId: this.state.categoryId,
  
    })
    
  
  })
  // .then((res)=> console.log(" Add adverstisment ",res))
  
  // .then((response) => response.json())
  .then((resJson)=>{ this.dataHandler(resJson)})
  // .then((res)=> console.log(" Add adverstisment ",res))
  // .then((res)=> console.log(" Add adverstisment ",res))


     
  //       .then((responseJson) => {
  // // Showing response message coming from server after inserting records.
  //         Alert.alert(JSON.stringify(responseJs));  
  //       }).catch((error) => {
  //         console.error(error);
  //       });
      }

      dataHandler(data){
        console.log("Data Handler in add adverstment");
        console.log(data);
        console.log(data._bodyText);
        alert(data._bodyText)
      }

  render() {
    const dpr = this.state.dp ? (<TouchableOpacity onPress={ () => this.openPicker() }><Image
    style={{width: 100, height: 100, margin: 5}}
    source={{uri: this.state.dp}}
  /></TouchableOpacity>) : (<Button
 onPress={ () => this.openPicker() }
 title={ "Choose Picture" }
/>)

const dps = this.state.loading ? <ActivityIndicator animating={this.state.loading} /> : (<View style={styles.container}>
 <View style={{flexDirection: "row"}}>
   { dpr }
 </View>
</View>)
    return (
      <ScrollView style={styles.Main}>
      <CustomHeader/>
      <View style={styles.MainContainer}>
        <Text style= {styles.title}>Create Offer</Text>
      <View style={styles.View}>
        <View style={styles.View1}>
        
          <Text style={styles.cat}>Select a Category</Text>
        </View>
        <View style={styles.View2}>
          <Picker selectedValue={this.state.categoryId}
                  style={{height: 20, width: 150, borderColor:'#2196F3'}}
                  onValueChange={(itemValue, itemIndex) =>this.setState({categoryId: itemValue})}>
              <Picker.Item label="Clothing" value="1" />
              <Picker.Item label="Food" value="2" />
              <Picker.Item label="Finance" value="3" />
              <Picker.Item label="Services" value="4" />
              <Picker.Item label="Other" value="5" />
         </Picker>
        </View> 
      </View>
      <TextInput 
          placeholder="Name"
          onChangeText={Name => this.setState({Name : Name})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
          />
      <TextInput 
          placeholder="New price"
          onChangeText={newPrice => this.setState({newPrice : newPrice})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
          />
 
        <TextInput
          placeholder="Old price"
          onChangeText={oldPrice => this.setState({oldPrice : oldPrice})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
          />

        <TextInput 
          placeholder="Discount"
          onChangeText={discount => this.setState({discount : discount})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
          />
 
        <TextInput
          placeholder="Start Date"
          onChangeText={startDate => this.setState({startDate : startDate})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
          />
          <TextInput
          placeholder="End Date"
          onChangeText={endDate => this.setState({endDate : endDate})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
          />
          <TextInput
          placeholder="rate"
          onChangeText={rate => this.setState({rate : rate})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
          />
          <TextInput
          placeholder="itemCode"
          onChangeText={itemCode => this.setState({itemCode : itemCode})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
          />
          <View style={styles.contain2er}>
         { dps }
       </View>
          
 
        <TouchableOpacity  style={styles.button} onPress={this.UserRegistrationFunction}>
            <Text style={styles.buttonText}>Create Offer</Text>
        </TouchableOpacity> 
      </View>      
      </ScrollView> 
    );
  }
}
export default createAd;
 
const styles = StyleSheet.create({ 
Main:{
  flex: 1,
  backgroundColor: '#fff',
},
MainContainer :{
  alignItems: 'center',
  justifyContent: 'center',
  flex:1,
  backgroundColor: '#fff',
}, 
TextInputStyleClass: {
  textAlign: 'center',
  marginBottom: 7,
  height: 40,
  width: 380,
  borderWidth: 1,
  borderColor: '#2196F3',
  borderRadius: 5 ,
},
contain2er: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5FCFF',
},
title:{
  fontSize: 28, 
  fontWeight: '600',
  color: "#004D40", 
  textAlign: 'center', 
  marginBottom: 30,
  marginTop: 30,
},
buttonText: {
  fontSize: 18,
  fontWeight: '600',
  color: '#ffffff',
  textAlign: 'center',
  marginVertical:8,
},
button: {
  backgroundColor: '#1c313a',
  width: 300,
  borderRadius: 25,
  height: 40,
  marginVertical: 20, 
},
button1: {
  backgroundColor: '#7fffd4',
  width: 200,
  borderRadius: 25,
  height: 40,
  marginVertical: 20, 
},
View: {
  flexDirection: 'row',
  justifyContent:'space-around',
  alignItems:'flex-start',
  padding: 10,
  marginBottom: 10,
},
View1: {
  flexDirection: 'row',
  justifyContent:'space-around',
  alignItems:'flex-start',
  paddingTop: 10,
  paddingBottom:8,
  paddingRight:10,
  paddingLeft:10,
  marginBottom: 10,
},
banner:{
  width: 100,
  height: 100,
  alignItems: 'center',
  justifyContent: 'center',  
},
View2: {
  flexDirection: 'column',
  justifyContent:'space-around',
  alignItems:'flex-start',
  padding: 10,
  borderColor: '#2196F3',
  borderWidth: 1,
  borderRadius:5,
  marginBottom: 12,
},
cat:{
  fontSize:16,
}
});
