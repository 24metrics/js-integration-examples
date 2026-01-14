![](./js_react_app_home.png)

# Crypto Trading App - JavaScript Integration Example

A React-based crypto trading web app that demonstrates integration with the ASP tracking library for monitoring user interactions.

## Features

- **Home Page**: Landing page displaying cryptocurrency cards with real-time tracking
- **Crypto Detail Pages**: Individual pages for Bitcoin, Ethereum, Cardano, Solana, Ripple, and Polkadot
- **ASP Tracking Integration**: Automatic event tracking for:
  - Page loads (Home Page)
  - Crypto card clicks (with crypto name)

## Tech Stack

- React 18
- React Router 6
- Vite
- ASP Tracking Library (https://cdn.fstrk.net/lib/index.js)

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to the local URL shown in the terminal (typically http://localhost:5173)

## Tracking Implementation

First Enter your Integration ID for the app setup.

![](./js_react_app_setup.png)

The app integrates the ASP tracking library with the following events:

- Home Page Load - When users land on the home page:
- Crypto Card Click - When users click on a crypto card:

## Project Structure

```
├── index.html              # Main HTML with 24metrics SDK script
├── src/
│   ├── main.jsx           # React entry point
│   ├── App.jsx            # Main app with routing
│   ├── pages/
│   │   ├── Setup.jsx      # Setup page for Integration ID
│   │   ├── Home.jsx       # Home page with tracking
│   │   └── CryptoDetail.jsx
│   ├── components/
│   │   └── CryptoCard.jsx
│   └── data/
│       └── cryptos.js     # Cryptocurrency data
└── package.json
```

## Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.
