import { visualSearchConfig } from '../ai/config';
import { NoneVisualSearchProvider } from './providers/none-provider';
import { RemoteVisualSearchProvider } from './providers/remote-provider';
import { TensorflowVisualSearchProvider } from './providers/tensorflow-provider';

export const createVisualSearchProvider = () => {
  switch (visualSearchConfig.provider) {
    case 'remote':
      return new RemoteVisualSearchProvider(
        visualSearchConfig.remoteUrl,
        visualSearchConfig.remoteApiKey
      );
    case 'none':
      return new NoneVisualSearchProvider();
    case 'tensorflow':
    default:
      return new TensorflowVisualSearchProvider();
  }
};
