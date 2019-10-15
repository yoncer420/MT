import React, {Component} from 'react';
import {View, Text, Picker} from 'react-native';

export default class Mid extends Component {
    constructor(props) {
      super(props);
      this.state = {
        state: ''
      }
    }
    render() {
        return (
          <View style={{ 
            backgroundColor: 'white',
            justifyContent:'center',}}>
            
            <Picker
              style={{width: 150, height: 30}}
              selectedValue={this.state.backgroundColor}
              onValueChange={(itemValue, itemIndex) => this.setState({backgroundColor: itemValue})}>

              <Picker.Item label="Color1" value="yellow" />
              <Picker.Item label="Color2" value="red" />
            </Picker>
          </View>
        );
      }
    }
    


// function Mid(){
//     super(props);
//     this.state = {
//         language:'java'
//     };
//      return(
//         <View style={{justifyContent: 'center', alignItems:'center', backgroundColor:'black'}}>
//             <Picker
//                 selectedValue={this.state.language}
//                 style={{height: 50, width: 100}}
//                 onValueChange={(itemValue, itemIndex) =>this.setState({language: itemValue})}
//             >
//                 <Picker.Item label="Java" value="java" />
//                 <Picker.Item label="JavaScript" value="js" />
//             </Picker>
//         </View>
// )}
// export default Mid;