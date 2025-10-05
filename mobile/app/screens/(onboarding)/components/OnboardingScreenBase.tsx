import { BlurView } from "expo-blur";
import React from "react";
import {
    ImageBackground,
    ImageSourcePropType,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

interface OnboardingScreenBaseProps {
  image: ImageSourcePropType;
  title: string;
  subtitle: string;
  buttonText: string;
  overlayColor: string;
  onPress: () => void;
  children?: React.ReactNode;
}

const OnboardingScreenBase: React.FC<OnboardingScreenBaseProps> = ({
  image,
  title,
  subtitle,
  buttonText,
  overlayColor,
  onPress,
  children,
}) => {
  return (
    <ImageBackground source={image} style={styles.backgroundImage} resizeMode="cover">
      <View style={styles.leftBlurContainer}>
        <BlurView intensity={20} style={styles.blurView} tint="dark">
          <View style={styles.leftOverlay} />
        </BlurView>
      </View>

      <View style={styles.rightOverlayContainer}>
        <View style={[styles.rightOverlay, { backgroundColor: overlayColor }]} />
      </View>

      <View style={styles.divider} />

      <View style={styles.contentWrapper}>
        <View style={styles.header}>
          <Text style={styles.brandName}>inklo</Text>
        </View>

        <View style={styles.contentContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
          </View>

          <View style={styles.footer}>
            {children}
            <TouchableOpacity style={styles.shopButton} onPress={onPress}>
              <Text style={styles.shopButtonText}>{buttonText}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  leftBlurContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    width: "50%",
    overflow: "hidden",
  },
  blurView: {
    flex: 1,
  },
  leftOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  rightOverlayContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    width: "50%",
  },
  rightOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  divider: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: "50%",
    width: 1,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    zIndex: 10,
  },
  contentWrapper: {
    flex: 1,
    padding: 20,
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  brandName: {
    color: "#FFFFFF",
    fontSize: 34,
    fontFamily: "Gotham-Black",
    letterSpacing: 2,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 50,
  },
  textContainer: {
    marginBottom: 80,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 36,
    fontFamily: "Gotham-Black",
    lineHeight: 42,
    letterSpacing: 1,
    marginBottom: 10,
  },
  subtitle: {
    color: "#FFFFFF",
    fontSize: 16,
    opacity: 0.9,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  shopButton: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#FFFFFF",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
  },
  shopButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "500",
  },
});

export default OnboardingScreenBase;
