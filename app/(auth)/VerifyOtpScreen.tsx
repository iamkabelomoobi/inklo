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
import { authStyles } from "@/styles/authstyles";
import VerifyOtpForm from "./components/VerifyOtpForm";

const VerifyOtpScreen = () => {
  return (
    <ImageBackground
      source={require("../../assets/images/auth/auth.jpg")}
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

            <VerifyOtpForm />
          </KeyboardAvoidingView>
        </SafeAreaView>
      </BlurView>
    </ImageBackground>
  );
};

export default VerifyOtpScreen;
