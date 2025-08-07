// App.js
import 'react-native-gesture-handler'; // Add this line at the top
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { View, Text, StyleSheet, LogBox } from 'react-native';
import History from 'CodaSDK/src/components/History'
import Translation from 'CodaSDK/src/components/Translation'
import Experience from 'CodaSDK/src/components/Experience'
import Settings from 'CodaSDK/src/components/Settings'
import { ModelProvider } from 'CodaSDK/src/components/context/ModelContext';
import { HistoryProvider } from 'CodaSDK/src/components/context/HistoryContext';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
LogBox.ignoreAllLogs();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({

        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Translation') {
            iconName = 'google-translate';
            return <MaterialCommunityIcons name={iconName} color={color} size={size} />;
          } else if (route.name === 'History') {
            iconName = 'history';
            return <MaterialCommunityIcons name={iconName} color={color} size={size} />;
          } else if (route.name === 'Settings') {
            iconName = 'settings';
            return <MaterialIcons name={iconName} color={color} size={size} />;
          }
        },
        tabBarActiveTintColor: '#734B9B', // Color for the active tab
        tabBarInactiveTintColor: 'gray', // Color for the inactive tabs
      })}
    >
      <Tab.Screen
        name="Translation"
        component={Translation}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <ModelProvider>
      <HistoryProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Main" component={MainTabs} options={{ headerShown: false }} />
            <Stack.Screen name="PreviewModel" component={Experience} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </HistoryProvider>
    </ModelProvider>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
  },
});
