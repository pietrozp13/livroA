import React from 'react';
import { StyleSheet, Button, View, TouchableWithoutFeedback } from 'react-native';
import LottieView from 'lottie-react-native';
import { Animated, Easing } from 'react-native';
import Anim from './anim'
import Screen1 from './screens/screen1'
import Screen2 from './screens/screen2'
import { createStackNavigator } from 'react-navigation';
import { fromBottom } from 'react-navigation-transitions';
import { createAppContainer } from 'react-navigation';

const navigator = createStackNavigator(
  {
  Screen1: { 
    screen: Screen1 
  },
  Screen2: { 
    screen: Anim 
  }, 
},
{
  initialRouteName: 'Screen1',
  transitionConfig: () => fromBottom(1500),
  headerMode: 'none'
},
);

const AppContainer = createAppContainer(navigator);


export default AppContainer;

