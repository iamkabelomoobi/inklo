import useAuthAnimations from "@/app/hooks/useAuthAnimations";
import { createAuthStyles } from "@/app/theme/authStyles";
import { Images } from "@/assets/images";
import { useForgotPassword } from "@/hooks/useAuth";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Animated,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const { mutate: forgotPassword, isPending } = useForgotPassword();

  const {
    logoFadeAnim,
    logoScaleAnim,
    formSlideAnim,
    formFadeAnim,
    circle1Anim,
    circle2Anim,
    circle3Anim,
    circle4Anim,
  } = useAuthAnimations();

  const validateEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubmit = () => {
    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email");
      return;
    }

    forgotPassword({ email: email.trim().toLowerCase() });
  };

  const handleEmailChange = (text: string) => {
    setEmail(text);
    if (error) {
      setError("");
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.safeArea}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={0}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          bounces={false}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.heroContainer}>
            <View style={styles.gradientOverlay} />

            <Animated.View
              style={[
                styles.circle,
                styles.circleTopLeft,
                { transform: [{ translateY: circle1Anim }] },
              ]}
            />
            <Animated.View
              style={[
                styles.circle,
                styles.circleTopRight,
                { transform: [{ translateY: circle2Anim }] },
              ]}
            />
            <Animated.View
              style={[
                styles.circle,
                styles.circleBottomLeft,
                { transform: [{ translateY: circle3Anim }] },
              ]}
            />
            <Animated.View
              style={[
                styles.circle,
                styles.circleBottomRight,
                { transform: [{ translateY: circle4Anim }] },
              ]}
            />

            <Animated.View
              style={{
                opacity: logoFadeAnim,
                transform: [{ scale: logoScaleAnim }],
              }}
            >
              <Image
                source={Images.icon.logoWhite}
                style={styles.heroImage}
                resizeMode="contain"
              />
            </Animated.View>

            <Animated.View style={{ opacity: logoFadeAnim }}>
              <Text style={styles.tagline}>We&apos;ve got you covered</Text>
              <Text style={styles.title}>Reset your password</Text>
            </Animated.View>
          </View>

          <Animated.View
            style={[
              styles.card,
              {
                opacity: formFadeAnim,
                transform: [{ translateY: formSlideAnim }],
              },
            ]}
          >
            <Text style={styles.subHeading}>Forgot your password?</Text>
            <Text style={styles.helperText}>
              No worries! Enter your email and we&apos;ll send you a code to
              reset it.
            </Text>

            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Email address</Text>
              <View style={[styles.inputContainer, error && styles.inputError]}>
                <Ionicons
                  name="mail-outline"
                  size={18}
                  color="#888"
                  style={styles.inputIcon}
                />
                <TextInput
                  placeholder="you@example.com"
                  placeholderTextColor="#999"
                  style={styles.input}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  value={email}
                  onChangeText={handleEmailChange}
                />
              </View>
              {error && <Text style={styles.errorText}>{error}</Text>}
            </View>

            <TouchableOpacity
              style={[styles.primaryButton, isPending && styles.buttonDisabled]}
              onPress={handleSubmit}
              disabled={isPending}
            >
              {isPending ? (
                <ActivityIndicator color="#FFFFFF" />
              ) : (
                <Text style={styles.primaryButtonText}>Send reset code</Text>
              )}
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.backLink}
              onPress={() => router.back()}
            >
              <Ionicons name="arrow-back" size={16} color="#111111" />
              <Text style={styles.backLinkText}>Back to Sign In</Text>
            </TouchableOpacity>
          </Animated.View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = createAuthStyles({
  helperText: {
    fontSize: 13,
    color: "#666666",
    textAlign: "center",
    marginBottom: 20,
  },
  backLink: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    marginTop: 28,
  },
  backLinkText: {
    color: "#111111",
    fontWeight: "600",
    fontSize: 14,
  },
});

export default ForgotPasswordScreen;
