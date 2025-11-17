import { Stack } from "expo-router";

const OnboardingLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="OnboardingScreen1" />
      <Stack.Screen name="OnboardingScreen2" />
    </Stack>
  );
};

export default OnboardingLayout;
