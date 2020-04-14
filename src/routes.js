import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';

const Stack = createStackNavigator();

export default function createRouter(signedIn = false) {
  return !signedIn ? (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  ) : (
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerBackTitleVisible: false,
          headerBackImage: false,
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
