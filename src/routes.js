/* eslint-disable react/jsx-props-no-spreading */
import React, { forwardRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Header from './components/Header';

const Stack = createStackNavigator();

function Routes(props, ref) {
  return (
    <NavigationContainer ref={ref}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          header: () => <Header {...props} />,
          headerBackTitleVisible: false,
          headerTintColor: '#FFF',
          headerStyle: { backgroundColor: '#141419' },
          cardStyle: { backgroundColor: '#141419' },
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default forwardRef(Routes);
