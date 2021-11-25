import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainScreen from './Screens/MainScreen';
import ConfirmationSuccess from './components/ConfirmationSuccess';
import UserPage from './components/UserPage';
import WeatherPage from './components/WeatherPage';
import HomePage from './components/HomePage';
import RegisterPage from './components/RegisterPage';
import PlantPage from './components/PlantPage';
import HarvestPage from './components/HarvestPage';
import EditPlant from './components/EditPlant';
import AddPlant from './components/AddPlant';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login"
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Login" component={HomePage}/>
        <Stack.Screen name="Register" component={RegisterPage}/>
        <Stack.Screen name="Main" component={MainScreen}/>
        <Stack.Screen name="UserPage" component={UserPage}/>
        <Stack.Screen name="WeatherPage" component={WeatherPage}/>
        <Stack.Screen name="PlantPage" component={PlantPage}/>
        <Stack.Screen name="HarvestPage" component={HarvestPage}/>
        <Stack.Screen name="EditPlant" component={EditPlant}/>
        <Stack.Screen name="AddPlant" component={AddPlant}/>
        <Stack.Screen name="Confirmation" component={ConfirmationSuccess}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}