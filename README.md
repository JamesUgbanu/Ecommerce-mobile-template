# E-commerce Template using React Native and Expo

This is a simple e-commerce template built with React Native and Expo. It provides a basic structure and components to help you kickstart your e-commerce app development.

## Screenshots

<img src="/assets/screenshots/login_screen.png" alt="Image" width="400"> | <img src="/assets/screenshots/register_screen.png" alt="Image" width="400">  | <img src="/assets/screenshots/forgot_password_screen.png" alt="Image" width="400"> 

## Features

- User authentication (Sign up, Sign in, Forgot password)
- Product listing
- Product search
- Product details
- Add to cart
- Cart management (Add, update, remove items)
- Checkout flow
- Order history
- User profile management

## Technology Stack

- [React Native](https://reactnative.dev/): A JavaScript framework for building native mobile applications.
- [Expo](https://docs.expo.io/): Expo is an open-source platform for making universal native apps for Android, iOS, and the web with JavaScript and React.
- [Redux](https://redux.js.org/): A predictable state container for managing the application state.
- [React Navigation](https://reactnavigation.org/): A navigation library for managing navigation between screens.
- [Axios](https://axios-http.com/): A promise-based HTTP client for making API requests.
- [React Native Elements](https://reactnativeelements.com/): A UI toolkit for building reusable UI components.
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons): A library for adding vector icons to your React Native application.
- [Formik](https://formik.org/): A form library for building scalable and reusable forms.
- [Yup](https://github.com/jquense/yup): A schema validation library for form validation.

## Prerequisites

Make sure you have the following installed:

- Node.js
- npm or yarn
- Expo CLI

## Getting Started

1. Clone the repository:

```
git clone https://github.com/JamesUgbanu/Ecommerce-mobile.git
```

2. Navigate to the project directory:

```
cd ecommerce-mobile-template
```

3. Install dependencies:

```
npm install
```
or
```
yarn install
```

4. Start the development server:

```
expo start
```

This will open the Expo Developer Tools in your browser.

5. Choose the desired platform (iOS, Android, or web) to run the app.

6. Use the Expo client app or an emulator to run the app on your device.

## Configuration

To configure the app, you can modify the following files:

- `config.js`: Update the Firebase configuration with your own Firebase project details.
- `constants.js`: Modify any constant values such as API endpoints or app-wide configurations.

## Folder Structure

The project structure is organized as follows:

```
├── assets
│   ├── fonts
│   ├── images
├── components
│   ├── auth
│   ├── cart
│   ├── common
│   ├── products
│   ├── profile
├── navigation
├── screens
├── services
├── utils
```

- **assets**: Contains font files and image assets used in the app.
- **components**: Contains reusable UI components used throughout the app, organized by feature or functionality.
- **navigation**: Contains the app's navigation configuration.
- **screens**: Contains individual app screens.
- **services**: Contains services or utility functions used across the app.
- **utils**: Contains helper functions and utility scripts.

Feel free to modify the folder structure based on your project requirements.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. Feel free to use it for commercial or personal use.

## Acknowledgments

This project is inspired by the React Native and Expo community. Thank you to all the developers who contribute to these amazing open-source frameworks.

## Resources

- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [Expo Documentation](https://docs.expo.io/)
