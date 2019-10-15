import React from 'react';
import {View, Text, TextInput, Button, Alert} from 'react-native'

function Bot(){
    const [value, onChangeText] = React.useState('Useless Placeholder');
    return (
        <View style={{ display: 'flex',justifyContent:'center',alignItems:'center'}}>
        <TextInput
      style={{ height: 40, borderColor: 'black', borderWidth: 1, width: 200, marginBottom:20}}
      onChangeText={text => onChangeText(text)}
      value={value}
        />
        
        <Button 
        title="Send"
        onPress={()=>Alert.alert(value)}
        >
            
        </Button>
        </View>
    );
}

export default Bot;