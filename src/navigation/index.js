import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import AddScreen from '../screens/AddScreen/AddScreen';
import EditScreen from '../screens/EditScreen/EditScreen';
import { NativeBaseProvider,  Box ,Input,Icon,Button,Center, Stagger } from 'native-base';


const Stack = createNativeStackNavigator();
const Navigation = () => {
  const RootStack = createNativeStackNavigator();
  return (
    <NativeBaseProvider>
        <NavigationContainer>
        
          <Stack.Navigator >
              <Stack.Screen name="User Profiles">
              {props => <ProfileScreen {...props} />}
              </Stack.Screen>
              <Stack.Screen name="Add User">
              {props => <AddScreen {...props} />}
              </Stack.Screen>
              <Stack.Screen name="Profile">
              {props => <EditScreen {...props} />}
              </Stack.Screen>
          </Stack.Navigator>
            
        </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default Navigation;
