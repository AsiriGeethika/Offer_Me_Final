import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions, Image} from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import {Icon} from 'native-base';
import TabNavigator from '../tabNavigation/TabNavigator'
import DrawerScreen1 from '../../screens/drawerScreen/WishList'
import DrawerScreen2 from '../../screens/drawerScreen/AboutUs'
import DrawerScreen3 from '../../screens/drawerScreen/Settings'
import Logout from '../../authScreen/logout/Logout';
import DrawerScreen5 from '../../screens/drawerScreen/OrdersScreen';
// import { Right } from 'native-base';

const CustomDrawerComponent = (props)=>(
  <SafeAreaView>
      <View style={{height:150, backgroundColor:'white', alignItems:'center', justifyContent:'center'}}>
          <Image source={require('./../../Images/OfferLogo2.png')} style={{height:200, width:200, borderRadius:60}} />
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
  DrawerScreen5: {
    screen: DrawerScreen5,
    navigationOptions: {
      drawerLabel: 'Orders',
      drawerIcon: ({ tintColor }) => <Icon name="ios-cart" size={17} />,
    }
  },
  DrawerScreen1: {
    screen: DrawerScreen1,
    navigationOptions: {
      drawerLabel: 'Wish List',
      drawerIcon: ({ tintColor }) => <Icon name="ios-heart" size={17} />,
    }
  },

  DrawerScreen2: {
    screen: DrawerScreen2,
    navigationOptions: {
      drawerLabel: 'About Us',
      drawerIcon: ({ tintColor }) => <Icon name="ios-information-circle" size={17} />,
    }
  },

  DrawerScreen3: {
    screen: DrawerScreen3,
    navigationOptions: {
      drawerLabel: 'Settings',
      drawerIcon: ({ tintColor }) => <Icon name="ios-settings" size={17} />,
    }
  },
  Logout: {
    screen: Logout,
    navigationOptions: {
      drawerLabel: 'Logout',
      drawerIcon: ({ tintColor }) => <Icon name="ios-log-out" size={17} />,
    }
  },
  
},
{
  drawerPosition :"left",
  contentComponent:CustomDrawerComponent

});  

