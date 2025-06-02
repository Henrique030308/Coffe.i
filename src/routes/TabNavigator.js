import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

import Home from '../screens/Home'
import Detalhes from '../screens/Detalhes'
import Local from '../screens/Local'
import Cart from '../screens/Cart'
import User from '../screens/User'

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={Home}
      options={{
        tabBarActiveTintColor: '#B98875',
        tabBarLabel: 'Caffee',
        tabBarIcon: () => (
          <Image
          style={{width: 24, height: 24}}
          source={require("../../assets/img/casa.png")}
        />
        ),
      }}
      />
            <Tab.Screen name="Local" component={Local}
      options={{
        tabBarActiveTintColor: '#B98875',
        tabBarLabel: 'Lojas',
        tabBarIcon: () => (
          <Image
          style={{width: 24, height: 24}}
          source={require("../../assets/img/marcador.png")}
        />
        ),
      }}
      />
            <Tab.Screen name="Cart" component={Cart}
      options={{
        tabBarActiveTintColor: '#B98875',
        tabBarLabel: 'Carrinho',
        tabBarIcon: () => (
          <Image
          style={{width: 24, height: 24}}
          source={require("../../assets/img/copo.png")}
        />
        ),
      }}
      />
            <Tab.Screen name="User" component={User}
      options={{
        tabBarActiveTintColor: '#B98875',
        tabBarLabel: 'Login',
        tabBarIcon: () => (
          <Image
          style={{width: 24, height: 24}}
          source={require("../../assets/img/user (1).png")}
        />
        ),
      }}
      />
      {/* <Tab.Screen name="Detalhes" component={Detalhes} /> */}
    </Tab.Navigator>
  )
}