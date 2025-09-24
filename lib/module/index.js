"use strict";

import { NativeModules } from 'react-native';
const {
  PlayDtmf
} = NativeModules;
export function playTone(digit) {
  PlayDtmf.playTone(digit);
}
export function stopTone() {
  PlayDtmf.stopTone();
}
export default {
  playTone,
  stopTone
};
//# sourceMappingURL=index.js.map