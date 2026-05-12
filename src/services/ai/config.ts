import type { VisualSearchProviderId } from '../../types/visual-search';

const allowedProviders: VisualSearchProviderId[] = ['tensorflow', 'remote', 'none'];

const providerFromEnv = process.env.EXPO_PUBLIC_VISUAL_SEARCH_PROVIDER;

export const visualSearchConfig = {
  provider: allowedProviders.includes(providerFromEnv as VisualSearchProviderId)
    ? (providerFromEnv as VisualSearchProviderId)
    : 'tensorflow',
  remoteUrl: process.env.EXPO_PUBLIC_REMOTE_VISUAL_SEARCH_URL ?? '',
  remoteApiKey: process.env.EXPO_PUBLIC_REMOTE_VISUAL_SEARCH_API_KEY ?? '',
};
