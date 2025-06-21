import { BlurView } from "expo-blur";
import React from "react";
import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
} from "react-native";
import SigninForm from "./components/SigninForm";

const SiginScreen = () => {
  return (
    <ImageBackground
      source={require("../../assets/images/auth/auth.jpg")}
      style={styles.container}
    >
      <BlurView intensity={70} tint="dark" style={styles.blurContainer}>
        <SafeAreaView style={styles.safeArea}>
          <StatusBar barStyle="light-content" />
          <KeyboardAvoidingView
            style={styles.keyboardAvoid}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >

            {/* Brand Title */}
            <Text style={styles.brandTitle}>Inklo</Text>

            {/* Login Form */}
            <SigninForm />
          </KeyboardAvoidingView>
        </SafeAreaView>
      </BlurView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  blurContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  safeArea: {
    flex: 1,
  },
  keyboardAvoid: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  brandTitle: {
    fontSize: 52,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 45,
  },
});

export default SiginScreen;
