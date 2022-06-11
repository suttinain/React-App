import React from 'react';
import { createStackNavigator }
    from '@react-navigation/stack';
import { NavigationContainer }
    from '@react-navigation/native';
import Login from './screens/Login';
import Register from './screens/Register';
import MainPage from './screens/MainPage';
const Stack = createStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={Login}
                />
                <Stack.Screen
                    name="Register"
                    component={Register}
                />
                <Stack.Screen
                    name="MainPage"
                    component={MainPage}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
