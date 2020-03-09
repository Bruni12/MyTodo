import * as React from 'react';
import { Text, View } from 'react-native';

// Change Password Screen Outline.  Additional work needs to be done to connect this screen and code.

function ChangePasswordScreen({ route }) {
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

  export default ChangePasswordScreen;