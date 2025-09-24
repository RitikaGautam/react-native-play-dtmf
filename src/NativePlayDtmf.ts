import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  playTone(digit: string): void;
  stopTone(): void;
}

export default TurboModuleRegistry.getEnforcing<Spec>('PlayDtmf');
