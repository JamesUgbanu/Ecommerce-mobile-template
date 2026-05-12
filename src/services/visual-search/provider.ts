import { visualSearchConfig } from '../ai/config';
import { NoneVisualSearchProvider } from './providers/none-provider';
import { RemoteVisualSearchProvider } from './providers/remote-provider';
import { TfliteVisualSearchProvider } from './providers/tflite-provider';

export const createVisualSearchProvider = () => {
  switch (visualSearchConfig.provider) {
    case 'remote':
      return new RemoteVisualSearchProvider(
        visualSearchConfig.remoteUrl,
        visualSearchConfig.remoteApiKey
      );
    case 'none':
      return new NoneVisualSearchProvider();
    default:
      return new TfliteVisualSearchProvider();
  }
};
