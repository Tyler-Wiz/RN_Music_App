import React, { useCallback, useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { MyStack } from "./Navigators/Stack";
import { StatusBar } from "expo-status-bar";
import { SongProvider } from "./store/Song-Context";

// SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          Poppins300: require("./assets/fonts/Poppins-Light.ttf"),
          Poppins400: require("./assets/fonts/Poppins-Regular.ttf"),
          Poppins500: require("./assets/fonts/Poppins-Medium.ttf"),
          Poppins600: require("./assets/fonts/Poppins-SemiBold.ttf"),
          Poppins700: require("./assets/fonts/Poppins-Bold.ttf"),
        });
        await new Promise((resolve) => setTimeout(resolve, 500));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <SongProvider>
      <NavigationContainer onReady={onLayoutRootView}>
        <StatusBar style="light" />
        <MyStack />
      </NavigationContainer>
    </SongProvider>
  );
}
