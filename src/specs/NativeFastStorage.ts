import { TurboModule, TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
    setItemSync(key: string, value: string): void;
    getItemSync(key: string): string | null;
    deleteItemSync(key: string): void;
    clearAllSync(): void;
}

export default TurboModuleRegistry.getEnforcing<Spec>('NativeFastStorage');