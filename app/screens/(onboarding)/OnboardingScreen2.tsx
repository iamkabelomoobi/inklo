import { Images } from "@/assets/images";
import { useRouter } from "expo-router";
import React from "react";
import OnboardingSlide from "./component/OnboardingSlide";

export default function OnboardingScreen2() {
  const router = useRouter();

  return (
    <OnboardingSlide
      title={"Stay Ahead\nOf The Drop"}
      description="Get notified about limited releases and exclusive collabs before they're gone."
      image={Images.onboarding.step2}
      activeIndex={1}
      total={3}
      onSkip={() => router.replace("/screens/(home)/HomeScreen")}
      onNext={() => router.push("/screens/(onboarding)/OnboardingScreen3")}
    />
  );
}
