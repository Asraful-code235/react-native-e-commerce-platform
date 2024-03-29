import { View, Text } from 'react-native';
import React, { useContext } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import Orders from './Orders';
import CustomerLists from './CustomerLists';
import OrderListScreen from './OrderList';
import Payments from './Payments';
import Login from './Login';
import Register from './Register';
import { AuthContext } from '../utils/AuthContext';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AppScreen = () => {
  // if userToken is available then user does not need to log in again
  const { userToken } = useContext(AuthContext);
  return (
    <NavigationContainer>
      {/* In case app login does not work remover the !(not) from line 21 */}
      {/* 
      add this line in the next line

            userToken !== null
      */}
      {userToken == null ? (
        <Stack.Navigator>
          <Stack.Screen name="orders" component={Orders} />
          <Stack.Screen name="customerLists" component={CustomerLists} />
          <Stack.Screen name="orderList" component={OrderListScreen} />
          <Stack.Screen name="payment" component={Payments} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="register" component={Register} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default AppScreen;
