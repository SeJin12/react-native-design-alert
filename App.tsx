/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { DesignAlert } from './src/components/DesignAlert';

function App(): React.JSX.Element {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <View style={{flex: 1,  justifyContent:'center', alignItems:'center'}}>
      <DesignAlert
        type="success"
        onClose={() => setVisible(false)}
        themeColor="blue"
        title="TITLE"
        onSubmit={() => {
          console.log('submit');
          setVisible(false);
        }}
        visible={visible}
      />
      <TouchableOpacity onPress={() => setVisible(true)}
       style={{justifyContent:'center', alignItems:'center', width:100, height:100, backgroundColor:'blue'}}>
        <Text style={{color: 'white', fontWeight:'bold'}}>Button</Text>
      </TouchableOpacity>
    </View>
  );
}

export default App;
