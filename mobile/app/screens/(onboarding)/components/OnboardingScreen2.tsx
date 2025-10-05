import React from "react";
import OnboardingScreenBase from "./OnboardingScreenBase";
import { Images } from "@/assets/images";

interface OnboardingScreen2Props {
  onNext: () => void;
  paginationComponent: React.ReactNode;
}

const OnboardingScreen2: React.FC<OnboardingScreen2Props> = ({
  onNext,
  paginationComponent,
}) => {
  return (
    <OnboardingScreenBase
      image={Images.onboarding.step2}
      title="DISCOVER YOUR STYLE"
      subtitle="Find clothes that define your personality and make you feel confident"
      buttonText="Next"
      overlayColor="rgba(20, 20, 50, 0.5)"
      onPress={onNext}
    >
      {paginationComponent}
    </OnboardingScreenBase>
  );
};

export default OnboardingScreen2;
