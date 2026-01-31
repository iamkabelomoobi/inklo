interface LoginResponse {
  access_token: string;
}

interface LoginRequest {
  email: string;
  password: string;
}

interface RegisterRequest {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

interface RegisterResponse {
  message: string;
}

interface ForgotPasswordRequest {
  email: string;
}

interface ForgotPasswordResponse {
  message: string;
}

interface ResetPasswordRequest {
  otp: string;
  new_password: string;
}

interface ResetPasswordResponse {
  message: string;
}

interface VerifyOTPRequest {
  email: string;
  otp: string;
}

interface VerifyOTPResponse {
  message: string;
  token?: string;
}

export {
    ForgotPasswordRequest,
    ForgotPasswordResponse,
    LoginRequest,
    LoginResponse,
    RegisterRequest,
    RegisterResponse,
    ResetPasswordRequest,
    ResetPasswordResponse,
    VerifyOTPRequest,
    VerifyOTPResponse
};

