import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Started in App.js to brain storm ideas which would include a nice footer for the different subjects we need to use.  
// The vector Icon package natively did not function properly when added to the Android gradle in the Native CLI.  
// The Conclusion to this is it became apparent without icons added to the app, moving forward I could not include ontouch and button capabilities.  
// Version .5 for react native navigation is new.  Everything I looked up for help, including Udemy courses were outdated and limited on the new navigation and router functionality.
// Previous versions of navigation are not compatible in the Native CLI and functions wihin the navigation are coded in a different manner.

function ToDoList() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Todo!</Text>
    </View>
  );
}

function CategoriesScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Categories!</Text>
    </View>
  );
}

function QuickNotesScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Quick Notes!</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Todo" component={ToDoList} />
      <Tab.Screen name="Categories" component={CategoriesScreen} />
      <Tab.Screen name="Quick Notes" component={QuickNotesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

