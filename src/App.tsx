import 'react-native-gesture-handler';

import React from 'react';
import { View, StyleSheet, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Router from './routes';

const App: React.FC = () => (
    <NavigationContainer>
        <StatusBar barStyle="default" backgroundColor= '#312e38' />
        <View style={{ flex: 1, backgroundColor: '#312e38'}}>
            <Router />
        </View>
    </NavigationContainer>
)

export default App;
