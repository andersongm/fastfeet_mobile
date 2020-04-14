import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Deliveries from '../Deliveries';
import Profile from '../Profile';
import DeliveryDetail from '../DeliveryDetail';
import NewProblem from '../Problem/New';
import ViewProblem from '../Problem/View';
import ConfirmDelivery from '../Deliveries/Confirm';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function DeliveriesTab({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Deliveries">
      <Stack.Screen
        name="Entregas"
        component={Deliveries}
        options={{
          headerShown: false,
          headerTitle: false,
          headerStyle: {
            borderBottomWidth: 0,
            shadowColor: 'transparent',
          },
        }}
      />
      <Stack.Screen
        name="DeliveryDetail"
        component={DeliveryDetail}
        options={{
          headerShown: true,
          headerTintColor: '#fff',
          title: 'Detalhes da Encomenda',
          headerBackTitleVisible: false,
          headerStyle: {
            borderBottomWidth: 0,
            shadowColor: 'transparent',
            backgroundColor: '#7d40e7',
          },
        }}
      />
      <Stack.Screen
        name="NewProblem"
        component={NewProblem}
        options={{
          headerShown: true,
          headerTintColor: '#fff',
          title: 'Informar Problema',
          headerBackTitleVisible: false,
          headerStyle: {
            borderBottomWidth: 0,
            shadowColor: 'transparent',
            backgroundColor: '#7d40e7',
          },
        }}
      />
      <Stack.Screen
        name="ViewProblem"
        component={ViewProblem}
        options={{
          headerShown: true,
          headerTintColor: '#fff',
          title: 'Visualizar Problema',
          headerBackTitleVisible: false,
          headerStyle: {
            borderBottomWidth: 0,
            shadowColor: 'transparent',
            backgroundColor: '#7d40e7',
          },
        }}
      />
      <Stack.Screen
        name="ConfirmDelivery"
        component={ConfirmDelivery}
        options={{
          headerShown: true,
          headerTintColor: '#fff',
          title: 'Confirmar Entrega',
          headerBackTitleVisible: false,
          headerStyle: {
            borderBottomWidth: 0,
            shadowColor: 'transparent',
            backgroundColor: '#7d40e7',
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default function Dashboard() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#7D40E7',
        inactiveTintColor: '#999',
        keyboardHidesTabBar: true,
      }}
      backBehavior="initialRoute"
      shifting
      sceneAnimationEnabled={false}
    >
      <Tab.Screen
        name="Deliveries"
        component={DeliveriesTab}
        options={{
          unmountOnBlur: true,
          tabBarLabel: 'Entregas',
          tabBarIcon: ({ color, size }) => (
            <Icon name="reorder" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          unmountOnBlur: true,
          tabBarLabel: 'Meu Perfil',
          tabBarIcon: ({ color, size }) => (
            <Icon name="account-circle" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
