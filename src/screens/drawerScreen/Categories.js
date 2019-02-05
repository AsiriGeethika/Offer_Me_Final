import React, { Component } from 'react';
import {View,ScrollView,ImageBackground,Text,StyleSheet,TouchableOpacity} from 'react-native';
import CustomHeader from '../../components/Header/Header';
import CategoryView from '../../components/categoryView/CategoryView'
 
class DrawerScreen4 extends Component{
constructor(props){
    super(props);
} 

componentDidMount(){
    console.log("Category  ******");
    console.log(this.props.navigation);
}
     render(){
         console.log("Hello I am in Categories");
         console.log(this.props.navigation);
        return(
        <View style={StyleSheet.container}>
        <CustomHeader/>
        <ScrollView >
            <ImageBackground source={require('./../../Images/solid.jpg')} style={styles.background}>
                <View style={styles.banner}>
                <CategoryView />
                </View>
            </ImageBackground>
        </ScrollView>
        </View>
         )
     }
}
 
export default DrawerScreen4;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    // banner:{
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     shadowColor: '#ffccbc',
    //     shadowOffset: {width: 0, height: 2},
    //     shadowOpacity: 0.8,
    //     shadowRadius:3,
    //     elevation:1,
    //     alignSelf:'center',
    //     padding: 5,
    //     width: '70%',
    //     backgroundColor: 'rgba(130, 138, 139,0.5)',
    //     marginBottom: 30,
    //     marginTop: 30,
    // },
    background:{
        width:'100%',
        height:'100%',
        flex: 1,
        //backgroundColor:'rgb(27, 14, 107)',
        justifyContent: 'center',
        alignItems:'center',
    },


});