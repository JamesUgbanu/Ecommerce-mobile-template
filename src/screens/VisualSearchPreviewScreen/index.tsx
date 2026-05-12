import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, useTheme } from '@rneui/themed';
import React from 'react';
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

import Loading from '../../components/Loading';
import AppIcon from '../../components/common/AppIcon';
import EmptyState from '../../components/common/EmptyState';
import ErrorState from '../../components/common/ErrorState';
import ProviderBadge from '../../components/search/ProviderBadge';
import SearchResultsCard from '../../components/search/SearchResultsCard';
import { useVisualSearch } from '../../hooks/useVisualSearch';
import type { RootStackParamList } from '../../navigation/types';

type VisualSearchPreviewScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'VisualSearchPreview'
>;

const VisualSearchPreviewScreen = ({ route }: VisualSearchPreviewScreenProps) => {
  const { theme } = useTheme();
  const { error, isConfigured, isSearching, providerId, result, search } = useVisualSearch();
  const { imageUri } = route.params;

  return (
    <>
      <Loading
        isVisible={isSearching}
        iconColor={theme.colors.error}
        text='Finding similar results...'
        iconProps={{ size: 44, name: 'search' }}
        color={theme.colors.black}
      />
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <Image source={{ uri: imageUri }} resizeMode='cover' style={styles.image} />
        <ProviderBadge providerId={providerId} />
        <TouchableOpacity
          style={[styles.searchButton, { backgroundColor: theme.colors.error }]}
          onPress={() => search(imageUri)}
          disabled={isSearching}
        >
          <AppIcon name='search' type='font-awesome' color='#FFFFFF' />
          <Text style={styles.searchButtonText}>Run visual search</Text>
        </TouchableOpacity>

        {!isConfigured ? (
          <EmptyState
            title='Search provider needs configuration'
            description='Set the provider env vars or switch to the TFLite/local option in .env.'
          />
        ) : null}

        {error ? <ErrorState title='Search failed gracefully' description={error} /> : null}

        {result?.predictions.length ? <SearchResultsCard result={result} /> : null}

        {result && !result.predictions.length && result.message ? (
          <EmptyState title='No predictions returned' description={result.message} />
        ) : null}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    gap: 16,
    paddingBottom: 32,
  },
  image: {
    width: '100%',
    height: 460,
  },
  searchButton: {
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 999,
    flexDirection: 'row',
    gap: 10,
    marginTop: 4,
    paddingHorizontal: 24,
    paddingVertical: 14,
  },
  searchButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
});

export default VisualSearchPreviewScreen;
