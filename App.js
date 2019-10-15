/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  View, Text, Button
} from 'react-native';

import Bot from './comps/Bot'


import Mid from './comps/Mid'

function App() {
  return (
    <View>
      <View>
        
      </View>
      <View style={{justifyContent:'center', alignItems:'center', felx: 1, backgroundColor:'#FAB'}}>
      {/* <Text>HIIIIIIIIIIIII</Text>
      <Button title="Test"></Button> */}
      <Mid/>
      
      </View>
      <View>
        <Bot/>
      </View>

    </View>
    
    
   
);
  }
export default App;
