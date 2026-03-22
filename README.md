# 🍎 Fruit Stock Management App

A React Native mobile application for managing fruit inventory with an AI-powered assistant built on Google Gemini.

## ✨ Features

- 🔐 **Login System** — Simple authentication with image slideshow on the login screen
- 📋 **Product List** — View all fruit inventory stored in Firebase Firestore
- ➕ **Add Product** — Add new fruit items to the stock database
- ✏️ **Update Product** — Edit existing fruit item details
- 🤖 **FruitGuruAI Chat** — AI-powered chatbot (powered by Gemini 2.5 Flash) specializing in tropical fruits and exotic fruit knowledge

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| [React Native](https://reactnative.dev/) | Cross-platform mobile framework |
| [Expo](https://expo.dev/) | Development toolchain (~54.0) |
| [Firebase Firestore](https://firebase.google.com/) | Cloud database for fruit stock |
| [Firebase Auth](https://firebase.google.com/) | Authentication service |
| [Google Gemini AI](https://ai.google.dev/) | AI chatbot (gemini-2.5-flash) |
| [React Navigation](https://reactnavigation.org/) | Screen navigation (Native Stack) |
| [react-native-swiper](https://github.com/leecade/react-native-swiper) | Image carousel on login screen |

## 📁 Project Structure

```
├── App.js              # Root navigation setup
├── firebase.js         # Firebase app initialization
├── screens/
│   ├── LoginScreen.jsx     # Login with image swiper
│   ├── ProductList.jsx     # Fruit stock list
│   ├── AddProduct.jsx      # Add new fruit item
│   ├── UpdateProduct.jsx   # Update existing fruit item
│   └── ChatScreen.jsx      # FruitGuruAI chat interface
├── utils/
│   └── getPrompt.js        # Gemini system prompt builder
├── data/
│   └── fruitsApi.js        # Fruit data helpers
└── assets/             # Images and icons
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- Android/iOS device or emulator with [Expo Go](https://expo.dev/go)

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/fruit-stock-management-app.git
cd fruit-stock-management-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Copy the example environment file and fill in your own API keys:

```bash
cp .env.example .env
```

Edit `.env` with your credentials:

```env
EXPO_PUBLIC_GEMINI_API_KEY=your_gemini_api_key_here

EXPO_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
EXPO_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
EXPO_PUBLIC_FIREBASE_APP_ID=your_app_id
EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

> **Get your keys:**
> - Gemini API Key: [Google AI Studio](https://aistudio.google.com/app/apikey)
> - Firebase Config: [Firebase Console](https://console.firebase.google.com/) → Project Settings → Your Apps

### 4. Run the app

```bash
npx expo start
```

Then scan the QR code with Expo Go on your device.

## 🔑 Default Login

| Field | Value |
|---|---|
| Username | `admin` |
| Password | `admin` |

## 📦 Available Scripts

```bash
npm start          # Start Expo dev server
npm run android    # Run on Android emulator
npm run ios        # Run on iOS simulator
npm run web        # Run in web browser
npm run lint       # Run ESLint
```

## 🌱 Environment Variables

| Variable | Description |
|---|---|
| `EXPO_PUBLIC_GEMINI_API_KEY` | Google Gemini API key for AI chat |
| `EXPO_PUBLIC_FIREBASE_API_KEY` | Firebase project API key |
| `EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN` | Firebase auth domain |
| `EXPO_PUBLIC_FIREBASE_PROJECT_ID` | Firebase project ID |
| `EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET` | Firebase storage bucket |
| `EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | Firebase messaging sender ID |
| `EXPO_PUBLIC_FIREBASE_APP_ID` | Firebase app ID |
| `EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID` | Firebase measurement ID |

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

> 📚 Final project for **01418342-65 Mobile Application Design and Development**
