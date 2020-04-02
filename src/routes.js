import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';

function createRouter(signedIn = false) {
  const Stack = createStackNavigator();
  console.tron.log('chamando createRouter:', signedIn);

  return (
    <Stack.Navigator headerMode="none">
      {!signedIn ? (
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />
      ) : (
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            headerBackTitleVisible: false,
            headerBackImage: false,
            headerShown: false,
          }}
        />
      )}
    </Stack.Navigator>
  );

  // return (
  //   <NavigationContainer>
  //     <Stack.Navigator headerMode="none">
  //       {!signedIn ? (
  //         <Stack.Screen
  //           name="SignIn"
  //           component={SignIn}
  //           options={{ headerShown: false }}
  //         />
  //       ) : (
  //         <Stack.Screen
  //           name="Dashboard"
  //           component={Dashboard}
  //           options={{
  //             headerBackTitleVisible: false,
  //             headerBackImage: false,
  //             headerShown: false,
  //           }}
  //         />
  //       )}
  //     </Stack.Navigator>
  //   </NavigationContainer>
  // );
}

export default createRouter;
