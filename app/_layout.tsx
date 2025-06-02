import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { CartProvider } from "@/context/CartContext";

import "../global.css";
function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <CartProvider>
      <ThemeProvider value={DefaultTheme}>
        <Stack>
          {/* <Stack.Screen name="index" /> */}
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        {/* <StatusBar style="auto" /> */}
      </ThemeProvider>
    </CartProvider>
  );
}
export default RootLayout;
