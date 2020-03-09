import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// Top Material Navigation tabs. Idea is to use these for the "Day and Month screens for the Todo List.
// Need to create router that will include the Header and Footer on one screen.

function TodayScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Today!</Text>
    </View>
  );
}

function MonthScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Month!</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Today" component={TodayScreen} />
        <Tab.Screen name="Month" component={MonthScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TodoList;