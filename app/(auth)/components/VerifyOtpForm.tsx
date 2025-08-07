import Button from "@/components/ui/Button";
import OtpInput from "@/components/ui/OtpInput";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const VerifyOtpForm = () => {
  const [otp, setOtp] = useState("");

  const handleOtpComplete = (enteredOtp: string) => {
    setOtp(enteredOtp);
  };

  const handleVerifyOtp = () => {
    console.log("Verifying OTP:", otp);
    router.push("/(auth)/ResetPasswordScreen");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>Verify OTP</Text>
          <Text style={styles.cardSubtitle}>
            Enter the 6-digit code sent to your email
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <OtpInput
            length={6}
            onOtpFilled={handleOtpComplete}
            inputStyles={styles.otpInput}
          />

          <Button
            styles={{
              button: styles.verifyButton,
              text: styles.verifyButtonText,
            }}
            title="Verify OTP"
            onPress={handleVerifyOtp}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  card: {
    backgroundColor: "rgba(255,255,255,0.65)",
    borderRadius: 24,
    paddingVertical: 32,
    paddingHorizontal: 24,
    width: "100%",
    maxWidth: 400,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  cardHeader: {
    alignItems: "center",
    marginBottom: 24,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 14,
    color: "#777",
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
    height: 50,
    backgroundColor: "#F9F9F9",
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  eyeIcon: {
    padding: 4,
  },
  forgotPasswordButton: {
    backgroundColor: "#000000",
    borderRadius: 12,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 4,
  },
  forgotPasswordButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  forgotPasswordContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 5,
  },
  forgotPasswordText: {
    color: "#777",
    fontSize: 14,
  },
  otpInput: {
    borderColor: "#000",
  },
  otpText: {
    color: "#333",
  },
  verifyButton: {
    backgroundColor: "#000000",
    borderRadius: 12,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 20,
  },
  verifyButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default VerifyOtpForm;
