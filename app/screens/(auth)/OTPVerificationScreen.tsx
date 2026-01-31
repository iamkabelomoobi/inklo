import useAuthAnimations from "@/app/hooks/useAuthAnimations";
import { createAuthStyles } from "@/app/theme/authStyles";
import { Images } from "@/assets/images";
import { useForgotPassword, useVerifyOTP } from "@/hooks/useAuth";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
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

const OTPVerificationScreen = () => {
  const params = useLocalSearchParams<{ email?: string }>();
  const emailParam = Array.isArray(params.email)
    ? params.email[0]
    : params.email;
  const email = emailParam ?? "";

  const [code, setCode] = useState<string[]>(["", "", "", "", "", ""]);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const [error, setError] = useState("");
  const [timer, setTimer] = useState(60);

  const { mutate: verifyOTP, isPending } = useVerifyOTP();
  const { mutate: resendCode, isPending: isResending } = useForgotPassword();

  const inputRefs = useRef<(TextInput | null)[]>([]);

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

  useEffect(() => {
    if (timer === 0) {
      return;
    }
    const interval = setInterval(
      () => setTimer((prev) => Math.max(prev - 1, 0)),
      1000
    );
    return () => clearInterval(interval);
  }, [timer]);

  const handleCodeChange = (value: string, index: number) => {
    const sanitized = value.replace(/[^0-9]/g, "");
    const updated = [...code];
    updated[index] = sanitized;
    setCode(updated);
    setError("");

    if (sanitized && index < code.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (
    { nativeEvent }: { nativeEvent: { key: string } },
    index: number
  ) => {
    if (nativeEvent.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    const joinedCode = code.join("");
    if (joinedCode.length !== code.length) {
      setError("Please enter the full 6-digit code.");
      return;
    }

    verifyOTP({
      email,
      otp: joinedCode,
    });
  };

  const handleResend = () => {
    if (timer > 0 || isResending) {
      return;
    }

    resendCode(
      { email },
      {
        onSuccess: () => {
          setCode(["", "", "", "", "", ""]);
          setTimer(60);
          inputRefs.current[0]?.focus();
        },
      }
    );
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
              <Text style={styles.tagline}>Verify it&apos;s really you</Text>
              <Text style={styles.title}>Enter the 6-digit code</Text>
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
              Enter the code we sent to {email}. It expires shortly, so
              don&apos;t wait too long.
            </Text>

            <View style={styles.otpContainer}>
              {code.map((value, index) => (
                <TextInput
                  key={index}
                  ref={(ref) => {
                    inputRefs.current[index] = ref;
                  }}
                  style={[
                    styles.otpInput,
                    focusedIndex === index && styles.otpInputFocused,
                  ]}
                  keyboardType="number-pad"
                  returnKeyType="done"
                  maxLength={1}
                  value={value}
                  onFocus={() => setFocusedIndex(index)}
                  onBlur={() => setFocusedIndex(null)}
                  onChangeText={(text) => handleCodeChange(text, index)}
                  onKeyPress={(event) => handleKeyPress(event, index)}
                />
              ))}
            </View>

            {error ? <Text style={styles.errorText}>{error}</Text> : null}

            <TouchableOpacity
              style={[styles.primaryButton, isPending && styles.buttonDisabled]}
              onPress={handleVerify}
              disabled={isPending}
            >
              {isPending ? (
                <ActivityIndicator color="#FFFFFF" />
              ) : (
                <Text style={styles.primaryButtonText}>
                  Verify &amp; continue
                </Text>
              )}
            </TouchableOpacity>

            <View style={styles.resendRow}>
              <Text style={styles.resendText}>Didn&apos;t receive it?</Text>
              <TouchableOpacity
                disabled={timer > 0 || isResending}
                onPress={handleResend}
              >
                <Text
                  style={[
                    styles.resendButton,
                    (timer > 0 || isResending) && styles.resendDisabled,
                  ]}
                >
                  {isResending
                    ? "Sending..."
                    : timer > 0
                    ? `Resend in ${timer}s`
                    : "Resend code"}
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.backLink}
              onPress={() =>
                router.push("/screens/(auth)/ForgotPasswordScreen")
              }
            >
              <Ionicons name="arrow-back" size={16} color="#111111" />
              <Text style={styles.backLinkText}>Use a different email</Text>
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
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
    marginBottom: 16,
  },
  otpInput: {
    width: 48,
    height: 56,
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: "#E5E5E5",
    backgroundColor: "#F7F7F9",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "700",
    color: "#111111",
  },
  otpInputFocused: {
    borderColor: "#111111",
    backgroundColor: "#FFFFFF",
  },
  resendRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    marginTop: 16,
  },
  resendText: {
    fontSize: 13,
    color: "#666666",
  },
  resendButton: {
    fontSize: 13,
    color: "#111111",
    fontWeight: "600",
  },
  resendDisabled: {
    color: "#A3A3A3",
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

export default OTPVerificationScreen;
