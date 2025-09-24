import Foundation
import AudioToolbox
import React

@objc(PlayDtmf)
class PlayDtmf: NSObject {

  var soundID: SystemSoundID = 0

  @objc
  func playTone(_ digit: NSString) {
    // Map digits to built-in DTMF sounds
    var systemSound: SystemSoundID = 0

    switch digit {
      case "0": systemSound = 1200
      case "1": systemSound = 1201
      case "2": systemSound = 1202
      case "3": systemSound = 1203
      case "4": systemSound = 1204
      case "5": systemSound = 1205
      case "6": systemSound = 1206
      case "7": systemSound = 1207
      case "8": systemSound = 1208
      case "9": systemSound = 1209
      case "*": systemSound = 1210
      case "#": systemSound = 1211
      default: systemSound = 1200
    }

    AudioServicesPlaySystemSound(systemSound)
    soundID = systemSound
  }

  @objc
  func stopTone() {
    if soundID != 0 {
      AudioServicesDisposeSystemSoundID(soundID)
      soundID = 0
    }
  }
}
