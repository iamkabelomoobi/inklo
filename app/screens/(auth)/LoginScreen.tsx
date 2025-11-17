import { Images } from "@/assets/images";
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
import useAuthAnimations from "@/app/hooks/useAuthAnimations";
import { createAuthStyles } from "@/app/theme/authStyles";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );
  const [isLoading, setIsLoading] = useState(false);

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

  const validateForm = () => {
    const newErrors: typeof errors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignIn = () => {
    if (validateForm()) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    }
  };

  const handleFieldChange = (field: keyof typeof errors, value: string) => {
    if (errors[field]) {
      setErrors({ ...errors, [field]: undefined });
    }

    if (field === "email") {
      setEmail(value);
    } else {
      setPassword(value);
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
              <Text style={styles.tagline}>Welcome back to Inklo</Text>
              <Text style={styles.title}>Log into your account</Text>
            </Animated.View>
          </View>

          <Animated.View
            style={[
              styles.card,
              { opacity: formFadeAnim, transform: [{ translateY: formSlideAnim }] },
            ]}
          >
            <Text style={styles.subHeading}>Sign in to continue</Text>
            <Text style={styles.helperText}>
              Enter your email and password to access your account.
            </Text>

            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Email</Text>
              <View
                style={[
                  styles.inputContainer,
                  errors.email && styles.inputError,
                ]}
              >
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
                  onChangeText={(text) => handleFieldChange("email", text)}
                />
              </View>
              {errors.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}
            </View>

            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Password</Text>
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
                  placeholder="Your password"
                  placeholderTextColor="#999"
                  style={[styles.input, styles.passwordInput]}
                  secureTextEntry={!showPassword}
                  value={password}
                  onChangeText={(text) => handleFieldChange("password", text)}
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

            <View style={styles.forgotPasswordContainer}>
              <TouchableOpacity
                onPress={() =>
                  router.push("/screens/(auth)/ForgotPasswordScreen")
                }
              >
                <Text style={styles.forgotPasswordText}>Forgot password?</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={[styles.primaryButton, isLoading && styles.buttonDisabled]}
              onPress={handleSignIn}
              disabled={isLoading}
            >
              {isLoading ? (
                <ActivityIndicator color="#FFFFFF" />
              ) : (
                <Text style={styles.primaryButtonText}>Sign In</Text>
              )}
            </TouchableOpacity>

            <View style={styles.separator}>
              <View style={styles.separatorLine} />
              <Text style={styles.separatorText}>or continue with</Text>
              <View style={styles.separatorLine} />
            </View>

            <View style={styles.socialButtons}>
              <TouchableOpacity style={styles.socialButton}>
                <Ionicons name="logo-google" size={20} color="#DB4437" />
                <Text style={styles.socialButtonText}>Google</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialButton}>
                <Ionicons name="logo-apple" size={20} color="#000000" />
                <Text style={styles.socialButtonText}>Apple</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={() => router.push("/screens/(auth)/RegisterScreen")}
            >
              <Text style={styles.footerText}>
                New to Inklo? <Text style={styles.footerLink}>Create account</Text>
              </Text>
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
    marginBottom: 12,
  },
  forgotPasswordContainer: {
    alignItems: "flex-end",
    marginTop: -8,
    marginBottom: 12,
  },
  forgotPasswordText: {
    color: "#111111",
    fontWeight: "600",
  },
});

export default LoginScreen;
