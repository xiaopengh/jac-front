import { registerRootComponent } from 'expo';
import { Component } from 'react/cjs/react.production.min';

import Inscription from './screens/Inscription';
import Inscription1 from './screens/inscription1'

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


Inscription
Inscription1


const Stack = createNativeStackNavigator();

function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Inscription1">
          <Stack.Screen name="Inscription1" component={Inscription1} />
          <Stack.Screen name="Inscription" component={Inscription} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  registerRootComponent(App)

