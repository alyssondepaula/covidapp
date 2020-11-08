import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import home from '../home';
import ask from '../ask';
import result from '../result';


const Stack = createStackNavigator();

const  AuthRoutes = () => {
    return (
            <Stack.Navigator headerMode='none' initialRouteName='Home'>
                <Stack.Screen name="Home" component={home} />
                <Stack.Screen name="Ask" component={ask} />
                <Stack.Screen name="Result" component={result} />
            </Stack.Navigator>
    );
}

export default AuthRoutes;