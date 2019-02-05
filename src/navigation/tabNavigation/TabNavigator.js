import React from 'react';
import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';
import {Icon} from 'native-base';
import TabScreen1 from '../../screens/tabscreen/HomeScreen'
import TabScreen2 from '../../screens/tabscreen/ProfileScreen'
//import TabScreen3 from '../../screens/tabscreen/OrdersScreen'
import colors from '../../styles/colors';
import TabScreen4 from '../../screens/tabscreen/Notification';

const TabNavigation = createMaterialTopTabNavigator({
    Home:{
        screen:TabScreen1,
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

    Profile:{
        screen:TabScreen2,
        navigationOptions: {
            tabBarLabel: "",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="ios-person"
                    size={30}
                    color={tintColor} />
            )
        }
    },
    Messages:{
        screen:TabScreen4,
        navigationOptions: {
            tabBarLabel: "",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="ios-notifications"
                    size={20}
                    color={tintColor} />
            )
        }
    },

},{
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