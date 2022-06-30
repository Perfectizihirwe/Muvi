import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs"
import FeaturedScreen from "../screens/homeScreen/Featured";
import SeriesScreen from "../screens/homeScreen/Series";
import FilmsScreen from "../screens/homeScreen/Films";
import OriginalScreen from "../screens/homeScreen/Original";

const Tab = createMaterialTopTabNavigator();

export default function BottomTabView () {
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
        tabBarStyle: { backgroundColor: "#202123",},
        tabBarInactiveTintColor: "#fff",
        tabBarActiveTintColor: "#fed130",
        swipeEnabled: false,
        tabBarLabelStyle: {fontSize: 10, fontWeight: '700' },
        tabBarIndicatorStyle: {backgroundColor: "#fed130", width: 20, marginHorizontal: 40, height: 5, borderRadius: 20},
        })}>
            <Tab.Screen name="Featured" component={FeaturedScreen} />
            <Tab.Screen name="Series" component={SeriesScreen} />
            <Tab.Screen name="Films" component={FilmsScreen} />
            <Tab.Screen name="Original" component={OriginalScreen} />
        </Tab.Navigator>
    );
}