import type {
  VisualSearchProvider,
  VisualSearchRequest,
  VisualSearchResult,
} from '../../../types/visual-search';

export class NoneVisualSearchProvider implements VisualSearchProvider {
  id = 'none' as const;

  isConfigured() {
    return true;
  }

  async classifyImage(_: VisualSearchRequest): Promise<VisualSearchResult> {
    return {
      provider: this.id,
      predictions: [],
      latencyMs: 0,
      message: 'Visual search is disabled. Set EXPO_PUBLIC_VISUAL_SEARCH_PROVIDER to enable it.',
    };
  }
}
