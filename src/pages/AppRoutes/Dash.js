import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import dash from '../dash';
import ask from '../ask';
import result from '../result';

const Stack = createStackNavigator();

const  DashRoutes = () => {
    return (
            <Stack.Navigator headerMode='none' initialRouteName='Dash'>
                <Stack.Screen name="Dash" component={dash} />
                <Stack.Screen name="Ask" component={ask} />
                <Stack.Screen name="Result" component={result} />
            </Stack.Navigator>
    );
}

export default DashRoutes;