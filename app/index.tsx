import { SplashScreen, useRootNavigationState, useRouter } from "expo-router";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function Main() {
  const router = useRouter();
  const navigationState = useRootNavigationState();

  useEffect(() => {
    if (!navigationState?.key) {
      // Temporary fix for router not being ready.
      return;
    }

    router.replace("/welcome");
  }, [!navigationState?.key]);

  return null;
}
