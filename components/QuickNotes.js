import * as React from 'react';
import { Text, View } from 'react-native';

// QuickNotes Screen Outline.  Additional work needs to be done to connect this screen.

function QuickNotesScreen({ route }) {
    return (
      <View style={{
        flex: 1,
        alignItems: 'center',
        JustifyContent: 'center',
        backgroundColor: 'white'
      }}>
                       
        <Text>This is the Quick Notes screen of the app</Text>
        <Text>{route.params.name}</Text>
      </View>
    );
  }

  export default QuickNotesScreen;