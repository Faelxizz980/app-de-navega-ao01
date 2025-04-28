import React from 'react';
import { StatusBar, Text } from 'react-native'; // Importação corrigida
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Contatos from './components/contatos/contatos';
import Ligações from './components/Ligações/ligações';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === "Contatos") {
                            iconName = focused ? "people" : "people-outline";
                        } else if (route.name === "Ligações") {
                            iconName = focused ? "call" : "call-outline";
                        }

                        return <Icon name={iconName} size={size} color={color} />;
                    },
                    tabBarStyle: {
                        backgroundColor: '#0c1317',
                    },
                    tabBarActiveTintColor: "#c1e0d3",
                    tabBarInactiveTintColor: "gray",
                    headerShown: false,
                })}
            >
                <Tab.Screen name='Contatos' component={Contatos} />
                <Tab.Screen name="Ligações" component={Ligações} />
            </Tab.Navigator>
            <StatusBar style="auto" />
        </NavigationContainer>
    );
}

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: ['react-native-reanimated/plugin'], // Adicione esta linha
};

