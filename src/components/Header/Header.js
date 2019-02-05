import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import {View,Text,StyleSheet,Image} from 'react-native';
import {Button,Body,Content,Header,Title,Left,Icon,Right} from "native-base";
// import DrawerNavigation from '../../navigations/DrawerNavigation';
import colors from '../../styles/colors';
 
class CustomHeader extends Component{
    constructor(props){
        super(props);
    } 

     render(){
         const { title, openDrawer, iconName,leftPress, type,iconNameRight } = this.props;
         const rightIcon = type==='sub'? 
            <Icon      
                name={iconNameRight}
                style={{fontSize: 23, color: '#ffffff'}} 
            /> :
            <Button
            transparent
            // onPress={() => this.props.navigation.navigate("DrawerOpen")}
            // onPress={() => this.props.navigation.openDrawer()}
            onPress={openDrawer}
            // onPress={() => navigation.openDrawer()}>

            >
            <Icon name="menu" />
        </Button>

        return(
            <View style={styles.header}> 
            <Left>
               {rightIcon}
            </Left>
                <Image source={require('./../../Images/OfferMeLogo.png')} style = {styles.img1}  /> 
                <Right>
                   
                </Right> 
             </View>
         )
     }
}
 
export default CustomHeader;

CustomHeader.propsTypes={
    title:PropTypes.string,
    openDrawer: PropTypes.func.isRequired,
    iconName:PropTypes.string,
    leftPress:PropTypes.func,
    type:PropTypes.string,
    iconNameRight:PropTypes.string
}


const styles = StyleSheet.create({
    header: {
        height: 80,
        backgroundColor: '#33b5e5',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20, 
    },
          img1:{
            width:200,
            height:200
          },
          txt:{
            fontSize:35,
            marginLeft:10,
            fontWeight: "600",
            fontStyle: 'italic',
            color:'#fff'
          }
});