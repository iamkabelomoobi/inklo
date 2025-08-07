import { BlurView } from "expo-blur";
import React from "react";
import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
  Text,
} from "react-native";
import SigninForm from "./components/SigninForm";
import { authStyles } from "@/styles/authstyles";

const SignInScreen = () => {
  return (
    <ImageBackground
      source={require("../../assets/images/onboarding/onboarding-4.jpg")}
      style={authStyles.container}
    >
      <BlurView intensity={70} tint="dark" style={authStyles.blurContainer}>
        <SafeAreaView style={authStyles.safeArea}>
          <StatusBar barStyle="light-content" />
          <KeyboardAvoidingView
            style={authStyles.keyboardAvoid}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            {/* Brand Title */}
            <Text style={authStyles.brandTitle}>Inklo</Text>

            {/* Login Form */}
            <SigninForm />
          </KeyboardAvoidingView>
        </SafeAreaView>
      </BlurView>
    </ImageBackground>
  );
};

export default SignInScreen;
