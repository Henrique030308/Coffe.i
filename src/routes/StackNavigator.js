import { createStackNavigator } from "@react-navigation/stack"



import Inicial from "../screens/Inicial"
import TabNavigator from "../routes/TabNavigator"

const Stack = createStackNavigator()

export default function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false, // Esconde o cabeçalho padrão do React Navigation
      }}
      >
      <Stack.Screen name="Inicial" component={Inicial} />
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      
    </Stack.Navigator>
  )
}