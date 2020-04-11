import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import Scanner from './src/components/Scanner';
import ScannedTextView from './src/components/ScannedTextView';
import { Provider } from './store/Provider';
import { backgroundColor, textColor } from './src/utils/colors';
const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        >
          <Stack.Screen
            name="Scanner"
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
    </Provider>
  );
}
