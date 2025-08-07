# CODA Aplication Android


Check out our intro video [here](./demoVid.mp4).


## System Requirements
- Node.js (latest stable version recommended)
- npm or yarn
- React Native CLI
- Android Studio / Xcode (if you plan to run on physical devices or emulators)

---

## Installation

## Step 1: Clone the project
Clone the project to your local machine:
```bash
git clone https://github.com/sodasign/Maor.git
```

## Step 2: Install dependencies
```bash
npm install
```
## Step 3: Run the project
### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```
If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.



## Running the App on a Real Device

To run the app on a real Android device, follow the steps below:

### 1. **Enable Developer Options on Your Android Device**
To enable Developer Options on your Android device, follow these steps:

1. **Open Settings** on your Android device.
2. Scroll down and **tap on "About phone"**.
3. Find the **Build number** entry. Tap it **7 times** rapidly.
4. After this, you should see a message that says **"You are now a developer!"**.

### 2. **Enable USB Debugging**
After enabling Developer Options, you need to enable **USB Debugging**:

1. Go back to the main **Settings** menu.
2. Tap on **System** (if not visible, it could be in "Advanced").
3. Tap on **Developer options**.
4. Scroll down and **enable "USB debugging"** by toggling the switch.
5. You might see a pop-up asking for confirmation. Select **"Allow"** to confirm.

### 3. **Connect Your Device to Your Computer**
1. **Use a Data Cable** (not just a charging cable) to connect your Android device to your computer.
2. Once connected, you might see a pop-up on your Android device asking you to **"Allow USB debugging"** from your computer.
3. Click **"Allow"** to grant permission for your computer to interact with your device.

### 4. **Verify Your Device Connection**
To verify that your device is connected and recognized by your computer, follow these steps:

1. Open **Command Prompt** (Windows) or **Terminal** (macOS/Linux).
2. Run the following command:
   ```bash
   adb devices



## Android Studio Setup

To run the project locally, please make sure to install the following:

### 1. **Install Android Studio**
- Download the latest stable version of Android Studio from the [official website](https://developer.android.com/studio).
- Follow the installation instructions for your operating system (Windows/macOS/Linux).

### 2. **Required SDK Packages**
After installing Android Studio, ensure the following SDK components are installed via the **SDK Manager**:

#### **Android SDK**
- **Android SDK Platform 35**: `platforms;android-35`
  
#### **Build Tools**
- **Build Tools 35.0.0**: `build-tools;35.0.0`

#### **CMake**
- **CMake 3.22.1**: `cmake;3.22.1`
- **CMake 3.31.0**: `cmake;3.31.0`

#### **Command-Line Tools**
- **Command-Line Tools (latest)**: `cmdline-tools;latest` (version 17.0)

#### **NDK (Native Development Kit)**
- **NDK 26.1.10909125**: `ndk;26.1.10909125`

#### **Platform Tools**
- **Platform Tools 35.0.2**: `platform-tools`

#### **System Images**
- **System Image for Android 32 (Google APIs + Play Store, x86_64)**: `system-images;android-32;google_apis_playstore;x86_64`
- **System Image for Android 35 (Google APIs + Play Store, x86_64)**: `system-images;android-35;google_apis_playstore;x86_64`

#### **Emulator**
- **Android Emulator**: `emulator (35.2.10)`

#### **Extras**
- **Android Emulator Hypervisor Driver**: `extras;google;Android_Emulator_Hypervisor_Driver (2.2.0)`
- **Google Play services**: `extras;google;google_play_services (49)`
- **Google Play Instant SDK**: `extras;google;instantapps (1.9.0)`
- **Google Repository**: `extras;google;m2repository (58)`
- **Google Play APK Expansion**: `extras;google;market_apk_expansion (1)`
- **Google Play Licensing Library**: `extras;google;market_licensing (1)`
- **Google USB Driver**: `extras;google;usb_driver (13)`
- **Google Web Driver**: `extras;google;webdriver (2)`
- **Intel HAXM (Deprecated)**: `extras;intel;Hardware_Accelerated_Execution_Manager (7.6.5)`

### 3. **Emulator Setup**
Use the **AVD Manager** (Android Virtual Device) in Android Studio to create virtual devices that match the required Android versions and configurations for the project. Ensure the following system images are available:
- **Android 32 (Google APIs + Play Store)** for `x86_64`.
- **Android 35 (Google APIs + Play Store)** for `x86_64`.

### 4. **Gradle Version**
The project uses **Gradle version 8.10.2**. Ensure you have the corresponding version of Gradle installed, which is managed automatically by Android Studio through the `gradle-wrapper.properties` file:
```properties
distributionUrl=https\://services.gradle.org/distributions/gradle-8.10.2-all.zip
