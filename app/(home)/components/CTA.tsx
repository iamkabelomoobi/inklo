import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const CTA = ({ onPress }: { onPress?: () => void }) => (
  <ImageBackground
    source={require("../../../assets/images/home/home-cta-1.jpg")}
    style={styles.bg}
    imageStyle={styles.bgImage}
  >
    <View style={styles.ctaContainer}>
      <Text style={styles.ctaOnlineOnly}>ONLINE ONLY</Text>
      <Text style={styles.ctaTitle}>Exclusive{"\n"}Drops</Text>
      <View style={styles.ctaUnderline} />
      <Text style={styles.ctaSubtitle}>FOR-WOMEN</Text>
      <TouchableOpacity style={styles.ctaButton} onPress={onPress}>
        <Text style={styles.ctaButtonText}>SHOP NOW →</Text>
      </TouchableOpacity>
    </View>
  </ImageBackground>
);

const styles = StyleSheet.create({
  bg: {
    width: "100%",
    minHeight: 420,
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: 20,
    margin: 16,
    padding: 16,
  },
  bgImage: {
    resizeMode: "cover",
    borderRadius: 20,
  },
  ctaContainer: {
    alignItems: "flex-start",
    justifyContent: "center",
    marginHorizontal: 32,
    marginVertical: 24,
    padding: 0,
    backgroundColor: "rgba(255,255,255,0.0)",
  },
  ctaOnlineOnly: {
    color: "#1F2662A",
    fontSize: 14,
    letterSpacing: 1,
    fontWeight: "600",
    marginBottom: 4,
  },
  ctaTitle: {
    color: "#FFF",
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: 36,
    marginBottom: 4,
    textShadowColor: "rgba(0,0,0,0.18)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  ctaUnderline: {
    width: 40,
    height: 4,
    backgroundColor: "#1F2662A",
    marginVertical: 8,
    borderRadius: 2,
  },
  ctaSubtitle: {
    color: "#1F2662A",
    fontSize: 16,
    letterSpacing: 6,
    fontWeight: "700",
    marginBottom: 18,
  },
  ctaButton: {
    backgroundColor: "#FFF",
    borderRadius: 4,
    paddingVertical: 16,
    paddingHorizontal: 36,
    alignItems: "center",
    alignSelf: "flex-start",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  ctaButtonText: {
    color: "#100C08",
    fontWeight: "bold",
    fontSize: 18,
    letterSpacing: 1,
  },
});

export default CTA;
