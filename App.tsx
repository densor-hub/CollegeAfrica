import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, SafeAreaView, View, Button } from 'react-native';
import { Provider } from "react-redux"
import store from './context/store';
import AlbumsScreen from './components/Albums';
import PhotoGridScreen from "./components/PhotoGrids"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

type NavigationsParamList = {
  Albums: undefined;
  Photos: undefined;
};

const Stack = createNativeStackNavigator<NavigationsParamList>();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Albums">
          <Stack.Screen
            name="Albums"
            component={AlbumsScreen} />
          <Stack.Screen
            name="Photos"
            component={PhotoGridScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
