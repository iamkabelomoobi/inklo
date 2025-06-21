import { Stack } from "expo-router";

const AuthLayout = () => (
  <Stack screenOptions={{ headerShown: false }}>
    <Stack.Screen name="signin" />
    <Stack.Screen name="signup" />
    <Stack.Screen name="forgot-password" />
    <Stack.Screen name="reset-password" />
    <Stack.Screen name="verify-otp" />
  </Stack>
);

export default AuthLayout;
