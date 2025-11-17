import { Images } from "@/assets/images";
import { useRouter } from "expo-router";
import React from "react";
import OnboardingSlide from "./component/OnboardingSlide";

export default function OnboardingScreen1() {
  const router = useRouter();

  return (
    <OnboardingSlide
      title={"Explore\nTrendy Fashion"}
      description="Discover curated streetwear, fresh drops, and modern styles with Inklo."
      image={Images.onboarding.step1}
      activeIndex={0}
      total={3}
      onSkip={() => router.replace("/screens/(home)/HomeScreen")}
      onNext={() => router.push("/screens/(onboarding)/OnboardingScreen2")}
    />
  );
}
