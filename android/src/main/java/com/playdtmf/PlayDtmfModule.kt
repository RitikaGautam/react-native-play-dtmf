package com.playdtmf

import android.media.AudioManager
import android.media.ToneGenerator
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class PlayDtmfModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    private var toneGenerator: ToneGenerator? = null

    override fun getName(): String {
        return "PlayDtmf"
    }

    @ReactMethod
    fun playTone(digit: String) {
        // Map digit to Android DTMF tones
        val toneType = when (digit) {
            "0" -> ToneGenerator.TONE_DTMF_0
            "1" -> ToneGenerator.TONE_DTMF_1
            "2" -> ToneGenerator.TONE_DTMF_2
            "3" -> ToneGenerator.TONE_DTMF_3
            "4" -> ToneGenerator.TONE_DTMF_4
            "5" -> ToneGenerator.TONE_DTMF_5
            "6" -> ToneGenerator.TONE_DTMF_6
            "7" -> ToneGenerator.TONE_DTMF_7
            "8" -> ToneGenerator.TONE_DTMF_8
            "9" -> ToneGenerator.TONE_DTMF_9
            "*" -> ToneGenerator.TONE_DTMF_S
            "#" -> ToneGenerator.TONE_DTMF_P
            else -> ToneGenerator.TONE_DTMF_0
        }

        // Initialize ToneGenerator if null
        if (toneGenerator == null) {
            toneGenerator = ToneGenerator(AudioManager.STREAM_MUSIC, 100)
        }

        toneGenerator?.startTone(toneType, 150) // 150 ms duration
    }

    @ReactMethod
    fun stopTone() {
        toneGenerator?.stopTone()
        toneGenerator?.release()
        toneGenerator = null
    }
}
