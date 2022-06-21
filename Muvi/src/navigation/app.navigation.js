import {createStackNavigator} from "@react-navigation/stack";
import OnBoardScreen from "../screens/onBoardScreen";
import SignUp from "../screens/signUpScreen";
import Login from "../screens/LoginScreen";
import MainNavigation from "./main.navigation";


const Stack = createStackNavigator();

export default function AppNavigation() {
    return (
        <Stack.Navigator initialRouteName="OnBoard">
            <Stack.Screen 
            name="OnBoard"
            component={OnBoardScreen}
            options={{ headerShown: false}}
            />
            <Stack.Screen 
            name="SignUp"
            component={SignUp}
            options={{ headerShown: false}}
            />
            <Stack.Screen 
            name="Login"
            component={Login}
            options={{ headerShown: false}}
            />
            <Stack.Screen 
            name="MainNavigation"
            component={MainNavigation}
            options={{ headerShown: false}}
            />
        </Stack.Navigator>
    );
}