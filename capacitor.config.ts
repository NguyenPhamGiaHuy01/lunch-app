import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Lunch-App',
  webDir: 'www',

  plugins:{
    GoogleAuth:{
      scopes: ["profile", "email"],
      serverClientId: "114086788557-kduirter7dqp3tusfbnj14vjf1uf44ir.apps.googleusercontent.com",
      forceCodeForRefreshToken: true
    },
    SplashScreen:{
      launchShowDuration: 0,
      launchAutoHide: true,
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP",
      //showSpinner: true,
      androidSpinnerStyle: "large",
      iosSpinnerStyle: "small",
      //spinnerColor: "#999999",
      splashFullScreen: true,
      splashImmersive: true,
      layoutName: "launch_screen",
      useDialog: true,
    }
  }
};

export default config;
