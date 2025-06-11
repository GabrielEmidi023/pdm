// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { theme } from './theme';

import ContatosScreen from './screens/ContatosScreen';
import FavoritosScreen from './screens/FavoritosScreen';
import PerfilScreen from './screens/PerfilScreen';
import FormularioScreen from './screens/FormularioScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Contatos') {
            iconName = 'account-box-multiple';
          } else if (route.name === 'Favoritos') {
            iconName = 'star';
          } else if (route.name === 'Perfil') {
            iconName = 'account-circle';
          }

          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: theme.colors.surface,
          borderTopWidth: 0,
          elevation: 5,
        },
      })}
    >
      <Tab.Screen name="Contatos" component={ContatosScreen} />
      <Tab.Screen name="Favoritos" component={FavoritosScreen} />
      <Tab.Screen name="Perfil" component={PerfilScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: theme.colors.primary },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        >
          <Stack.Screen name="Home" component={Tabs} options={{ headerShown: false }} />
          <Stack.Screen name="Formulario" component={FormularioScreen} options={{ title: 'Contato' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
