import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import OnboardingScreen1 from "./components/OnboardingScreen1";
import OnboardingScreen2 from "./components/OnboardingScreen2";
import OnboardingScreen3 from "./components/OnboardingScreen3";
import OnboardingScreen4 from "./components/OnboardingScreen4";

SplashScreen.preventAutoHideAsync();

const { width: screenWidth } = Dimensions.get("window");

const OnboardingScreen = () => {
  //   const router = useRouter();
  const [appIsReady, setAppIsReady] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);

  const [fontsLoaded] = useFonts({
    "Gotham-Black": require("@/assets/fonts/Gotham-Black.otf"),
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

  const handleNext = () => {
    if (currentIndex < 3) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      scrollViewRef.current?.scrollTo({
        x: nextIndex * screenWidth,
        animated: true,
      });
    } else {
      //   router.replace("/(auth)/SignInScreen");
      console.log("End of onboarding");
    }
  };

  const handleShopNow = () => {
    // router.replace("/(auth)/SignInScreen");
    console.log("End of onboarding");
  };

  const handleScroll = (event: any) => {
    const contentOffset = event.nativeEvent.contentOffset;
    const currentIdx = Math.round(contentOffset.x / screenWidth);
    setCurrentIndex(currentIdx);
  };

  const handlePaginationPress = (index: number) => {
    setCurrentIndex(index);
    scrollViewRef.current?.scrollTo({
      x: index * screenWidth,
      animated: true,
    });
  };

  if (!appIsReady || !fontsLoaded) {
    return null;
  }

  const renderPagination = () => (
    <View style={styles.paginationContainer}>
      {[0, 1, 2, 3].map((dotIndex) => (
        <TouchableOpacity
          key={dotIndex}
          onPress={() => handlePaginationPress(dotIndex)}
        >
          <View
            style={[
              styles.paginationDot,
              currentIndex === dotIndex && styles.activeDot,
            ]}
          />
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}
        scrollEventThrottle={16}
      >
        <View style={styles.screenContainer}>
          <OnboardingScreen1
            onNext={handleNext}
            paginationComponent={renderPagination()}
          />
        </View>
        <View style={styles.screenContainer}>
          <OnboardingScreen2
            onNext={handleNext}
            paginationComponent={renderPagination()}
          />
        </View>
        <View style={styles.screenContainer}>
          <OnboardingScreen3
            onNext={handleNext}
            paginationComponent={renderPagination()}
          />
        </View>
        <View style={styles.screenContainer}>
          <OnboardingScreen4
            onShopNow={handleShopNow}
            paginationComponent={renderPagination()}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  screenContainer: {
    width: screenWidth,
    flex: 1,
  },
  paginationContainer: {
    flexDirection: "row",
    gap: 5,
  },
  paginationDot: {
    width: 20,
    height: 3,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 1,
  },
  activeDot: {
    backgroundColor: "#FFFFFF",
    width: 30,
  },
});

export default OnboardingScreen;
