import { useTranslation } from "react-i18next";

export const getRouteName = (route: any) => {
  const { t } = useTranslation();
  const routeName = route.name ?? t("common:login");

  switch (routeName) {
    case t("common:login"):
      return t("common:login");
    case t("common:register"):
      return t("common:register");
    case t("common:forgotPassword"):
      return t("common:forgotPassword");
    case t("common:home"):
      return t("common:home");
    case t("common:shop"):
      return t("common:shop");
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
    case 'Profile':
      return 'My Profile';
    default:
      return '';
  }
}