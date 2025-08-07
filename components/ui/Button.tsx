import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";

interface ButtonProps {
  onPress: () => void;
  title: string;
  styles: {
    button: StyleProp<ViewStyle>;
    text?: StyleProp<TextStyle>;
  };
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onPress,
  title,
  styles,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && { opacity: 0.5 }]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
