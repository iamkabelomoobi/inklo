import { Stack } from "expo-router";
import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { Toast } from "react-native-toast-message/lib/src/Toast";

const RootLayout = () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} translucent={true} />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="screens/(onboarding)" />
        <Stack.Screen name="screens/(auth)" />
        <Stack.Screen name="screens/(home)" />
      </Stack>
      <Toast />
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
