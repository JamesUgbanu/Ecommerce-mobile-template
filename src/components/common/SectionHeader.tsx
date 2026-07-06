import { Text } from '@rneui/themed';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { spacing } from '../../design-system';
import { useAppTheme } from '../../hooks/useAppTheme';

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  actionLabel?: string;
  onActionPress?: () => void;
};

const SectionHeader = ({ title, subtitle, actionLabel, onActionPress }: SectionHeaderProps) => {
  const { colors } = useAppTheme();

  return (
    <View style={styles.container}>
      <View>
        <Text h1>{title}</Text>
        {subtitle ? (
          <Text h3 style={[styles.subtitle, { color: colors.textSecondary }]}>
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
  subtitle: {},
});

export default SectionHeader;
