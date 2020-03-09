import * as React from 'react';
import { Text, View } from 'react-native';

// Profile Screen Outline.  Additional work needs to be done to connect this screen.

function ProfileScreen({ route }) {
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

  export default ProfileScreen;