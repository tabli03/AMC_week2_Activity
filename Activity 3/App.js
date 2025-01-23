import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const BoldAndBeautiful = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <Text style={styles.baseText}>
        Arwyn M. Tablizo
        <Text style={styles.sectionText}> It-302</Text>
        <Text style={styles.messageText}> i love playing games</Text>
        <Text style={styles.message2Text}>, listening music</Text>
          <Text style={styles.message3Text}>, watching movies</Text>
        <Text style={styles.message4Text}> and i love coffee</Text>
      </Text>
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  baseText: {
    fontWeight: 'bold', 
  },
  sectionText: {
    color: 'red'
  },
  messageText: {
    color: 'aqua'
    
  },
  message2Text: {
    color: 'blue'
  },
  message3Text: {
    color: 'pink'
  },
  message4Text: {
    color: 'green'
  },
});

export default BoldAndBeautiful