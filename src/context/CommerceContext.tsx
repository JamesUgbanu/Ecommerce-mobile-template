import React, { createContext, useContext, useMemo, useState } from 'react';

import { products } from '../data';
import type { Product } from '../types/catalog';

export type SortId = 'popularity' | 'newest' | 'review' | 'asc' | 'desc';

type CommerceUser = {
  email: string;
  name: string;
};

type FilterState = {
  category: string;
  colors: string[];
  high: number;
  low: number;
  sizes: string[];
};

type CommerceContextValue = {
  addToCart: (product: Product) => void;
  applyFilters: (filters: Partial<FilterState>) => void;
  cartItems: Product[];
  checkout: () => void;
  checkoutComplete: boolean;
  clearCart: () => void;
  favoriteProducts: Product[];
  filteredProducts: Product[];
  filters: FilterState;
  getCartTotal: () => number;
  isAuthenticated: boolean;
  isFavorite: (productId: string) => boolean;
  login: (email: string, name?: string) => void;
  logout: () => void;
  register: (email: string, name: string) => void;
  resetCheckout: () => void;
  resetFilters: () => void;
  setSortId: (sortId: SortId) => void;
  sortId: SortId;
  toggleFavorite: (product: Product) => void;
  user: CommerceUser | null;
};

const defaultFilters: FilterState = {
  category: 'All',
  colors: [],
  high: 200,
  low: 0,
  sizes: [],
};

const CommerceContext = createContext<CommerceContextValue | undefined>(undefined);

const sortProducts = (nextProducts: Product[], sortId: SortId) => {
  switch (sortId) {
    case 'asc':
      return [...nextProducts].sort(
        (left, right) => (left.salePrice ?? left.price) - (right.salePrice ?? right.price)
      );
    case 'desc':
      return [...nextProducts].sort(
        (left, right) => (right.salePrice ?? right.price) - (left.salePrice ?? left.price)
      );
    case 'review':
      return [...nextProducts].sort(
        (left, right) => (right.totalRating ?? 0) - (left.totalRating ?? 0)
      );
    case 'newest':
      return [...nextProducts].reverse();
    default:
      return [...nextProducts].sort(
        (left, right) => (right.ratingValue ?? 0) - (left.ratingValue ?? 0)
      );
  }
};

export const CommerceProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [checkoutComplete, setCheckoutComplete] = useState(false);
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  const [filters, setFilters] = useState(defaultFilters);
  const [sortId, setSortId] = useState<SortId>('asc');
  const [user, setUser] = useState<CommerceUser | null>(null);

  const favoriteProducts = useMemo(
    () => products.filter((product) => favoriteIds.includes(product.id)),
    [favoriteIds]
  );

  const filteredProducts = useMemo(() => {
    const nextProducts = products.filter((product) => {
      const effectivePrice = product.salePrice ?? product.price;
      const matchesPrice = effectivePrice >= filters.low && effectivePrice <= filters.high;
      const matchesCategory =
        filters.category === 'All' ||
        product.department?.toLowerCase() === filters.category.toLowerCase() ||
        product.category.toLowerCase().includes(filters.category.toLowerCase()) ||
        product.name.toLowerCase().includes(filters.category.toLowerCase());
      const matchesColors =
        !filters.colors.length ||
        filters.colors.some((color) => product.colors?.includes(color.toLowerCase()));
      const matchesSizes =
        !filters.sizes.length || filters.sizes.some((size) => product.sizes?.includes(size));

      return matchesPrice && matchesCategory && matchesColors && matchesSizes;
    });

    return sortProducts(nextProducts, sortId);
  }, [filters, sortId]);

  const value = useMemo<CommerceContextValue>(
    () => ({
      addToCart: (product) => {
        setCartItems((currentItems) => [...currentItems, product]);
        setCheckoutComplete(false);
      },
      applyFilters: (nextFilters) => {
        setFilters((currentFilters) => ({ ...currentFilters, ...nextFilters }));
      },
      cartItems,
      checkout: () => {
        setCartItems([]);
        setCheckoutComplete(true);
      },
      checkoutComplete,
      clearCart: () => {
        setCartItems([]);
        setCheckoutComplete(false);
      },
      favoriteProducts,
      filteredProducts,
      filters,
      getCartTotal: () =>
        cartItems.reduce((total, product) => total + (product.salePrice ?? product.price), 0),
      isAuthenticated: Boolean(user),
      isFavorite: (productId) => favoriteIds.includes(productId),
      login: (email, name = 'Shopper') => setUser({ email, name }),
      logout: () => {
        setUser(null);
        setCartItems([]);
        setFavoriteIds([]);
        setCheckoutComplete(false);
      },
      register: (email, name) => setUser({ email, name }),
      resetCheckout: () => setCheckoutComplete(false),
      resetFilters: () => setFilters(defaultFilters),
      setSortId,
      sortId,
      toggleFavorite: (product) => {
        setFavoriteIds((currentIds) =>
          currentIds.includes(product.id)
            ? currentIds.filter((productId) => productId !== product.id)
            : [...currentIds, product.id]
        );
      },
      user,
    }),
    [
      cartItems,
      checkoutComplete,
      favoriteIds,
      favoriteProducts,
      filteredProducts,
      filters,
      sortId,
      user,
    ]
  );

  return <CommerceContext.Provider value={value}>{children}</CommerceContext.Provider>;
};

export const useCommerce = () => {
  const context = useContext(CommerceContext);

  if (!context) {
    throw new Error('useCommerce must be used inside CommerceProvider.');
  }

  return context;
};
