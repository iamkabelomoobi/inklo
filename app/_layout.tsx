import { Stack } from "expo-router";
import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import BottomNav from "./components/BottomNav";

const RootLayout = () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} translucent={false} />
      <Stack
        initialRouteName="(onboarding)/onboarding"
        screenOptions={{ headerShown: false }} // set to false in production
      ></Stack>
      {/* <BottomNav /> */}
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
