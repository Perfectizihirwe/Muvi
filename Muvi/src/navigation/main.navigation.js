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
              } else if (route.name === "Consult") {
                iconName = focused ? "chatbubbles" : "chatbubbles";
              } 
                else if (route.name === "Science") {
                  iconName = focused ? "document" : "document";
              }
                else if (route.name === "Profile") {
                  iconName = focused ? "person" : "person";
              }
    
              return (<icons.Ionicons name={iconName} size={size} color={color} />);
            },
            tabBarActiveTintColor: "#16278e",
            tabBarInactiveTintColor: "gray",
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