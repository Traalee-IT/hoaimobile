import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './BottomTabNavigate.js';
import Login from '../screen/Login.js';
import Start from '../screen/Start.js';
import Welcome from '../screen/Welcome.js';
import Signup from '../screen/Signup.js';
import FillProfile from '../screen/FillProfile.js';
import Forgotpassword from '../screen/Forgotpassword.js';
import Verify from '../screen/Verify.js';
import NewPassword from '../screen/NewPassword.js';
import Loading from '../screen/Loading.js';
import PaymentMethod from '../screen/PaymentMethod.js';
import NewCard from '../screen/NewCard.js';
const Stack = createNativeStackNavigator();

const StackNavigation = ({props}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
       initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
       
       <Stack.Screen name="Welcome" component={Welcome} />
      
      <Stack.Screen name="Start" component={Start} />

      <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen name="BottomTabs" component={BottomTabs} />

        <Stack.Screen name="Login" component={Login} />

        <Stack.Screen name="Signup" component={Signup} />

        <Stack.Screen name="FillProfile" component={FillProfile} />
        
        <Stack.Screen name="Forgotpassword" component={Forgotpassword} />

        <Stack.Screen name="Verify" component={Verify} />

        <Stack.Screen name="NewPassword" component={NewPassword} />

        <Stack.Screen name="PaymentMethod" component={PaymentMethod} />

        <Stack.Screen name="NewCard" component={NewCard} />
      
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation;

const styles = StyleSheet.create({})