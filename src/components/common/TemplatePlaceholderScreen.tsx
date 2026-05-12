import { Text } from '@rneui/themed';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import EmptyState from './EmptyState';

type TemplatePlaceholderScreenProps = {
  title: string;
  description: string;
};

const TemplatePlaceholderScreen = ({ title, description }: TemplatePlaceholderScreenProps) => {
  return (
    <View style={styles.container}>
      <Text h1>{title}</Text>
      <EmptyState
        title='Template-ready section'
        description={description}
        iconName='shopping-outline'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
});

export default TemplatePlaceholderScreen;
