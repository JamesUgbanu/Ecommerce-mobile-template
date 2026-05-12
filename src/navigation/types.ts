import type { NavigatorScreenParams } from '@react-navigation/native';

import type { Product } from '../types/catalog';

export type MainTabParamList = {
  Home: undefined;
  Shop: undefined;
  Bag: undefined;
  Favorites: undefined;
  Profile: undefined;
};

export type RootStackParamList = {
  App: NavigatorScreenParams<MainTabParamList>;
  Category: { category: string };
  ProductDetails: { product: Product };
  ProductFilter: undefined;
  VisualSearch: undefined;
  VisualSearchPreview: { imageUri: string };
};

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
};
