import React, {Component} from 'react';
import {useState} from 'react';
import {View, Text, Picker} from 'react-native';

// export default class Mid extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         state: ''
//       }
//     }
//     render() {
//         return (
//           <View style={{ 
//             justifyContent:'center',}}>
            
//             <Picker
//               style={{width: 150, height: 30}}
//               selectedValue={this.state.backgroundColor}
//               onValueChange={(itemValue, itemIndex) => this.setState({backgroundColor: itemValue})}>

//               <Picker.Item label="Color1" value="yellow" />
//               <Picker.Item label="Color2" value="red" />
//             </Picker>
//           </View>
//         );
//       }
//     }
    


function Mid(){
    const [backgroundColor, onColorChange] = useState(backgroundColor);
  

     return(
       <View >
            <Picker
                // selectedValue={this.state.itemValue}
                 style={{height: 50, width: 100}}
                 onValueChange={(backgroundColor, onColorChange) =>this.setState({backgroundColor})}
                 onColorChange={backgroundColor => onColorChange(backgroundColor.value)}
             >
                 <Picker.Item label="Blue" value='blue'/>
                 <Picker.Item label="Red" value='red' />
             </Picker>
       </View>
 )}
 export default Mid;