import React, { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading'; // Para esperar carregar as fontes
import Home from './screens/home';
import PlanetDetails from './screens/planetDetails';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const getFonts = () => Font.loadAsync({
  'starjedi': require('./assets/fonts/Starjedi.ttf'),
  'starjhol': require('./assets/fonts/Starjhol.ttf'),
  'starjout': require('./assets/fonts/Starjout.ttf')
});

const Stack = createNativeStackNavigator();

export default function App() {
  
  const [fontsLoaded, setFontsLoaded] = useState(false);
  
  if(fontsLoaded) {
    return ( 
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{
            title: "Planetas de Star Wars",
            headerStyle: {
              backgroundColor: '#333',
              height: 60
            },
            headerTintColor: 'yellow',
            headerTitleStyle: {
              fontFamily: 'starjout',
              fontSize: 18,
              fontWeight: '200',
            },
          }} />
          <Stack.Screen name="PlanetDetails" component={PlanetDetails} options={{
            title: "Detalhes do Planeta",
            headerStyle: {
              backgroundColor: '#333',
              height: 60
            },
            headerTintColor: 'yellow',
            headerTitleStyle: {
              fontFamily: 'starjout',
              fontSize: 18,
              fontWeight: '200',
            },
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return(
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    );
  }
}
