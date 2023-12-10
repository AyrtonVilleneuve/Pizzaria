import { StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import PizzaScreen from '../screens/PizzaScreen';
import CartScreen from '../screens/CartScreen';
import OrderData from '../screens/OrderData';
import Login from '../screens/Login';
import CreateAccount from '../screens/CreateAccount';
import ForgotPassWord from '../screens/ForgotPassword';

const StackNavigator = () => {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
      <Stack.Screen name="CreateAccount" component={CreateAccount} options={{title: 'Criar Usuário', headerTintColor:'black'}}/>
      <Stack.Screen name="ForgotPassWord" component={ForgotPassWord} options={{title: 'Recuperar Senha', headerTintColor:'black'}}/>
      <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Home', headerTintColor:'black'}}/>
      <Stack.Screen name="Pizza" component={PizzaScreen} options={{headerShown:false}}/>
      <Stack.Screen name="Cart" component={CartScreen} options={{title: 'Carrinho De Compras', headerTintColor:'black'}} />
      <Stack.Screen name="Order" component={OrderData} options={{title: 'Status Do Pedido', headerTintColor:'black'}}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default StackNavigator

