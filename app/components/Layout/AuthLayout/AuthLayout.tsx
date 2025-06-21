import { BlurView } from "expo-blur";
import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

interface AuthLayoutProps {
  backgroundImage?: string;
  children: React.ReactNode;
}

const AuthLayout = ({ backgroundImage, children }: AuthLayoutProps) => (
  <ImageBackground
    source={{ uri: backgroundImage }}
    style={styles.bg}
    resizeMode="cover"
  >
    <BlurView intensity={30} style={StyleSheet.absoluteFill} tint="dark" />
    <View style={styles.overlay}>{children}</View>
  </ImageBackground>
);

const styles = StyleSheet.create({
  bg: { flex: 1 },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.35)",
    justifyContent: "center",
    paddingVertical: 48,
    paddingHorizontal: 24,
  },
});

export default AuthLayout;
