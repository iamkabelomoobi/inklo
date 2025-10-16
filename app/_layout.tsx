import { Stack } from "expo-router";
import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";

const RootLayout = () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden={false} translucent={true} />
      <Stack
        initialRouteName="screens/(onboarding)/OnboardingScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="screens/(onboarding)/OnboardingScreen" />
      </Stack>
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
