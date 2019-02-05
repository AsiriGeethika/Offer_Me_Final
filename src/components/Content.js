import React, { Component } from 'react';
import { StyleSheet,Text,View,Image} from 'react-native';
import CustomImage from './CustomImage';

class Content extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container1}>     
            <View style={styles.col1}>
            <Text style={styles.add}>SALE</Text>
              <CustomImage imageSource={require('./../Images/offer.png')}/>
              <Text style={styles.item}>Stock Clearance Sale</Text>
              <Text style={styles.add2}>1st - 30th Dec</Text>
            </View>
            <View style={styles.col1}>
                <Text style={styles.add}>20% OFF</Text>
                <CustomImage imageSource={require('./../Images/frock.jpg')}/>
                <Text style={styles.item}>Ladies Frock</Text>
                <Text style={styles.add1}>3000 LKR</Text>
                <Text style={styles.add2}>2700 LKR</Text>
            </View>
            <View style={styles.col1}>
                <Text style={styles.add}>Buy 2 Free 1</Text>
                <CustomImage imageSource={require('./../Images/shirt.jpg')}/>
                <Text style={styles.item}>Nike Sports Shoes</Text>
                <Text style={styles.add2}>Save 1750 LKR</Text>
            </View>
        </View> 
        <View style={styles.container2}>
            <View style={styles.col2}>
            <Text style={styles.add}>25% OFF</Text>
                <CustomImage imageSource={require('./../Images/sportshoes.jpeg')}/>
                <Text style={styles.item}>Nike Sports Shoes</Text>
                <Text style={styles.add1}>2500 LKR</Text>
                <Text style={styles.add2}>1875 LKR</Text>
              </View>
            <View style={styles.col2}>
                <Text style={styles.add}>5% OFF</Text>
                <CustomImage imageSource={require('./../Images/Shoe.jpg')}/>
                <Text style={styles.item}>Ladies Shoes</Text>
                <Text style={styles.add1}>4000 LKR</Text>
                <Text style={styles.add2}>3800 LKR</Text>
            </View>
            <View style={styles.col2}>
                <Text style={styles.add}>50% OFF</Text>
                <CustomImage imageSource={require('./../Images/xlarge.jpg')}/>
                <Text style={styles.item}>Ladies Skirt</Text>
                <Text style={styles.add1}>1500 LKR</Text>
                <Text style={styles.add2}>750 LKR</Text>
            </View>
        </View>    
            <View style={styles.contentBanner}></View>
      </View>
    );
  }
}
export default Content;

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
    alignItems: 'center',
    backgroundColor: '#d50000',
    padding: 3,
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
    fontSize: 16,
    color: '#1C2331',
    fontWeight: 'bold',
    alignItems: 'center',
    paddingBottom: 5,
    marginTop: 10,
  },

});
