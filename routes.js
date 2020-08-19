import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import Scanner from './src/components/Scanner';
import ScannedTextView from './src/components/ScannedTextView';
import { backgroundColor, textColor } from './src/utils/colors';

export default function Routes () {
  const Stack = createStackNavigator();
  return (

    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <Stack.Screen
          name="Scanner Testing"
          component={Scanner}
          options={{
            headerStyle: {
              backgroundColor,
            },
            headerTitleStyle: {
              color: textColor,
            },
          }}
        />
        <Stack.Screen
          name="ScannedTextView"
          component={ScannedTextView}
          options={{
            title: 'Código analisado',
            headerStyle: {
              backgroundColor,
            },
            headerTitleStyle: {
              color: textColor,
            },
            headerTintColor: '#9F81AA',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )

}