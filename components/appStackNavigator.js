import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../screens/home';
import EventDetails from '../screens/eventDetails';


export const AppStackNavigator = createStackNavigator({
    Home: {screen: HomeScreen, 
    navigationOptions: {headerShown: false}},
    EventDetails: {screen: EventDetails,
    navigationOptions: {headerShown: false}}
},{

    initialRouteName: 'Home'
})