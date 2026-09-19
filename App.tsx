/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import NativeFastStorage from './src/specs/NativeFastStorage';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const initialAuthToken = NativeFastStorage.getItemSync('authToken');
  console.log('initialAuthToken', initialAuthToken);
  console.log('NativeFastStorage.getItemSync', NativeFastStorage.getItemSync('authToken'));
  const tempAuthToken = '1234567890';
  const [authToken, setAuthToken] = React.useState<string | null>(initialAuthToken);

  React.useEffect(() => {
    setAuthToken(tempAuthToken);
    NativeFastStorage.setItemSync('authToken', tempAuthToken);
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent authToken={authToken} />
    </SafeAreaProvider>
  );
}

function AppContent({ authToken }: { authToken: string | null }) {
  return (
    <View style={styles.container}>
      <Text style={{ marginTop: 100 }}>Hello, World mova ewwuuhuhuhuh!</Text>
      <Text>{authToken}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
