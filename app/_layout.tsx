import { Stack } from "expo-router";
import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";

const RootLayout = () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden={false} translucent={false} />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="screens/(onboarding)/OnboardingScreen1" />
        <Stack.Screen name="screens/(auth)/RegisterScreen" />
        <Stack.Screen name="screens/(auth)/LoginScreen" />
        <Stack.Screen name="screens/(auth)/ForgotPasswordScreen" />
        <Stack.Screen name="screens/(auth)/OTPVerificationScreen" />
        <Stack.Screen name="screens/(auth)/ResetPasswordScreen" />
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
