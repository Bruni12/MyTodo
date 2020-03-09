import * as React from 'react';
import { Text, View } from 'react-native';

// Need to move the Footer off the App.js to the footer.  Not yet connected. Kept on App.js to show something that functions.

function FooterScreen({ route }) {
    return (
      <View style={{
        flex: 1,
        alignItems: 'center',
        JustifyContent: 'center',
        backgroundColor: 'white'
      }}>
                       
        <Text>This is the Profile Screen of the app</Text>
        <Text>{route.params.name}</Text>
      </View>
    );
  }

  export default FooterScreen;
