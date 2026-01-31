import {
  ForgotPasswordRequest,
  LoginRequest,
  RegisterRequest,
  ResetPasswordRequest,
  VerifyOTPRequest,
} from "@/interfaces/auth";
import { router } from "expo-router";
import { useCallback, useState } from "react";
import Toast from "react-native-toast-message";

type MutationOptions<Response, Variables> = {
  onSuccess?: (response: Response, variables: Variables) => void;
};

const delay = (ms = 650) => new Promise((resolve) => setTimeout(resolve, ms));

const useDemoMutation = <Variables, Response = void>(
  action: (variables: Variables) => Promise<Response> | Response,
) => {
  const [isPending, setIsPending] = useState(false);

  const mutate = useCallback(
    async (
      variables?: Variables,
      options?: MutationOptions<Response, Variables>,
    ) => {
      setIsPending(true);
      try {
        const resolvedVariables = variables as Variables;
        const response = await action(resolvedVariables);
        options?.onSuccess?.(response, resolvedVariables);
        return response;
      } finally {
        setIsPending(false);
      }
    },
    [action],
  );

  return { mutate, isPending };
};

export const useRegister = () =>
  useDemoMutation<RegisterRequest, void>(async (data) => {
    await delay();

    Toast.show({
      type: "success",
      text1: "Account created",
      text2: `Welcome ${data.first_name || "there"}!`,
    });

    setTimeout(() => {
      router.replace("/screens/(home)/HomeScreen");
    }, 500);
  });

export const useLogin = () =>
  useDemoMutation<LoginRequest, void>(async (data) => {
    await delay();

    const friendlyName =
      data.email.trim().split("@")[0]?.replace(/[._-]/g, " ") || "there";

    Toast.show({
      type: "success",
      text1: "Welcome back!",
      text2: `Good to see you, ${friendlyName}`,
    });

    setTimeout(() => {
      router.replace("/screens/(home)/HomeScreen");
    }, 500);
  });

export const useForgotPassword = () =>
  useDemoMutation<ForgotPasswordRequest, { message: string }>(
    async (variables) => {
      await delay();

      const message = `We sent a 6-digit code to ${variables.email}.`;

      Toast.show({
        type: "success",
        text1: "Check your email",
        text2: message,
      });

      router.push({
        pathname: "/screens/(auth)/OTPVerificationScreen",
        params: { email: variables.email },
      });

      return { message };
    },
  );

export const useVerifyOTP = () =>
  useDemoMutation<VerifyOTPRequest, void>(async (variables) => {
    await delay();

    Toast.show({
      type: "success",
      text1: "Code verified",
      text2: "Let’s set a new password.",
    });

    router.push({
      pathname: "/screens/(auth)/ResetPasswordScreen",
      params: { email: variables.email, otp: variables.otp },
    });
  });

export const useResetPassword = () =>
  useDemoMutation<ResetPasswordRequest, void>(async () => {
    await delay();

    Toast.show({
      type: "success",
      text1: "Password updated!",
      text2: "You can now sign in with your new password",
    });

    setTimeout(() => {
      router.replace("/screens/(auth)/LoginScreen");
    }, 800);
  });

export const useLogout = () =>
  useDemoMutation<void, void>(async () => {
    await delay(400);

    Toast.show({
      type: "success",
      text1: "Logged out",
      text2: "See you next time!",
    });

    router.replace("/screens/(auth)/LoginScreen");
  });
