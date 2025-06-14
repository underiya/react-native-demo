import { DefaultTheme, ThemeProvider } from "@react-navigation/native";

import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import "../global.css";
function RootLayout() {
  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack>
        {/* <Stack.Screen name="index" /> */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
export default RootLayout;
