import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/homeScreen";
import SearhScreen from "../screens/searchScreen";
import MyListScreen from "../screens/myListScreen";
import MoreScreen from "../screens/moreScreen";
import * as icons from "@expo/vector-icons"

const Tab = createBottomTabNavigator();

export default function MainNavigation () {
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
    
              if (route.name === "Home") {
                iconName = focused ? "home" : "home";
              } else if (route.name === "Search") {
                iconName = focused ? "search" : "search";
              } 
                else if (route.name === "MyList") {
                  iconName = focused ? "folder" : "folder";
              }
                else if (route.name === "More") {
                  iconName = focused ? "grid" : "grid";
              }
    
              return (<icons.Feather name={iconName} size={size} color={color} />);
            },
            tabBarActiveTintColor: "#fed130",
            tabBarInactiveTintColor: "white",
            tabBarStyle: { backgroundColor: "#202123"},
            tabBarShowLabel: false,
          })}
          >
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