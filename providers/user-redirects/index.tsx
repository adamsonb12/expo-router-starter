import { useRootNavigationState, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";
import Constants from "expo-constants";

import { useAuthContext } from "../auth";

const isRunningInExpoGo = Constants.appOwnership === "expo";

export const UserRedirects = () => {
  const { isAuthenticated } = useAuthContext();
  const segments = useSegments();
  const router = useRouter();
  const navigationState = useRootNavigationState();

  useEffect(() => {
    if (!navigationState?.key) {
      // Temporary fix for router not being ready.
      return;
    }

    const inAuthenticatedGroup = segments[0] === "(authenticated)";
    const isOnSitemapInTest = isRunningInExpoGo && segments[0] === "_sitemap";

    if (!isOnSitemapInTest) {
      if (!isAuthenticated && inAuthenticatedGroup) {
        router.replace("/welcome");
      } else if (isAuthenticated && !inAuthenticatedGroup) {
        router.replace("/home");
      }
    }
  }, [isAuthenticated, segments, !navigationState?.key]);

  return null;
};
