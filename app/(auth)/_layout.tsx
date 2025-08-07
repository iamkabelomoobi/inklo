import { Stack } from "expo-router";

const AuthLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignInScreen" />
      <Stack.Screen name="ForgotPasswordScreen" />
      {/* <Stack.Screen name="SignUpScreen" />
   
      <Stack.Screen name="VerifyOtpScreen" />
      <Stack.Screen name="ResetPasswordScreen" /> */}
    </Stack>
  );
};

export default AuthLayout;
