import { Slot, SplashScreen } from "expo-router";
import { ThemeProvider } from "styled-components/native";

import { theme } from "../providers/theme";
import { useFonts } from "expo-font";

export default function Root() {
  // TODO
  // Apollo & graphql mocked out
  // Auth mocked out with routes and redirections
  // @common components setup with some example content on each screen (just typography)

  // custom font
  const [fontsLoaded] = useFonts({
    bold: require("../assets/fonts/Montserrat-Bold.ttf"),
    boldItalic: require("../assets/fonts/Montserrat-BoldItalic.ttf"),
    extraBold: require("../assets/fonts/Montserrat-ExtraBold.ttf"),
    extraBoldItalic: require("../assets/fonts/Montserrat-ExtraBoldItalic.ttf"),
    extraLight: require("../assets/fonts/Montserrat-ExtraLight.ttf"),
    extraLightItalic: require("../assets/fonts/Montserrat-ExtraLightItalic.ttf"),
    italic: require("../assets/fonts/Montserrat-Italic.ttf"),
    light: require("../assets/fonts/Montserrat-Light.ttf"),
    lightItalic: require("../assets/fonts/Montserrat-LightItalic.ttf"),
    medium: require("../assets/fonts/Montserrat-Medium.ttf"),
    mediumItalic: require("../assets/fonts/Montserrat-MediumItalic.ttf"),
    regular: require("../assets/fonts/Montserrat-Regular.ttf"),
    semiBold: require("../assets/fonts/Montserrat-SemiBold.ttf"),
    semiBoldItalic: require("../assets/fonts/Montserrat-SemiBoldItalic.ttf"),
    thin: require("../assets/fonts/Montserrat-Thin.ttf"),
    thinItalic: require("../assets/fonts/Montserrat-ThinItalic.ttf"),
  });

  if (!fontsLoaded) {
    return <SplashScreen />;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Slot />
      </ThemeProvider>
    </>
  );
}
