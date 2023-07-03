import { useTranslation } from "react-i18next";

export const getHeaderTitle = (route: any) => {
    const { t } = useTranslation();
  const routeName = route.name ?? t("common:login");

  switch (routeName) {
    case 'Login':
      return 'Login';
    case 'Register':
      return 'Register';
    case 'Forgot password':
      return 'Forgot password';
    case 'Profile':
      return 'My Profile';
  }
}