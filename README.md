# E-commerce Mobile Template

A reusable React Native + Expo e-commerce starter with:

- auth UI screens
- home and category browsing flows
- product detail screen
- filter UI
- optional visual search
- Biome formatting and linting

This repo is intentionally positioned as a production-friendly template, not a finished commerce app. The cart, favorites, and profile areas are now cleaner template placeholders so teams can wire them to real backend data without inheriting misleading screen mappings.

## Why the Expo version stayed conservative

The project still targets `Expo SDK 49` and `React Native 0.72`.

That was a deliberate choice:

- the current TensorFlow React Native path (`@tensorflow/tfjs-react-native`) is tied to the older Expo / RN generation
- newer Expo SDKs move into the newer React Native architecture faster than the TensorFlow React Native adapter has kept up
- this update prioritizes a stable, maintainable template over a risky SDK jump that could silently break visual search

If you want to move to a newer Expo SDK later, the new visual-search provider abstraction makes it much easier to replace the TensorFlow provider with a remote AI service or a different local runtime.

## Screenshots

<img src="/assets/screenshots/login_screen.png" alt="Login Screen" width="200"> | <img src="/assets/screenshots/register_screen.png" alt="Register Screen" width="200"> | <img src="/assets/screenshots/forgot_password_screen.png" alt="Forgot Password Screen" width="200"> | <img src="/assets/screenshots/home_screen.png" alt="Home Screen" width="200"> | <img src="/assets/screenshots/shop_screen.png" alt="Shop Screen" width="200"> | <img src="/assets/screenshots/category_screen.png" alt="Category Screen" width="200"> | <img src="/assets/screenshots/filter_screen.png" alt="Filter Screen" width="200"> | <img src="/assets/screenshots/visual_search_screen.png" alt="Visual Search Screen" width="200"> | <img src="/assets/screenshots/crop_screen.png" alt="Search Screen" width="200"> | <img src="/assets/screenshots/sort_screen.png" alt="Sort Screen" width="200">

## Stack

- React Native
- Expo
- React Navigation
- React Native Elements
- Formik + Yup
- Biome
- TensorFlow.js React Native adapter for local visual search

## Setup

1. Clone the repository

```bash
git clone https://github.com/JamesUgbanu/Ecommerce-mobile-template.git
cd Ecommerce-mobile-template
```

2. Copy the environment example

```bash
cp .env.example .env
```

3. Install dependencies

```bash
npm install --legacy-peer-deps
```

The `--legacy-peer-deps` flag is currently required because the TensorFlow React Native packages still have a fragile peer-dependency story.

4. Start Expo

```bash
npm run start
```

## Environment variables

The app uses Expo public env vars for visual-search provider selection:

```env
EXPO_PUBLIC_VISUAL_SEARCH_PROVIDER=tensorflow
EXPO_PUBLIC_REMOTE_VISUAL_SEARCH_URL=
EXPO_PUBLIC_REMOTE_VISUAL_SEARCH_API_KEY=
```

Supported provider values:

- `tensorflow`: on-device TensorFlow.js / MobileNet provider
- `remote`: stub for a remote image-search API
- `none`: disables visual search gracefully

## Project structure

```text
.
├── assets/
├── src/
│   ├── app/
│   ├── components/
│   │   ├── common/
│   │   ├── search/
│   │   └── ...
│   ├── constants/
│   ├── data/
│   ├── hooks/
│   ├── localization/
│   ├── navigation/
│   ├── screens/
│   ├── services/
│   │   ├── ai/
│   │   └── visual-search/
│   ├── styles/
│   ├── types/
│   └── utils/
├── App.tsx
├── biome.json
└── package.json
```

## Visual search

### Current TensorFlow option

TensorFlow is still reasonable here if you want:

- offline inference
- zero API dependency
- a template-friendly local demo of visual search

But it is not the cleanest long-term choice for every Expo app because:

- the React Native adapter moves slowly
- dependency installation is brittle
- upgrading Expo becomes harder
- MobileNet classification is useful for demo search, but not the same thing as strong retail similarity search

### What changed

Visual search now lives behind a provider contract:

- `TensorflowVisualSearchProvider`
- `RemoteVisualSearchProvider`
- `NoneVisualSearchProvider`

The UI now:

- shows which provider is active
- lets users take a photo or upload one
- opens a preview screen before search
- displays search results or a graceful empty/error state

### Remote AI provider

The remote provider is intentionally a stub. It is meant to be replaced with your own upload + inference API flow later.

Do not hardcode API keys in the app. Use env vars and a backend whenever you need secret credentials.

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
npm install --legacy-peer-deps
npm run check
npm run lint
npm run format:check
npm run typecheck
npx expo config --type public
CI=1 npx expo start --clear --port 8088
```

Notes:

- `expo config` succeeded and resolved the app config correctly for SDK `49.0.0`
- `expo start` began booting the project, but the CLI session stayed open as expected in this environment
- port `8081` was already occupied locally, so validation was moved to `8088`

## Extending the template

Good next steps for product teams:

- connect catalog data to an API instead of local mock data
- wire the bag and favorites tabs to real persistence
- replace the remote visual-search stub with a backend image-search endpoint
- migrate the filter UI to real product query params
- add lightweight screen tests around the product and visual-search flows

## License

MIT
