import React from 'react';
import {
  SafeAreaView,
  useColorScheme,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { DrawerHeader } from './src/Components';
import Login from './src/Pages/Login';
import Register from './src/Pages/Register';
import { constants } from './src/config';

const { routes } = constants;

const Drawer = createDrawerNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
        <NavigationContainer>
          <Drawer.Navigator>
            <Drawer.Screen
              name={routes.login}
              component={Login}
              options={{ headerShown: false }}
            />
            <Drawer.Screen
              name={routes.register}
              component={Register}
              options={{
                header: ({ navigation, route, options }) => {
                  return (
                    <DrawerHeader
                      navigation={navigation}
                      route={route}
                      options={options}
                    />
                  )
                }
              }}
            />
          </Drawer.Navigator>
        </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
