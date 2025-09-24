import NativePlayDtmf from './NativePlayDtmf';

export function playTone(digit: string): void {
  NativePlayDtmf.playTone(digit);
}

export function stopTone(): void {
  NativePlayDtmf.stopTone();
}
