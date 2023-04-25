import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Calculator from './Calculator';
import MpSound from './MpSound';



const MyStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Calculator"
          component={Calculator}
        />
        <Stack.Screen name="MpSound" component={MpSound} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;