import { NavigationContainer } from "@react-navigation/native";
import AppNavigation from "./app.navigation";

export default function RootNavigation () {
    return(
        <NavigationContainer>
        <AppNavigation />
        </NavigationContainer>
    );
}