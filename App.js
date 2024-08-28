
import React, { useContext } from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { ThemeProvider, useTheme } from './src/context/ThemeContext';
import TrocaTema from './src/components/TrocaTema';

const ThemedView = ({ children }) => {
  const { isDarkTheme } = useTheme();
  return (
    <SafeAreaView style={[styles.container, isDarkTheme ? styles.dark : styles.light]}>
      {children}
    </SafeAreaView>
  );
};

const AppContent = () => (
  <ThemedView>
    <Text style={styles.text}>Olá!</Text>
    <TrocaTema />
  </ThemedView>
);

const App = () => (
  <ThemeProvider>
    <AppContent />
  </ThemeProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  light: {
    backgroundColor: '#FFFFFF',
  },
  dark: {
    backgroundColor: '#333333',
  },
  text: {
    color: '#000000',
  },
});

export default App;

