import React from 'react';
import RootNavigation from './src/navigation/root.navigation';
import {SafeAreaProvider} from "react-native-safe-area-context"


export default function App() {
  return (
    <SafeAreaProvider>
     <RootNavigation />
    </SafeAreaProvider>
  );
}