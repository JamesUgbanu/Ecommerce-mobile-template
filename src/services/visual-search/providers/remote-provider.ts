import type {
  VisualSearchProvider,
  VisualSearchRequest,
  VisualSearchResult,
} from '../../../types/visual-search';

export class RemoteVisualSearchProvider implements VisualSearchProvider {
  id = 'remote' as const;

  constructor(
    private readonly endpoint: string,
    private readonly apiKey?: string
  ) {}

  isConfigured() {
    return Boolean(this.endpoint);
  }

  async classifyImage(_: VisualSearchRequest): Promise<VisualSearchResult> {
    if (!this.endpoint) {
      throw new Error(
        'Remote visual search is not configured. Set EXPO_PUBLIC_REMOTE_VISUAL_SEARCH_URL or switch providers.'
      );
    }

    throw new Error(
      'Remote visual search is a template stub. Replace the provider implementation with your API upload flow.'
    );
  }
}
