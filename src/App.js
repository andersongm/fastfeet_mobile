import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text, SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import createRouter from './routes';
import SignIn from './pages/SignIn';
import Deliveries from './pages/Deliveries';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import DeliveryDetail from './pages/DeliveryDetail';

export default function App() {
  const signed = useSelector((state) => state.auth.signed); // false;
  return createRouter(signed);

  /* const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#7d40e7' },
          headerTintColor: '#fff',
        }}
      >
        <Stack.Screen
          name="Home"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            headerBackTitleVisible: false,
            headerBackImage: false,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          initialParams={{ styleStatusBar: 'dark-content' }}
          options={{
            headerShown: true,
            headerBackTitleVisible: false,
            headerTitle: false,
            headerStyle: {
              borderBottomWidth: 0,
              shadowColor: 'transparent',
              backgroundColor: '#7d40e7',
            },
          }}
        />
        <Stack.Screen
          name="DeliveryDetail"
          component={DeliveryDetail}
          options={{
            headerShown: true,
            title: 'Detalhes da Encomenda',
            headerBackTitleVisible: false,
            headerStyle: {
              borderBottomWidth: 0,
              shadowColor: 'transparent',
              backgroundColor: '#7d40e7',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  ); */
}
