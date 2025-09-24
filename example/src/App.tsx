import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { playTone, stopTone } from 'react-native-play-dtmf';

const tones = [
  ['1', '2', '3'],
  ['4', '5', '6'],
  ['7', '8', '9'],
  ['*', '0', '#'],
];

export default function App() {
  return (
    <View style={styles.container}>
      {tones.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((digit) => (
            <Pressable
              key={digit}
              style={({ pressed }) => [
                styles.button,
                pressed && styles.buttonPressed,
              ]}
              onPressIn={() => playTone(digit)} // Start tone on press
              onPressOut={() => stopTone()} // Stop tone on release
            >
              <Text style={styles.digit}>{digit}</Text>
            </Pressable>
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  row: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  button: {
    width: 80,
    height: 80,
    marginHorizontal: 10,
    borderRadius: 40,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  buttonPressed: {
    backgroundColor: '#cfd8dc',
  },
  digit: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
  },
});
