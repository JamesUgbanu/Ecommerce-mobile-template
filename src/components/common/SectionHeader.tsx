import { Text } from '@rneui/themed';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { spacing } from '../../design-system';

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  actionLabel?: string;
  onActionPress?: () => void;
};

const SectionHeader = ({ title, subtitle, actionLabel, onActionPress }: SectionHeaderProps) => {
  return (
    <View style={styles.container}>
      <View>
        <Text h1>{title}</Text>
        {subtitle ? (
          <Text h3 style={styles.subtitle}>
            {subtitle}
          </Text>
        ) : null}
      </View>
      {actionLabel ? (
        <TouchableOpacity onPress={onActionPress}>
          <Text h3>{actionLabel}</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: spacing.lg,
    marginTop: spacing['3xl'],
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  subtitle: {
    color: '#9B9B9B',
  },
});

export default SectionHeader;
