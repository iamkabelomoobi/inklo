import { router } from "expo-router";
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

const VerifyOtpForm = () => {
  const [otp, setOtp] = useState("");

  return (
    <View>
      <View style={styles.topSection}>
        <Text style={styles.title}>Enter OTP</Text>
        <Text style={styles.subtitle}>Check your email for the OTP code.</Text>
      </View>
      <View style={styles.formSection}>
        <Text style={styles.label}>OTP Code</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter OTP"
          placeholderTextColor="#fff9"
          keyboardType="numeric"
          value={otp}
          onChangeText={setOtp}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.replace("/(auth)/reset-password")}
        >
          <Text style={styles.buttonText}>Verify OTP</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomSection}>
        <TouchableOpacity>
          <Text style={styles.resend}>Resend OTP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VerifyOtpForm;

const styles = StyleSheet.create({
  topSection: {
    alignItems: "center",
    marginTop: 48,
  },
  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  subtitle: {
    color: "#fff",
    fontSize: 15,
    textAlign: "center",
    opacity: 0.9,
  },
  formSection: {
    backgroundColor: "rgba(0,0,0,0.18)",
    borderRadius: 24,
    padding: 24,
    marginHorizontal: 0,
  },
  label: { color: "#fff", marginTop: 12, marginBottom: 2 },
  input: {
    backgroundColor: "rgba(255,255,255,0.18)",
    borderRadius: 20,
    padding: 12,
    color: "#fff",
    marginTop: 4,
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 14,
    alignItems: "center",
    marginTop: 18,
    marginBottom: 4,
  },
  buttonText: { color: "#000", fontWeight: "bold", fontSize: 16 },
  bottomSection: {
    marginTop: 24,
    alignItems: "center",
  },
  resend: {
    color: "#fff",
    textAlign: "center",
    marginTop: 16,
    textDecorationLine: "underline",
    fontSize: 15,
  },
});