import useAuthAnimations from "@/app/hooks/useAuthAnimations";
import authStyles from "@/app/theme/authStyles";
import { Images } from "@/assets/images";
import { useRegister } from "@/hooks/useAuth";
import { RegisterRequest } from "@/interfaces/auth";
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

const RegisterScreen = () => {
  const [formData, setFormData] = useState<RegisterRequest>({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof RegisterRequest, string>>
  >({});
  const [showPassword, setShowPassword] = useState(false);

  const { mutate: register, isPending } = useRegister();

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

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    // South African phone number format (10 digits)
    const phoneRegex = /^0[0-9]{9}$/;
    return phoneRegex.test(phone);
  };

  const validateForm = () => {
    const newErrors: typeof errors = {};

    if (!formData.first_name.trim()) {
      newErrors.first_name = "First name is required";
    }
    if (!formData.last_name.trim()) {
      newErrors.last_name = "Last name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignUp = () => {
    if (validateForm()) {
      const payload: RegisterRequest = {
        first_name: formData.first_name.trim(),
        last_name: formData.last_name.trim(),
        email: formData.email.trim().toLowerCase(),
        password: formData.password,
      };

      // Only include phone if it's provided
      if (formData.phone?.trim()) {
        payload.phone = formData.phone.trim();
      }

      register(payload);
    }
  };

  const handleFieldChange = (field: keyof RegisterRequest, value: string) => {
    if (errors[field]) {
      setErrors({ ...errors, [field]: undefined });
    }
    setFormData({ ...formData, [field]: value });
  };

  return (
    <SafeAreaView style={authStyles.safeArea}>
      <KeyboardAvoidingView
        style={authStyles.safeArea}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={0}
      >
        <ScrollView
          contentContainerStyle={authStyles.scrollContent}
          bounces={false}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View style={authStyles.heroContainer}>
            <View style={authStyles.gradientOverlay} />

            <Animated.View
              style={[
                authStyles.circle,
                authStyles.circleTopLeft,
                { transform: [{ translateY: circle1Anim }] },
              ]}
            />
            <Animated.View
              style={[
                authStyles.circle,
                authStyles.circleTopRight,
                { transform: [{ translateY: circle2Anim }] },
              ]}
            />
            <Animated.View
              style={[
                authStyles.circle,
                authStyles.circleBottomLeft,
                { transform: [{ translateY: circle3Anim }] },
              ]}
            />
            <Animated.View
              style={[
                authStyles.circle,
                authStyles.circleBottomRight,
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
                style={authStyles.heroImage}
                resizeMode="contain"
              />
            </Animated.View>

            <Animated.View style={{ opacity: logoFadeAnim }}>
              <Text style={authStyles.tagline}>Shop smarter, live better</Text>
              <Text style={authStyles.title}>
                Let&apos;s get you signed up!
              </Text>
            </Animated.View>
          </View>

          <Animated.View
            style={[
              authStyles.card,
              {
                opacity: formFadeAnim,
                transform: [{ translateY: formSlideAnim }],
              },
            ]}
          >
            <Text style={authStyles.subHeading}>Create your account</Text>

            <View style={authStyles.row}>
              <View style={authStyles.halfInputWrapper}>
                <Text style={authStyles.label}>First name</Text>
                <View
                  style={[
                    authStyles.inputContainer,
                    errors.first_name && authStyles.inputError,
                  ]}
                >
                  <Ionicons
                    name="person-outline"
                    size={18}
                    color="#888"
                    style={authStyles.inputIcon}
                  />
                  <TextInput
                    placeholder="John"
                    placeholderTextColor="#999"
                    style={authStyles.input}
                    autoCapitalize="words"
                    value={formData.first_name}
                    onChangeText={(text) =>
                      handleFieldChange("first_name", text)
                    }
                  />
                </View>
                {errors.first_name && (
                  <Text style={authStyles.errorText}>{errors.first_name}</Text>
                )}
              </View>
              <View style={authStyles.halfInputWrapper}>
                <Text style={authStyles.label}>Last name</Text>
                <View
                  style={[
                    authStyles.inputContainer,
                    errors.last_name && authStyles.inputError,
                  ]}
                >
                  <Ionicons
                    name="person-outline"
                    size={18}
                    color="#888"
                    style={authStyles.inputIcon}
                  />
                  <TextInput
                    placeholder="Doe"
                    placeholderTextColor="#999"
                    style={authStyles.input}
                    autoCapitalize="words"
                    value={formData.last_name}
                    onChangeText={(text) =>
                      handleFieldChange("last_name", text)
                    }
                  />
                </View>
                {errors.last_name && (
                  <Text style={authStyles.errorText}>{errors.last_name}</Text>
                )}
              </View>
            </View>

            <View style={authStyles.inputWrapper}>
              <Text style={authStyles.label}>Email</Text>
              <View
                style={[
                  authStyles.inputContainer,
                  errors.email && authStyles.inputError,
                ]}
              >
                <Ionicons
                  name="mail-outline"
                  size={18}
                  color="#888"
                  style={authStyles.inputIcon}
                />
                <TextInput
                  placeholder="you@example.com"
                  placeholderTextColor="#999"
                  style={authStyles.input}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  value={formData.email}
                  onChangeText={(text) => handleFieldChange("email", text)}
                />
              </View>
              {errors.email && (
                <Text style={authStyles.errorText}>{errors.email}</Text>
              )}
            </View>

            <View style={authStyles.inputWrapper}>
              <Text style={authStyles.label}>
                Phone number <Text style={{ color: "#999" }}>(optional)</Text>
              </Text>
              <View
                style={[
                  authStyles.inputContainer,
                  errors.phone && authStyles.inputError,
                ]}
              >
                <Ionicons
                  name="call-outline"
                  size={18}
                  color="#888"
                  style={authStyles.inputIcon}
                />
                <TextInput
                  placeholder="0787735258"
                  placeholderTextColor="#999"
                  style={authStyles.input}
                  keyboardType="phone-pad"
                  maxLength={10}
                  value={formData.phone}
                  onChangeText={(text) => handleFieldChange("phone", text)}
                />
              </View>
              {errors.phone && (
                <Text style={authStyles.errorText}>{errors.phone}</Text>
              )}
            </View>

            <View style={authStyles.inputWrapper}>
              <Text style={authStyles.label}>Password</Text>
              <View
                style={[
                  authStyles.inputContainer,
                  errors.password && authStyles.inputError,
                ]}
              >
                <Ionicons
                  name="lock-closed-outline"
                  size={18}
                  color="#888"
                  style={authStyles.inputIcon}
                />
                <TextInput
                  placeholder="At least 8 characters"
                  placeholderTextColor="#999"
                  style={[authStyles.input, authStyles.passwordInput]}
                  secureTextEntry={!showPassword}
                  value={formData.password}
                  onChangeText={(text) => handleFieldChange("password", text)}
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  style={authStyles.eyeIcon}
                >
                  <Ionicons
                    name={showPassword ? "eye-outline" : "eye-off-outline"}
                    size={20}
                    color="#888"
                  />
                </TouchableOpacity>
              </View>
              {errors.password && (
                <Text style={authStyles.errorText}>{errors.password}</Text>
              )}
            </View>

            <TouchableOpacity
              style={[
                authStyles.primaryButton,
                isPending && authStyles.buttonDisabled,
              ]}
              onPress={handleSignUp}
              disabled={isPending}
            >
              {isPending ? (
                <ActivityIndicator color="#FFFFFF" />
              ) : (
                <Text style={authStyles.primaryButtonText}>Sign Up</Text>
              )}
            </TouchableOpacity>

            <View style={authStyles.separator}>
              <View style={authStyles.separatorLine} />
              <View style={authStyles.separatorLine} />
            </View>

            <TouchableOpacity
              onPress={() => router.push("/screens/(auth)/LoginScreen")}
            >
              <Text style={authStyles.footerText}>
                Already have an account?{" "}
                <Text style={authStyles.footerLink}>Sign In</Text>
              </Text>
            </TouchableOpacity>
          </Animated.View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;