import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {AppTabNavigator} from './appTabNavigator';
import Settings from '../screens/update';
import NotificationScreen from '../screens/notification';
import MyUpcomingEvents from '../screens/myEvents';


export const AppDrawerNavigator = createDrawerNavigator({
    Home: {screen: AppTabNavigator},
    Settings: {screen: Settings},
    Notifications: {screen: NotificationScreen},
    UpcomingEvents: {screen: MyUpcomingEvents}
},{
    initialRouteName: 'Home'
}
)