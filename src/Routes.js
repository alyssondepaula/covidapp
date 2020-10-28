import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import home from './pages/home';
import ask from './pages/ask';
import result from './pages/result';
import dash from './pages/dash';

function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
        </View>
    );
}


const Stack = createStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode='none' initialRouteName='Home'>
                <Stack.Screen name="Home" component={home} />
                <Stack.Screen name="Ask" component={ask} />
                <Stack.Screen name="Result" component={result} />
                <Stack.Screen name="Dash" component={dash} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;