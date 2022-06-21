import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/homeScreen";
import SearhScreen from "../screens/searchScreen";
import MyListScreen from "../screens/myListScreen";
import MoreScreen from "../screens/moreScreen";

const Tab = createBottomTabNavigator();

export default function MainNavigation () {
    return (
        <Tab.Navigator>
            <Tab.Screen 
            name="Home"
            component={HomeScreen}
            options={{headerShown : false}}/>
            <Tab.Screen 
            name="Search"
            component={SearhScreen}
            options={{headerShown : false}}/>
            <Tab.Screen 
            name="MyList"
            component={MyListScreen}
            options={{headerShown : false}}/>
            <Tab.Screen 
            name="More"
            component={MoreScreen}
            options={{headerShown : false}}/>
        </Tab.Navigator>
    );
}