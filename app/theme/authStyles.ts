import { StyleSheet } from "react-native";

const CARD_RADIUS = 32;

const baseAuthStyles = {
  safeArea: {
    flex: 1,
    backgroundColor: "#000000",
  },
  scrollContent: {
    flexGrow: 1,
  },
  heroContainer: {
    flex: 1,
    minHeight: 280,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
    paddingBottom: 24,
    position: "relative" as const,
  },
  gradientOverlay: {
    position: "absolute" as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "transparent",
    opacity: 0.1,
  },
  heroImage: {
    width: 280,
    height: 180,
    marginBottom: 16,
  },
  tagline: {
    fontSize: 14,
    fontWeight: "500" as const,
    color: "#999999",
    textAlign: "center" as const,
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  title: {
    fontSize: 28,
    fontWeight: "800" as const,
    color: "#FFFFFF",
    textAlign: "center" as const,
  },
  circle: {
    position: "absolute" as const,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#fff",
    opacity: 0.15,
  },
  circleTopLeft: {
    top: 30,
    left: 24,
  },
  circleTopRight: {
    top: 70,
    right: 32,
  },
  circleBottomLeft: {
    bottom: 60,
    left: 60,
  },
  circleBottomRight: {
    bottom: 30,
    right: 20,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: CARD_RADIUS,
    borderTopRightRadius: CARD_RADIUS,
    paddingHorizontal: 24,
    paddingTop: 28,
    paddingBottom: 32,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
  },
  subHeading: {
    fontSize: 18,
    fontWeight: "700" as const,
    color: "#222222",
    marginBottom: 16,
    textAlign: "center" as const,
  },
  row: {
    flexDirection: "row" as const,
    gap: 12,
  },
  halfInputWrapper: {
    flex: 1,
    marginBottom: 20,
  },
  inputWrapper: {
    marginBottom: 20,
  },
  label: {
    fontSize: 13,
    fontWeight: "600" as const,
    color: "#333333",
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: "row" as const,
    alignItems: "center",
    height: 52,
    borderRadius: 16,
    backgroundColor: "#F7F7F9",
    borderWidth: 1.5,
    borderColor: "transparent",
    paddingHorizontal: 14,
  },
  inputError: {
    borderColor: "#EF4444",
    backgroundColor: "#FEF2F2",
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: "#111111",
    paddingVertical: 0,
  },
  passwordInput: {
    paddingRight: 10,
  },
  eyeIcon: {
    padding: 4,
  },
  errorText: {
    fontSize: 12,
    color: "#EF4444",
    marginTop: 6,
    marginLeft: 4,
  },
  primaryButton: {
    marginTop: 8,
    height: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#111111",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "700" as const,
  },
  separator: {
    flexDirection: "row" as const,
    alignItems: "center",
    marginVertical: 24,
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#E5E5E5",
  },
  separatorText: {
    marginHorizontal: 16,
    fontSize: 13,
    color: "#999999",
    fontWeight: "500" as const,
  },
  socialButtons: {
    flexDirection: "row" as const,
    gap: 12,
    marginBottom: 20,
  },
  socialButton: {
    flex: 1,
    flexDirection: "row" as const,
    alignItems: "center",
    justifyContent: "center",
    height: 52,
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    borderWidth: 1.5,
    borderColor: "#E5E5E5",
    gap: 8,
  },
  socialButtonText: {
    fontSize: 15,
    fontWeight: "600" as const,
    color: "#333333",
  },
  footerText: {
    textAlign: "center" as const,
    fontSize: 14,
    color: "#666666",
    fontWeight: "500" as const,
  },
  footerLink: {
    color: "#111111",
    fontWeight: "700" as const,
  },
};

type ExtraStyles = Record<string, any>;

export const createAuthStyles = <T extends ExtraStyles>(extra?: T) =>
  StyleSheet.create({
    ...(baseAuthStyles as Record<string, any>),
    ...(extra ?? {}),
  });

const authStyles = createAuthStyles();

export default authStyles;
