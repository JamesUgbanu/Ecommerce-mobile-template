# E-commerce Mobile Template

A reusable React Native + Expo starter for e-commerce experiences. It includes auth UI, product browsing, product detail, filter flows, and an optional visual search feature that supports both a local TFLite provider and a remote AI provider stub.

This repo is meant to be a cleaner production-friendly template, not a finished commerce app. The current bag, favorites, and profile areas are intentionally simple so teams can connect real backend logic without fighting demo-only assumptions.

## Stack

- Expo SDK 55
- React Native 0.83
- React 19
- React Navigation
- React Native Elements
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

Expo 55 and React Native 0.83 require a newer Node runtime. Use Node `20.19.4+` or a current Node 22 LTS release.

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
│   │   ├── product/
│   │   └── search/
│   ├── constants/
│   ├── data/
│   ├── hooks/
│   ├── navigation/
│   ├── screens/
│   ├── services/
│   │   ├── ai/
│   │   └── visual-search/
│   ├── types/
│   └── utils/
├── App.tsx
├── app.json
├── biome.json
├── metro.config.js
└── package.json
```

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

- Biome checks pass
- TypeScript check passes
- Expo config resolves correctly for SDK `55.0.0`
- the app is configured to start safely with visual search disabled by default
- `expo start` is still sensitive to the local Node runtime in this environment because the machine is on Node `20.9.0`, while Expo 55 expects `20.19.4+`

## Extending the template

Good next steps:

- connect catalog data to a real API
- wire bag and favorites to persistence
- replace the remote provider stub with a backend image-search endpoint
- swap the local classifier for a stronger retrieval model if product similarity matters
- add focused screen and service tests around product and visual-search flows

## License

MIT
