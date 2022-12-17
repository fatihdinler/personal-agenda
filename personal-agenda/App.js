import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ApplicationContainer from './src/screens/container/application-container';
import getColors from './src/colors/get-colors';

export default function App() {
  return (
    <NavigationContainer>
        <ApplicationContainer />
        <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
