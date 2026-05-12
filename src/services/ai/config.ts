import type { VisualSearchProviderId } from '../../types/visual-search';

const providerAliasMap = {
  tensorflow: 'tflite',
  tflite: 'tflite',
  remote: 'remote',
  none: 'none',
} as const;

const providerFromEnv = process.env.EXPO_PUBLIC_VISUAL_SEARCH_PROVIDER;

export const visualSearchConfig = {
  provider: providerAliasMap[providerFromEnv as keyof typeof providerAliasMap] ?? 'none',
  remoteUrl: process.env.EXPO_PUBLIC_REMOTE_VISUAL_SEARCH_URL ?? '',
  remoteApiKey: process.env.EXPO_PUBLIC_REMOTE_VISUAL_SEARCH_API_KEY ?? '',
};
