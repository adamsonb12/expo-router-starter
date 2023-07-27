import { Platform } from "react-native";

// ios : android/web
export const fontSizeTitle = Platform.OS === "ios" ? "17px" : "20px";
export const fontSizeParagraph = Platform.OS === "ios" ? "17px" : "16px";
export const fontSizeSecondary = Platform.OS === "ios" ? "15px" : "14px";
// tertiary is for labels, captions, etc
export const fontSizeTertiary = Platform.OS === "ios" ? "13px" : "14px";
// Tiny is for the AppBar and maybe some other but few use cases
export const fontSizeTiny = Platform.OS === "ios" ? "10px" : "14px";
