import { Stack, usePathname } from "expo-router";
import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import BottomNav from "./components/BottomNav";

const RootLayout = () => {
  const pathname = usePathname();

  const showBottomNav = [
    "/(home)/index",
    "/(shop)",
    "/(shop)/categories",
    "/(shop)/cart",
    "/(shop)/wishlist",
    "/(dashboard)/profile",
  ].some((route) => pathname.startsWith(route));

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} translucent={false} />
      <Stack
        initialRouteName="(onboarding)/onboarding"
        screenOptions={{ headerShown: false }}
      ></Stack>
      <BottomNav />
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
