# E-commerce Template using React Native and Expo

A reusable React Native + Expo starter for e-commerce experiences. It includes auth UI, product browsing, product detail, filter flows, adaptive Liquid Glass-ready UI primitives, and an optional visual search feature that supports both a local TFLite provider and a remote AI provider stub.

This repo is meant to be a cleaner production-friendly template, not a finished commerce app. The current bag, favorites, and profile areas are intentionally simple so teams can connect real backend logic without fighting demo-only assumptions.

The original UX design this template is based on can be found on Figma [here](https://www.figma.com/file/h8Qh89sALKZK9Ru38NDg1u/E-Commerce-App-Design-(Community)).

## Screenshots

<img src="/assets/screenshots/login_screen.png" alt="Login Screen" width="200"> | <img src="/assets/screenshots/register_screen.png" alt="Register Screen" width="200"> | <img src="/assets/screenshots/forgot_password_screen.png" alt="Forgot Password Screen" width="200"> | <img src="/assets/screenshots/home_screen.png" alt="Home Screen" width="200"> | <img src="/assets/screenshots/shop_screen.png" alt="Shop Screen" width="200"> | <img src="/assets/screenshots/category_screen.png" alt="Category Screen" width="200"> | <img src="/assets/screenshots/filter_screen.png" alt="Filter Screen" width="200"> | <img src="/assets/screenshots/visual_search_screen.png" alt="Visual Search Screen" width="200"> | <img src="/assets/screenshots/crop_screen.png" alt="Search Screen" width="200"> | <img src="/assets/screenshots/sort_screen.png" alt="Sort Screen" width="200">

## Features

- User authentication screens: sign up, sign in, and forgot password
- Product browsing flows: home, shop, categories, filters, and sorting
- Product detail screens and reusable product UI components
- Expo-first design system with reusable tokens, adaptive surfaces, and haptic-ready controls
- Liquid Glass support on capable iOS versions with blur/tinted fallbacks elsewhere
- Visual search flow with pluggable providers
- Bag, favorites, and profile template areas ready for backend wiring
- Reusable Expo + React Native app structure for commerce projects

## Technology stack

- Expo SDK 56
- React Native 0.85
- React 19
- React Navigation
- React Native Elements
- Expo GlassEffect, Blur, Image, Haptics, Splash Screen, Secure Store, and System UI
- Formik + Yup
- Biome
- `react-native-fast-tflite` for local visual search

## Setup

1. Clone the repository

```bash
git clone https://github.com/JamesUgbanu/Ecommerce-mobile-template.git
cd Ecommerce-mobile-template
```

2. Use a supported Node version

Expo 56 and React Native 0.85 require Node `22.13.x+`. Use the version in `.nvmrc` where possible.

3. Copy the environment example

```bash
cp .env.example .env
```

4. Install dependencies

```bash
npm install
```

5. Start the project

```bash
npm run start
```

The default setup keeps visual search disabled so the app can boot cleanly without native AI setup.

6. Download the local model only if you want on-device visual search

```bash
npm run download:model
```

For local native testing with the TFLite provider, switch the env var to `tflite` and use a dev build:

```bash
npm run prebuild
npm run start:dev-client
```

## Environment variables

```env
EXPO_PUBLIC_VISUAL_SEARCH_PROVIDER=none
EXPO_PUBLIC_REMOTE_VISUAL_SEARCH_URL=
EXPO_PUBLIC_REMOTE_VISUAL_SEARCH_API_KEY=
EXPO_PUBLIC_LIQUID_GLASS_ENABLED=true
EXPO_PUBLIC_USE_DEV_CLIENT=true
```

Supported provider values:

- `none`: default safe mode that keeps the app runnable without native AI setup
- `tflite`: local on-device MobileNet classification
- `remote`: stub for a backend image-search API
- `tensorflow`: accepted as a backward-compatible alias for `tflite`

## Project structure

```text
.
├── assets/
│   └── models/
├── src/
│   ├── app/
│   ├── components/
│   │   ├── common/
│   │   ├── surfaces/
│   │   └── search/
│   ├── constants/
│   ├── data/
│   ├── design-system/
│   ├── hooks/
│   ├── navigation/
│   ├── screens/
│   ├── services/
│   │   ├── ai/
│   │   └── visual-search/
│   ├── types/
│   └── utils/
├── App.tsx
├── app.config.js
├── biome.json
├── metro.config.js
└── package.json
```

## Adaptive design system

The template now has an app-owned design system instead of relying only on component-level hardcoded styles.

- `src/design-system/tokens.ts` defines color, glass, blur, radius, spacing, typography, shadow, and motion tokens.
- `src/components/surfaces/GlassSurface.tsx` renders native `expo-glass-effect` Liquid Glass when available, falls back to `expo-blur` on older Apple platforms, and uses performant tinted/elevated surfaces on Android.
- `src/components/surfaces/ThemedSurface.tsx` provides standard non-glass surfaces for high-density content.
- `src/components/common/AppButton.tsx` centralizes button variants and haptics.
- `src/hooks/useGlassAvailability.ts` guards Liquid Glass APIs so unsupported iOS, Android, web, and older builds stay stable.

Recommended usage:

- Use glass for navigation chrome, tab bars, floating actions, hero overlays, and sheet chrome.
- Prefer standard surfaces for long product grids and form-heavy checkout content.
- Keep all colors, spacing, radii, and shadows flowing through tokens so the template remains easy to brand.

## Visual search

Visual search now lives behind a provider abstraction so the template can support multiple AI strategies without rewriting UI flows.

Current providers:

- `TfliteVisualSearchProvider`: local bundled MobileNet model
- `RemoteVisualSearchProvider`: remote API integration stub
- `NoneVisualSearchProvider`: graceful fallback when visual search is disabled

The repo only bundles the files needed for local inference:

- `assets/models/ImageNetLabels.txt`

The actual `.tflite` model is intentionally not committed. The repo ships with a tiny placeholder so Expo can resolve the asset path, and `npm run download:model` replaces that placeholder with the real model locally.

### Why TFLite instead of TensorFlow.js

The repo previously used TensorFlow.js in Expo. That path made dependency resolution brittle and blocked clean Expo upgrades. TFLite is the better default here because it fits the modern React Native ecosystem more naturally and avoids the older `tfjs-react-native` bridge.

This local provider is still a demo-friendly classifier, not a full retail similarity search engine. For production-grade visual discovery, most teams will eventually want a backend search service or embedding-based retrieval pipeline.

### Remote provider

The remote provider intentionally does not hardcode secrets. Wire it to your own backend and keep API credentials outside the client app.

## Expo and native builds

This app uses dynamic Expo config in `app.config.js` so teams can control native plugins and feature flags per environment.

- Liquid Glass requires Expo SDK 56+ and a capable iOS runtime. Unsupported platforms use the app fallback path.
- The TFLite provider uses `react-native-fast-tflite` and should be tested in a development build or production build.
- Keep `EXPO_PUBLIC_VISUAL_SEARCH_PROVIDER=none` for Expo Go or when native AI setup is not needed.
- Use `npx expo-doctor` after dependency changes and `npx expo config --type introspect` before native prebuilds.

## Biome

Available scripts:

```bash
npm run format
npm run format:check
npm run lint
npm run check
npm run typecheck
```

## Validation

Commands used during this refresh:

```bash
npm install
npm run check
npm run lint
npm run format:check
npm run typecheck
npx expo config --type public
npx expo config --type introspect
CI=1 npx expo start --clear --port 8088
```

Validation notes:

- TypeScript check passes
- SDK and UI dependencies have been upgraded to the Expo SDK 56 generation
- the app is configured to start safely with visual search disabled by default
- full Expo config/start validation should be run on Node `22.13.x+`

## Extending the template

Good next steps:

- connect catalog data to a real API
- wire bag and favorites to persistence
- replace the remote provider stub with a backend image-search endpoint
- migrate route files to Expo Router if deep linking, web routing, or typed file routes become priorities
- swap the local classifier for a stronger retrieval model if product similarity matters
- add focused screen and service tests around product and visual-search flows

## License

MIT
