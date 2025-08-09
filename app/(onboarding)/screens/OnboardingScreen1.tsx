import React from "react";
import OnboardingScreenBase from "./OnboardingScreenBase";

interface OnboardingScreen1Props {
  onNext: () => void;
  paginationComponent: React.ReactNode;
}

const OnboardingScreen1: React.FC<OnboardingScreen1Props> = ({
  onNext,
  paginationComponent,
}) => {
  return (
    <OnboardingScreenBase
      image={require("../../../assets/images/onboarding/onboarding-1.jpg")}
      title="WEAR IT FASHIONABLE"
      subtitle="Express your unique style with our curated collection of premium fashion pieces"
      buttonText="Next"
      overlayColor="rgba(0, 0, 0, 0.4)"
      onPress={onNext}
    >
      {paginationComponent}
    </OnboardingScreenBase>
  );
};

export default OnboardingScreen1;
