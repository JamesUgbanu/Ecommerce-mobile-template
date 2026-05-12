export type VisualSearchProviderId = 'tensorflow' | 'remote' | 'none';

export type VisualSearchPrediction = {
  label: string;
  confidence: number;
};

export type VisualSearchResult = {
  provider: VisualSearchProviderId;
  predictions: VisualSearchPrediction[];
  latencyMs: number;
  message?: string;
};

export type VisualSearchRequest = {
  uri: string;
  topK?: number;
};

export interface VisualSearchProvider {
  id: VisualSearchProviderId;
  isConfigured(): boolean;
  classifyImage(request: VisualSearchRequest): Promise<VisualSearchResult>;
}
