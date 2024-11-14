import 'react-native-config';

declare module 'react-native-config' {
  interface NativeConfig {
    APP_PACKAGE_NAME: string;
    APP_DISPLAY_NAME: string;
    APP_VERSION_ANDROID: string;
    APP_VERSION_IOS: string;
    APP_BUILD_NUMBER_ANDROID: string;
    APP_BUILD_NUMBER_IOS: string;
  }
}
