import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

const SignUPForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [policyAgreed, setPolicyAgreed] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const handleSignUp = () => {
    if (!policyAgreed) {
      // Show some error message or alert that policy agreement is required
      console.log("Please agree to the terms and conditions");
      return;
    }
    console.log("Signing up with:", name, email, password);
    router.replace("/(home)/home");
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleTermsPress = () => {
    setShowTerms(true);
  };

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>Sign Up</Text>
        <Text style={styles.cardSubtitle}>Sign Up To Your Account</Text>
      </View>

      {/* Form Fields */}
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <Ionicons
            name="person-outline"
            size={20}
            color="#888"
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            placeholder="James Leo"
            placeholderTextColor="#999"          value={name}
          onChangeText={setName}
        />
      </View>

      <View style={styles.inputWrapper}>
        <Ionicons
          name="mail-outline"
          size={20}
          color="#888"
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.input}
          placeholder="leo@gmail.com"
          placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputWrapper}>
          <Ionicons
            name="lock-closed-outline"
            size={20}
            color="#888"
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            placeholder="••••••••"
            placeholderTextColor="#999"
            secureTextEntry={!passwordVisible}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            style={styles.eyeIcon}
          >
            <Ionicons
              name={passwordVisible ? "eye-off-outline" : "eye-outline"}
              size={20}
              color="#888"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.policyContainer}>
          <TouchableOpacity 
            style={styles.checkbox} 
            onPress={() => setPolicyAgreed(!policyAgreed)}
          >
            {policyAgreed ? (
              <Ionicons name="checkmark" size={16} color="#100C08" />
            ) : null}
          </TouchableOpacity>
          <Text style={styles.policyText}>
            I agree to the{" "}
            <Text style={styles.policyLink} onPress={handleTermsPress}>
              Terms and Conditions
            </Text>
          </Text>
        </View>

        <TouchableOpacity style={styles.signInButton} onPress={handleSignUp}>
          <Text style={styles.signInButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      {/* Social sIGN uP Section */}
      <View style={styles.socialContainer}>
        <View style={styles.socialRow}>
          <TouchableOpacity style={styles.socialIcon}>
            <Ionicons name="logo-facebook" size={24} color="#3b5998" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialIcon}>
            <Ionicons name="logo-google" size={24} color="#db4437" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialIcon}>
            <Ionicons name="logo-apple" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Sign iN Link */}
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Have an account? </Text>
        <TouchableOpacity onPress={() => router.push("/(auth)/signin")}>
          <Text style={styles.signupLink}>Sign In</Text>
        </TouchableOpacity>
      </View>

      {/* Terms and Conditions Modal */}
      <Modal visible={showTerms} animationType="slide" transparent>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Terms & Conditions</Text>
              <TouchableOpacity 
                style={styles.closeIcon} 
                onPress={() => setShowTerms(false)}
              >
                <Ionicons name="close" size={24} color="#100C08" />
              </TouchableOpacity>
            </View>
            <ScrollView 
              style={styles.modalScrollView}
              showsVerticalScrollIndicator={true}
            >
              <Text style={styles.modalText}>
                <Text style={styles.boldText}>Introduction:{"\n"}</Text>
                Welcome to our app! By creating an account, you agree to
                abide by our rules and policies. Your data will be handled
                securely and not shared with third parties without your
                consent.{"\n\n"}
                
                <Text style={styles.boldText}>Important Notice:{"\n"}</Text>
                Please ensure that all information provided is accurate and
                up to date. Misuse of the platform or violation of our terms
                may result in suspension or termination of your account.
                {"\n\n"}
                
                <Text style={styles.boldText}>Returns:{"\n"}</Text>
                If you are not satisfied with your purchase, you may return
                eligible items within 14 days of receipt for a refund or
                exchange, subject to our returns policy. Please read our
                full terms for more information.{"\n\n"}
                
                <Text style={styles.boldText}>Privacy Policy:{"\n"}</Text>
                We collect personal information to provide our services. This includes
                your name, email address, and payment details. We implement security
                measures to protect your data but cannot guarantee absolute security.
                {"\n\n"}
                
                <Text style={styles.boldText}>Payment Terms:{"\n"}</Text>
                All payments are processed securely. We accept major credit cards and
                digital payment methods. Prices are displayed in your local currency and
                include applicable taxes. Subscription services will automatically renew
                unless cancelled before the renewal date.
                {"\n\n"}
                
                <Text style={styles.boldText}>User Responsibilities:{"\n"}</Text>
                Users are responsible for maintaining the confidentiality of their account
                information. Any activities occurring under your account are your responsibility.
                Do not share your login credentials with third parties.
                {"\n\n"}
                
                <Text style={styles.boldText}>Content Guidelines:{"\n"}</Text>
                Users must not upload, share, or create content that is illegal, harmful,
                threatening, abusive, defamatory, or otherwise objectionable. We reserve
                the right to remove content that violates these guidelines and to suspend
                or terminate accounts.
              </Text>
            </ScrollView>
            <TouchableOpacity
              style={styles.closeBtn}
              onPress={() => setShowTerms(false)}
            >
              <Text style={styles.closeBtnText}>I Understand</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
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
  forgotPasswordContainer: {
    alignSelf: "flex-end",
    marginBottom: 16,
  },
  forgotPasswordText: {
    color: "#100C08",
    fontSize: 14,
    fontWeight: "500",
  },
  signInButton: {
    backgroundColor: "#100C08",
    borderRadius: 12,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 4,
  },
  signInButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  socialContainer: {
    marginTop: 4,
    alignItems: "center",
  },
  socialRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 6,
  },
  socialIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 24,
  },
  signupText: {
    color: "#777",
    fontSize: 14,
  },
  signupLink: {
    color: "#100C08",
    fontWeight: "bold",
    fontSize: 14,
  },
  policyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#100C08',
    borderRadius: 4,
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  policyText: {
    fontSize: 14,
    color: '#555',
    flex: 1,
  },
  policyLink: {
    color: '#100C08',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    maxHeight: '80%',
    minHeight: '50%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginBottom: 15,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#100C08',
  },
  closeIcon: {
    padding: 5,
  },
  modalScrollView: {
    maxHeight: '70%',
  },
  modalText: {
    fontSize: 15,
    lineHeight: 22,
    color: '#333',
    marginBottom: 20,
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#100C08',
  },
  closeBtn: {
    backgroundColor: '#100C08',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 15,
  },
  closeBtnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SignUPForm;
