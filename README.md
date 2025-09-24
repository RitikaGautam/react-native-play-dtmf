# react-native-play-dtmf

🎵 A React Native module to play DTMF tones (`0–9`, `*`, `#`, `A–D`) using native code on Android and iOS.  
Supports React Native 0.78+ and the New Architecture.

---

## Installation

```sh
npm install react-native-play-dtmf
# or
yarn add react-native-play-dtmf
```

## iOS Setup

```sh
cd ios && pod install && cd ..
```

## Android Setup

No additional steps are needed — autolinking will handle the native module.
Simply rebuild your app:

```sh
yarn android
```


## Usage

```sh
import { playTone, stopTone } from 'react-native-play-dtmf';

// ▶️ Play digit "5"
playTone("5");

// ⏹ Stop the tone
stopTone();
```
