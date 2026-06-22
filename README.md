Capture Image with Camare & show List

# FieldCaptureApp

A React Native Expo application that allows field agents to capture photos, add labels, and store them locally for offline access.

<img width="450" height="1000" alt="Screenshot_20260622_184441_Expo Go" src="https://github.com/user-attachments/assets/6d95f89a-3065-402f-8d74-a5b65a64cea6" />



## Features

### Part 1

* Capture photos using the device camera
* Record `capturedAt` timestamp immediately when the photo is taken
* Store photo metadata locally using SQLite
* Display captured photos in a scrollable list
* Show photo thumbnail and capture timestamp
* Delete photos from the list and local storage
* Restore previously captured photos when the app restarts

### Part 2

* After capturing a photo, display a modal requesting a label
* Label is mandatory before the photo can be saved
* Store the label along with photo metadata
* Display the label beneath the photo thumbnail in the list
* Persist labels across application restarts

---

## Expo SDK Version

This project was built using:

```json
"expo": "~56.0.12"
```

---

## Local Storage Choice

I chose **expo-sqlite** for local persistence.

### Why SQLite?

* Structured storage for photo records
* Better suited for collections of data than AsyncStorage
* Supports querying, sorting, and filtering records
* Scales better as the number of photos grows
* Data persists across app restarts

The application stores photo metadata in a SQLite table containing:

* id
* localPath
* capturedAt
* label

---

## Running the Project Locally

### Prerequisites

* Node.js (latest LTS recommended)
* npm
* Expo CLI
* Expo Go app (Android/iOS) or Android Emulator

### Installation

Clone the repository:

```bash
git clone <repository-url>
cd FieldCaptureApp
```

Install dependencies:

```bash
npm install
```

Install Expo packages:

```bash
npx expo install expo-camera
npx expo install expo-sqlite
```

Start the development server:

```bash
npx expo start
```

Run app on device: Expo Go should pre-install in mobile

```bash
npm run android
```

Run on Android:

* Press `a` for Android Emulator

or

* Scan the QR code using Expo Go

---

## Project Structure

```text
src/
├── database/
│   ├── database.ts
│   └── photoRepository.ts
│   └── types.ts
│
├── features/
│   └── FieldCapture.tsx
│
├── utils/
│   └── dateUtils.ts
│
└── App.tsx
```

---

## Data type

```typescript
interface CapturedPhoto {
  id: string;
  localPath: string;
  capturedAt: string;
  label: string;
}
```

---



## Assumptions

* Photos are stored locally on the device.
* Timestamps use the device's current date and time.
* The application is designed to work offline.
* Labels are required before a photo can be saved.

```
```
