import React from "react";
import OnboardingScreenBase from "./OnboardingScreenBase";

interface OnboardingScreen3Props {
  onNext: () => void;
  paginationComponent: React.ReactNode;
}

const OnboardingScreen3: React.FC<OnboardingScreen3Props> = ({
  onNext,
  paginationComponent,
}) => {
  return (
    <OnboardingScreenBase
      image={require("../../../assets/images/onboarding/onboarding-3.jpg")}
      title="PREMIUM\nQUALITY"
      subtitle="Every piece is crafted with attention to detail and finest materials"
      buttonText="Next"
      overlayColor="rgba(50, 20, 20, 0.5)"
      onPress={onNext}
    >
      {paginationComponent}
    </OnboardingScreenBase>
  );
};

export default OnboardingScreen3;
