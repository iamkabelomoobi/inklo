import React from "react";
import { TextInput, StyleProp, TextInputProps, TextStyle } from "react-native";

interface InputProps extends TextInputProps {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  keyboardType?: TextInputProps["keyboardType"];
  autoCapitalize?: TextInputProps["autoCapitalize"];
  placeholderTextColor?: string;
  styles?: StyleProp<TextStyle>;
  type?: "password" | "text" | "email" | "number";
}

const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  onChangeText,
  keyboardType = "default",
  autoCapitalize = "sentences",
  placeholderTextColor = "#999",
  styles,
  type = "text",
  ...props
}) => {
  const isPassword = type === "password";

  const effectiveKeyboardType =
    type === "email"
      ? "email-address"
      : type === "number"
      ? "numeric"
      : keyboardType;
  const effectiveAutoCapitalize =
    type === "email" || type === "password" ? "none" : autoCapitalize;

  const effectivePlaceholder =
    placeholder ||
    (type === "password"
      ? "••••••••"
      : type === "email"
      ? "example@domain.com"
      : type === "number"
      ? "123"
      : "Enter text");

  return (
    <TextInput
      style={styles}
      placeholder={effectivePlaceholder}
      placeholderTextColor={placeholderTextColor}
      value={value}
      onChangeText={onChangeText}
      keyboardType={effectiveKeyboardType}
      autoCapitalize={effectiveAutoCapitalize}
      secureTextEntry={isPassword}
      {...props}
    />
  );
};

export default Input;
