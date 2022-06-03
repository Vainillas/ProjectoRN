/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import type {Node} from 'react';
import React from 'react';
import {StyleSheet, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {DarkTheme, DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ListScreen from './src/screen/ListScreen';
import DetailScreen from './src/screen/DetailScreen';


const Stack = createNativeStackNavigator();
const App: () => Node = () => {

    const scheme = useColorScheme();
    return (
        <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
            <Stack.Navigator>
                <Stack.Screen
                    name="List"
                    component={ListScreen}
                    options={{ title: 'Listado', headerTitleAlign: 'center' }}
                />
                <Stack.Screen name="Detail" component={DetailScreen}
                options={{title:'Detalle', headerTitleAlign: 'center'}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
