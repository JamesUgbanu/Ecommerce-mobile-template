import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, useTheme } from '@rneui/themed';
import { Image } from 'expo-image';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import Loading from '../../components/Loading';
import AppButton from '../../components/common/AppButton';
import AppIcon from '../../components/common/AppIcon';
import EmptyState from '../../components/common/EmptyState';
import ErrorState from '../../components/common/ErrorState';
import ProviderBadge from '../../components/search/ProviderBadge';
import SearchResultsCard from '../../components/search/SearchResultsCard';
import GlassSurface from '../../components/surfaces/GlassSurface';
import { radius, spacing } from '../../design-system';
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
        <View style={styles.hero}>
          <Image
            source={{ uri: imageUri }}
            contentFit='cover'
            style={styles.image}
            transition={180}
          />
          <GlassSurface surfaceRole='overlay' style={styles.providerOverlay}>
            <ProviderBadge providerId={providerId} />
          </GlassSurface>
        </View>
        <AppButton
          disabled={isSearching}
          icon={<AppIcon name='search' type='font-awesome' color='#FFFFFF' />}
          onPress={() => search(imageUri)}
          title='Run visual search'
        />

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
    paddingHorizontal: 20,
    paddingBottom: 32,
  },
  hero: {
    borderRadius: radius.xl,
    marginTop: spacing.lg,
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 460,
  },
  providerOverlay: {
    left: spacing.md,
    padding: spacing.xs,
    position: 'absolute',
    top: spacing.md,
  },
});

export default VisualSearchPreviewScreen;
