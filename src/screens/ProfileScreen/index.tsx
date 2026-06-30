import { Text } from '@rneui/themed';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppButton from '../../components/common/AppButton';
import ThemedSurface from '../../components/surfaces/ThemedSurface';
import { useCommerce } from '../../context/CommerceContext';
import { spacing, typography } from '../../design-system';

const Profile = ({ navigation }) => {
  const { cartItems, favoriteProducts, logout, user } = useCommerce();

  return (
    <View style={styles.container}>
      <Text h1>My Profile</Text>
      <ThemedSurface style={styles.card}>
        <Text style={styles.name}>{user?.name ?? 'Shopper'}</Text>
        <Text h3>{user?.email ?? 'guest@example.com'}</Text>
      </ThemedSurface>
      <ThemedSurface muted style={styles.stats}>
        <View>
          <Text style={styles.statValue}>{cartItems.length}</Text>
          <Text h4>Bag items</Text>
        </View>
        <View>
          <Text style={styles.statValue}>{favoriteProducts.length}</Text>
          <Text h4>Favorites</Text>
        </View>
      </ThemedSurface>
      <AppButton
        title='Settings'
        variant='outline'
        onPress={() => navigation.navigate('Settings')}
      />
      <AppButton title='Sign out' onPress={logout} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    gap: spacing.xs,
    padding: spacing.xl,
  },
  container: {
    flex: 1,
    gap: spacing.lg,
    padding: spacing.xl,
  },
  name: {
    ...typography.title,
  },
  statValue: {
    ...typography.title,
    textAlign: 'center',
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: spacing.xl,
  },
});

export default Profile;
