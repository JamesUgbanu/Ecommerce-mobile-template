/**
 * getRoute.ts
 * Copyright (c) 2023 James Ugbanu.
 * Licensed under the MIT License.
 */


import { useTranslation } from "react-i18next";

export const getRouteName = (route: any) => {
  const { t } = useTranslation();
  const routeName: string = route.name ?? "Login";

  switch (routeName) {
    case "Login":
      return t("common:login");
    case "Register":
      return t("common:register");
    case "ForgotPassword":
      return t("common:forgotPassword");
    case "HomeStack":
      return t("common:home");
    case "ShopStack":
      return t("common:shop");
    case "ProductFilter":
      return t("common:filters");
    case "VisualSearch":
      return t("common:visualSearch");
    case "SearchPhoto":
      return t("common:searchPhoto");
    case "CropPhoto":
      return t("common:cropPhoto");
    case 'Profile':
      return 'My Profile';
    default:
      return '';
  }
}

export const getHeaderTitle = (route) => {
  const { t } = useTranslation();

  switch (getRouteName(route)) {
    case t("common:login"):
    case t("common:register"):
    case t("common:forgotPassword"):
      return '';
    case t("common:shop"):
      return t("common:categories");
    case t("common:filters"):
      return t("common:filters");
    case t("common:visualSearch"):
      return t("common:visualSearch");
    case t("common:searchPhoto"):
      return t("common:searchPhoto");
    case t("common:cropPhoto"):
      return t("common:cropPhoto");
    case 'Profile':
      return 'My Profile';
    default:
      return '';
  }
}