import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'TellevoDuoc',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      BackgroundColor: "#00CCFF",
      showSpinner: false,
      androidSpinnerStyle: "Small",
      splashFullScreen: true,
      splashImmersive: true,
    },
  },
};

export default config;
