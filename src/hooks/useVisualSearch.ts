import { useMemo, useState } from 'react';

import { createVisualSearchProvider } from '../services/visual-search/provider';
import type { VisualSearchResult } from '../types/visual-search';

export const useVisualSearch = () => {
  const provider = useMemo(() => createVisualSearchProvider(), []);
  const [isSearching, setIsSearching] = useState(false);
  const [result, setResult] = useState<VisualSearchResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const search = async (imageUri: string) => {
    try {
      setIsSearching(true);
      setError(null);
      const nextResult = await provider.classifyImage({ uri: imageUri, topK: 3 });
      setResult(nextResult);
    } catch (searchError) {
      const message =
        searchError instanceof Error ? searchError.message : 'Image could not be classified.';
      setResult(null);
      setError(message);
    } finally {
      setIsSearching(false);
    }
  };

  return {
    providerId: provider.id,
    isConfigured: provider.isConfigured(),
    isSearching,
    result,
    error,
    search,
  };
};
