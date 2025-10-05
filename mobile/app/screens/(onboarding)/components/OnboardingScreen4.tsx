import React from "react";
import OnboardingScreenBase from "./OnboardingScreenBase";
import { Images } from "@/assets/images";

interface OnboardingScreen4Props {
  onShopNow: () => void;
  paginationComponent: React.ReactNode;
}

const OnboardingScreen4: React.FC<OnboardingScreen4Props> = ({
  onShopNow,
  paginationComponent,
}) => {
  return (
    <OnboardingScreenBase
      image={Images.onboarding.step4}
      title="START YOUR JOURNEY"
      subtitle="Join thousands of fashion lovers and begin your style transformation"
      buttonText="Shop now"
      overlayColor="rgba(20, 50, 20, 0.5)"
      onPress={onShopNow}
    >
      {paginationComponent}
    </OnboardingScreenBase>
  );
};

export default OnboardingScreen4;
