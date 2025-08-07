import React, { useRef, useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

type OtpInputProps = {
  length?: number;
  onOtpFilled?: (otp: string) => void;
  inputStyles?: object;
};

const OtpInput = ({ length = 5, onOtpFilled, inputStyles }: OtpInputProps) => {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(""));
  const inputs = useRef<TextInput[]>(Array(length).fill(null));

  const focusNext = (index: number, value: string) => {
    if (value && index < length - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  const focusPrevious = (index: number, key: string) => {
    if (key === "Backspace" && index > 0 && !otp[index]) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handleChange = (index: number, value: string) => {
    if (/^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      focusNext(index, value);

      if (newOtp.every((digit) => digit)) {
        onOtpFilled?.(newOtp.join(""));
      }
    }
  };

  const handleKeyPress = (index: number, key: string) => {
    focusPrevious(index, key);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(el) => {
              inputs.current[index] = el as TextInput;
            }}
            style={[styles.input, inputStyles]}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={(value) => handleChange(index, value)}
            onKeyPress={({ nativeEvent: { key } }) =>
              handleKeyPress(index, key)
            }
            selectTextOnFocus
            textContentType="oneTimeCode"
            autoComplete="sms-otp"
            {...(index === 0 ? { autoFocus: true } : {})}
          />
        ))}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  input: {
    width: 48,
    height: 48,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "#F9F9F9",
  },
});

export default OtpInput;
