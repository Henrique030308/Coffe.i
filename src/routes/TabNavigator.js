import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home'
import Detalhes from '../screens/Detalhes'
import Local from '../screens/Local'

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Detalhes" component={Detalhes} />
    </Tab.Navigator>
  )
}