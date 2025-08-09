import React from "react";
import OnboardingScreenBase from "./OnboardingScreenBase";

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
      image={require("../../../assets/images/onboarding/onboarding-2.jpg")}
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
