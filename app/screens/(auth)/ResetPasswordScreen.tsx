import { Images } from "@/assets/images";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
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
import useAuthAnimations from "@/app/hooks/useAuthAnimations";
import { createAuthStyles } from "@/app/theme/authStyles";

const ResetPasswordScreen = () => {
  const params = useLocalSearchParams<{ email?: string }>();
  const emailParam = Array.isArray(params.email)
    ? params.email[0]
    : params.email;
  const email = emailParam ?? "your account";

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<{
    password?: string;
    confirmPassword?: string;
  }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

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

  const validatePassword = (value: string) => value.length >= 8;

  const handleResetPassword = () => {
    const newErrors: typeof errors = {};

    if (!validatePassword(password)) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (confirmPassword !== password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setIsLoading(true);
    setSuccessMessage("");

    setTimeout(() => {
      setIsLoading(false);
      setSuccessMessage("Password updated! Redirecting to sign in...");
      setTimeout(() => {
        router.replace("/screens/(auth)/LoginScreen");
      }, 900);
    }, 1200);
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
              <Text style={styles.tagline}>You&apos;re almost there</Text>
              <Text style={styles.title}>Create a new password</Text>
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
            <Text style={styles.subHeading}>Secure your account</Text>
            <Text style={styles.helperText}>
              Choose a strong password you haven&apos;t used before for {email}.
            </Text>

            <View style={styles.inputWrapper}>
              <Text style={styles.label}>New password</Text>
              <View
                style={[
                  styles.inputContainer,
                  errors.password && styles.inputError,
                ]}
              >
                <Ionicons
                  name="lock-closed-outline"
                  size={18}
                  color="#888"
                  style={styles.inputIcon}
                />
                <TextInput
                  placeholder="Minimum 8 characters"
                  placeholderTextColor="#999"
                  style={[styles.input, styles.passwordInput]}
                  secureTextEntry={!showPassword}
                  value={password}
                  onChangeText={(text) => {
                    setPassword(text);
                    if (errors.password) {
                      setErrors({ ...errors, password: undefined });
                    }
                  }}
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  style={styles.eyeIcon}
                >
                  <Ionicons
                    name={showPassword ? "eye-outline" : "eye-off-outline"}
                    size={20}
                    color="#888"
                  />
                </TouchableOpacity>
              </View>
              {errors.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}
            </View>

            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Confirm password</Text>
              <View
                style={[
                  styles.inputContainer,
                  errors.confirmPassword && styles.inputError,
                ]}
              >
                <Ionicons
                  name="shield-checkmark-outline"
                  size={18}
                  color="#888"
                  style={styles.inputIcon}
                />
                <TextInput
                  placeholder="Re-enter password"
                  placeholderTextColor="#999"
                  style={[styles.input, styles.passwordInput]}
                  secureTextEntry={!showConfirmPassword}
                  value={confirmPassword}
                  onChangeText={(text) => {
                    setConfirmPassword(text);
                    if (errors.confirmPassword) {
                      setErrors({ ...errors, confirmPassword: undefined });
                    }
                  }}
                />
                <TouchableOpacity
                  onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                  style={styles.eyeIcon}
                >
                  <Ionicons
                    name={
                      showConfirmPassword ? "eye-outline" : "eye-off-outline"
                    }
                    size={20}
                    color="#888"
                  />
                </TouchableOpacity>
              </View>
              {errors.confirmPassword && (
                <Text style={styles.errorText}>{errors.confirmPassword}</Text>
              )}
            </View>

            <TouchableOpacity
              style={[styles.primaryButton, isLoading && styles.buttonDisabled]}
              onPress={handleResetPassword}
              disabled={isLoading}
            >
              {isLoading ? (
                <ActivityIndicator color="#FFFFFF" />
              ) : (
                <Text style={styles.primaryButtonText}>Reset password</Text>
              )}
            </TouchableOpacity>

            {!!successMessage && (
              <Text style={styles.successText}>{successMessage}</Text>
            )}

            <TouchableOpacity
              style={styles.backLink}
              onPress={() => router.replace("/screens/(auth)/LoginScreen")}
            >
              <Ionicons name="log-in-outline" size={16} color="#111111" />
              <Text style={styles.backLinkText}>Return to Sign In</Text>
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
  successText: {
    marginTop: 16,
    textAlign: "center",
    fontSize: 13,
    color: "#16A34A",
    fontWeight: "600",
  },
  backLink: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    marginTop: 24,
  },
  backLinkText: {
    color: "#111111",
    fontWeight: "600",
    fontSize: 14,
  },
});

export default ResetPasswordScreen;
