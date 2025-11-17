import Ionicons from "@expo/vector-icons/Ionicons";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  Image,
  StyleSheet as RNStyleSheet,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {
  title: string;
  description: string;
  image: any;
  activeIndex: number;
  total: number;
  onSkip?: () => void;
  onNext?: () => void;
};

const OnboardingSlide: React.FC<Props> = ({
  title,
  description,
  image,
  activeIndex,
  total,
  onSkip,
  onNext,
}) => {
  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <Image source={image} style={styles.image} resizeMode="cover" />

      <LinearGradient
        colors={["transparent", "rgba(255,255,255,0.7)", "rgba(255,255,255,1)"]}
        style={styles.gradient}
      >
        <BlurView intensity={70} tint="light" style={styles.blurCard}>
          <View style={styles.textBlock}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{description}</Text>
          </View>

          <View style={styles.footer}>
            <TouchableOpacity onPress={onSkip} activeOpacity={0.8}>
              <Text style={styles.skipText}>skip</Text>
            </TouchableOpacity>

            <View style={styles.dotsContainer}>
              {Array.from({ length: total }).map((_, i) => (
                <View
                  key={i}
                  style={[styles.dot, i === activeIndex && styles.dotActive]}
                />
              ))}
            </View>

            <TouchableOpacity
              onPress={onNext}
              style={styles.nextButton}
              activeOpacity={0.9}
            >
              <Ionicons name="arrow-forward" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </BlurView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default OnboardingSlide;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  image: {
    ...RNStyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "40%",
    justifyContent: "flex-end",
  },
  blurCard: {
    flex: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    overflow: "hidden",
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 16,
  },
  textBlock: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 12,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 13,
    lineHeight: 18,
    color: "#6b7280",
    textAlign: "center",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  skipText: {
    fontSize: 14,
    color: "#9ca3af",
    textTransform: "lowercase",
  },
  dotsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#e5e7eb",
  },
  dotActive: {
    width: 14,
    borderRadius: 7,
    backgroundColor: "#111827",
  },
  nextButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#111827",
    alignItems: "center",
    justifyContent: "center",
  },
});
