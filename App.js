import React from 'react';
import {
  SafeAreaView,
  useColorScheme,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Login from './src/Pages/Login';
import Register from './src/Pages/Register';
import { constants } from './src/config';

const { routes } = constants;

const Stack = createNativeStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name={routes.login}
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name={routes.register}
              component={Register}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
