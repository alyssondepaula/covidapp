import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import dash from '../dash';

const Stack = createStackNavigator();

const  DashRoutes = () => {
    return (
            <Stack.Navigator headerMode='none' initialRouteName='Dash'>
                <Stack.Screen name="Dash" component={dash} />
            </Stack.Navigator>
    );
}

export default DashRoutes;