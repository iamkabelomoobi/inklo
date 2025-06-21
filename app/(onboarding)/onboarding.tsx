import { BlurView } from "expo-blur";
import { useFonts } from "expo-font";
import { useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback, useEffect, useState } from "react";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

SplashScreen.preventAutoHideAsync();

const OnboardingScreen = () => {
  const router = useRouter();
  const [appIsReady, setAppIsReady] = useState(false);

  const [fontsLoaded] = useFonts({
    "Gotham-Black": require("../../assets/fonts/Gotham-Black.otf"),
  });

  useEffect(() => {
    const prepare = async () => {
      try {
        await Promise.all([
          new Promise((resolve) => setTimeout(resolve, 1000)),
        ]);
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    };

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady && fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady, fontsLoaded]);

  const handleShopNowPress = () => {
    router.replace("/(auth)/signin");
  };


  if (!appIsReady || !fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
      <ImageBackground
        source={require("../../assets/images/onboarding/onboarding.jpg")}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        {/* Blur left half */}
        <View style={styles.leftBlurContainer}>
          <BlurView intensity={20} style={styles.blurView} tint="dark">
            <View style={styles.leftOverlay} />
          </BlurView>
        </View>

        {/* Right overlay */}
        <View style={styles.rightOverlayContainer}>
          <View style={styles.rightOverlay} />
        </View>

        {/* Center divider */}
        <View style={styles.divider} />

        {/* Content overlay */}
        <View style={styles.contentWrapper}>
          <View style={styles.header}>
            <Text style={styles.brandName}>Inklo</Text>
            {/* <TouchableOpacity onPress={handleSkipPress}>
              <Text style={styles.skipText}>Skip</Text>
            </TouchableOpacity> */}
          </View>

          <View style={styles.contentContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.title}>WEAR IT{"\n"}FASHIONABLE</Text>
              <Text style={styles.subtitle}>its more than just clothes</Text>
            </View>

            <View style={styles.footer}>
              <View style={styles.paginationContainer}>
                <View style={[styles.paginationDot, styles.activeDot]} />
                <View style={styles.paginationDot} />
                <View style={styles.paginationDot} />
                <View style={styles.paginationDot} />
              </View>

              <TouchableOpacity
                style={styles.shopButton}
                onPress={handleShopNowPress}
              >
                <Text style={styles.shopButtonText}>Shop now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
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
  // skipText: {
  //   color: "#FFFFFF",
  //   fontSize: 16,
  //   fontWeight: "500",
  // },
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
  paginationContainer: {
    flexDirection: "row",
  },
  paginationDot: {
    width: 20,
    height: 3,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    marginRight: 5,
    borderRadius: 1,
  },
  activeDot: {
    backgroundColor: "#FFFFFF",
    width: 30,
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

export default OnboardingScreen;
