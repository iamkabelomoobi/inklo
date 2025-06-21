import { router } from "expo-router";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const ResetPasswordForm = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <View>
      {/* Top Section */}
      <View style={styles.topSection}>
        <Text style={styles.title}>Reset Password</Text>
        <Text style={styles.subtitle}>Enter your new password below.</Text>
      </View>

      <View style={styles.formSection}>
        <Text style={styles.label}>New Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter new password"
          placeholderTextColor="#fff9"
          secureTextEntry
          value={newPassword}
          onChangeText={setNewPassword}
        />
        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirm new password"
          placeholderTextColor="#fff9"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.replace("/(auth)/signin")}
        >
          <Text style={styles.buttonText}>Reset Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ResetPasswordForm;

const styles = StyleSheet.create({
  topSection: {
    alignItems: "center",
    marginTop: 35,
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
    marginBottom: 24,
  },
  formSection: {
    backgroundColor: "rgba(0,0,0,0.18)",
    borderRadius: 24,
    padding: 24,
    marginHorizontal: 0,
    width: "100%",
    maxWidth: 400,
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
});
