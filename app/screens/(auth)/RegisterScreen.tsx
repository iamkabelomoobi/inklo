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
import authStyles from "@/app/theme/authStyles";

const RegisterScreen = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
  }>({});
  const [showPassword, setShowPassword] = useState(false);
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

  const validateEmail = (emailToValidate: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailToValidate);
  };

  const validateForm = () => {
    const newErrors: typeof errors = {};

    if (!firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
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

  const handleSignUp = () => {
    if (validateForm()) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  };

  const handleFieldChange = (field: string, value: string) => {
    if (errors[field as keyof typeof errors]) {
      setErrors({ ...errors, [field]: undefined });
    }

    switch (field) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
    }
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
                    errors.firstName && authStyles.inputError,
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
                    value={firstName}
                    onChangeText={(text) =>
                      handleFieldChange("firstName", text)
                    }
                  />
                </View>
                {errors.firstName && (
                  <Text style={authStyles.errorText}>{errors.firstName}</Text>
                )}
              </View>
              <View style={authStyles.halfInputWrapper}>
                <Text style={authStyles.label}>Last name</Text>
                <View
                  style={[
                    authStyles.inputContainer,
                    errors.lastName && authStyles.inputError,
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
                    value={lastName}
                    onChangeText={(text) => handleFieldChange("lastName", text)}
                  />
                </View>
                {errors.lastName && (
                  <Text style={authStyles.errorText}>{errors.lastName}</Text>
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
                  value={email}
                  onChangeText={(text) => handleFieldChange("email", text)}
                />
              </View>
              {errors.email && (
                <Text style={authStyles.errorText}>{errors.email}</Text>
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
                  value={password}
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
                isLoading && authStyles.buttonDisabled,
              ]}
              onPress={handleSignUp}
              disabled={isLoading}
            >
              {isLoading ? (
                <ActivityIndicator color="#FFFFFF" />
              ) : (
                <Text style={authStyles.primaryButtonText}>Sign Up</Text>
              )}
            </TouchableOpacity>

            <View style={authStyles.separator}>
              <View style={authStyles.separatorLine} />
              <View style={authStyles.separatorLine} />
            </View>
            {/* <View style={authStyles.separator}>
              <View style={authStyles.separatorLine} />
              <Text style={authStyles.separatorText}>or continue with</Text>
              <View style={authStyles.separatorLine} />
            </View>

            <View style={authStyles.socialButtons}>
              <TouchableOpacity style={authStyles.socialButton}>
                <Ionicons name="logo-google" size={20} color="#DB4437" />
                <Text style={authStyles.socialButtonText}>Google</Text>
              </TouchableOpacity>
              <TouchableOpacity style={authStyles.socialButton}>
                <Ionicons name="logo-apple" size={20} color="#000000" />
                <Text style={authStyles.socialButtonText}>Apple</Text>
              </TouchableOpacity>
            </View> */}

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
