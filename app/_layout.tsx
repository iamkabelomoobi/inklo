import { Stack, usePathname } from "expo-router";
import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import BottomNav from "./components/BottomNav";

const RootLayout = () => {
  const pathname = usePathname();

  // Hide BottomNav on (auth) and (onboarding) routes
  const hideBottomNav =
    pathname.startsWith("/(auth)") || pathname.startsWith("/(onboarding)");

  return (
    <View style={styles.container}>
      <StatusBar hidden={false} translucent={false} />
      <Stack
        initialRouteName="(onboarding)/onboarding"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(home)/index" />
        <Stack.Screen name="(shop)" />
      </Stack>
      {/* {!hideBottomNav && <BottomNav />} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});

export default RootLayout;