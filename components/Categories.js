import * as React from 'react';
import { Text, View } from 'react-native';

// Created a basic router outline for this screen.  Not connected to the stack yet.  Needs additional coding.

function CategoriesScreen({ route }) {
    return (
      <View style={{
        flex: 1,
        alignItems: 'center',
        JustifyContent: 'center',
        backgroundColor: 'white'
      }}>
                       
        <Text>This is the Categories screen of the app</Text>
        <Text>{route.params.name}</Text>
      </View>
    );
  }

  export default CategoriesScreen;