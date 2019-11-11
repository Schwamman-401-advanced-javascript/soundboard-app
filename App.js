import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header';
import Soundboard from './components/soundboard';
import audio from './data/audio';

export default function App() {
  const [audioFiles, setAudioFiles] = useState(audio);

  return (
    <View style={styles.container}>
      <Text>
        Hello World!
      </Text>
      <Soundboard 
        audioFiles={audioFiles}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
