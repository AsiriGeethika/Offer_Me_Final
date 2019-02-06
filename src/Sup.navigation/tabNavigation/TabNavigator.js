import React from 'react';
import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';
import {Icon} from 'native-base';
import colors from '../../styles/colors';
import STabScreen1 from '../../Sup.screens/tabscreen/HomeScreen';
//import STabScreen2 from '../../Sup.screens/tabscreen/ProfileScreen';
import SDrawerScreen4 from '../../Sup.screens/tabscreen/OrdersScreen';
import SDrawerScreen5 from '../../Sup.screens/drawerScreen/Myorder';


const TabNavigation = createMaterialTopTabNavigator({
    Home:{
        screen:STabScreen1,
        navigationOptions: {
            tabBarLabel: "",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="home"
                    size={20}
                    color={tintColor} />
            )
        }
    },

    MyOrder:{
        screen:SDrawerScreen5,
        navigationOptions: {
            tabBarLabel: "",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="ios-cart"
                    size={30}
                    color={tintColor} />
            )
        }
    },

     MyAds:{
        screen:SDrawerScreen4,
        navigationOptions: {
            tabBarLabel: "My Ads",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="ios-book"
                    size={20}
                    color={tintColor} />
            )
        }
    },
},

{
    tabBarPosition:'bottom',
    // initialRouteName:'Notice',
    animationEnabled:true,
    tabBarOptions: {
        showIcon:true,
        // labelStyle: {
        //   fontSize: 12,
        // },
        // tabStyle: {
        //   width: 100,
        // },
        style: {
          backgroundColor: '#33b5e5',
          height:60,

        },
      }
});

export default createStackNavigator({ TabNavigation }, {headerMode:"none"});