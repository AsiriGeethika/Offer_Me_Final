import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions, Image} from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import {Icon} from 'native-base';
import TabNavigator from '../../Sup.navigation/tabNavigation/TabNavigator';
//import DrawerScreen1 from '../../screens/drawerScreen/WishList'
import SDrawerScreen2 from '../../Sup.screens/drawerScreen/AboutUs';
import SDrawerScreen3 from '../../Sup.screens/drawerScreen/Settings'
import SDrawerScreen4 from '../../Sup.screens/drawerScreen/Myorder';
import Logout from '../../authScreen/logout/Logout';
// import { Right } from 'native-base';

const CustomDrawerComponent = (props)=>(
  <SafeAreaView>
      <View style={{height:150, backgroundColor:'white', alignItems:'center', justifyContent:'center'}}>
          <Image source={require('./../../Images/OfferLogo2.png')} style={{height:120, width:120, borderRadius:60}} />
      </View>
      <ScrollView>
          <DrawerItems {...props} />
      </ScrollView>
  </SafeAreaView>
)


export default createDrawerNavigator({
  Home: {
    screen: TabNavigator, 
    navigationOptions: {
      drawerLabel: 'Home',
      drawerIcon: ({ tintColor }) => <Icon name="home" size={17} />,
    }
  },
  SDrawerScreen4: {
    screen: SDrawerScreen4,
    navigationOptions: {
      drawerLabel: 'Received Orders',
      drawerIcon: ({ tintColor }) => <Icon name="ios-cart" size={17} />,
    }
  },
  SDrawerScreen2: {
    screen: SDrawerScreen2,
    navigationOptions: {
      drawerLabel: 'About Us',
      drawerIcon: ({ tintColor }) => <Icon name="ios-information-circle" size={17} />,
    }
  },

  SDrawerScreen3: {
    screen: SDrawerScreen3,
    navigationOptions: {
      drawerLabel: 'Settings',
      drawerIcon: ({ tintColor }) => <Icon name="ios-settings" size={17} />,
    }
  },
  Logout: {
    screen: Logout,
    navigationOptions: {
      drawerLabel: 'Log Out',
      drawerIcon: ({ tintColor }) => <Icon name="ios-log-out" size={17} />,
    }
  },
  
},
{
  drawerPosition :"left",
  contentComponent:CustomDrawerComponent

});  

