import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { usePathname, useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type ShopRoutes =
  | "/(home)"
  | "/(shop)"
  | "/(shop)/categories"
  | "/(shop)/cart"
  | "/(shop)/wishlist"
  | "/(dashboard)/profile";

const navItems: {
  key: string;
  icon: React.ReactNode;
  label: string;
  route: ShopRoutes | "/(shop)";
  cart?: boolean;
}[] = [
  {
    key: "home",
    icon: <Ionicons name="home-outline" size={26} color="#2A2A2A" />,
    label: "Home",
    route: "/(home)",
  },
  {
    key: "shop",
    icon: <Ionicons name="pricetags-outline" size={26} color="#2A2A2A" />,
    label: "Shop",
    route: "/(shop)",
  },
  {
    key: "categories",
    icon: <Ionicons name="grid-outline" size={26} color="#2A2A2A" />,
    label: "Categories",
    route: "/(shop)/categories",
  },
  {
    key: "cart",
    icon: <Ionicons name="cart-outline" size={26} color="#2A2A2A" />,
    label: "Cart",
    route: "/(shop)/cart",
  },
  {
    key: "wishlist",
    icon: <Ionicons name="heart-outline" size={26} color="#2A2A2A" />,
    label: "Wishlist",
    route: "/(shop)/wishlist",
  },
  {
    key: "profile",
    icon: <Ionicons name="person-outline" size={26} color="#2A2A2A" />,
    label: "Profile",
    route: "/(dashboard)/profile",
  },
];

const BottomNav = () => {
  const router = useRouter();

  const safeNavigate = (route: ShopRoutes) => {
    router.push(route as any);
  };

  return (
    <BlurView intensity={40} tint="light" style={styles.container}>
      {navItems.map((item) => (
        <TouchableOpacity
          key={item.key}
          style={item.cart ? styles.cartButton : styles.navButton}
          onPress={() => safeNavigate(item.route)}
        >
          {item.icon}
          <Text style={[styles.label, item.cart && { color: "#fff" }]}>
            {item.label}
          </Text>
        </TouchableOpacity>
      ))}
    </BlurView>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 20,
    right: 20,
    bottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.85)",
    borderRadius: 32,
    paddingHorizontal: 10,
    paddingVertical: 5,
    elevation: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    overflow: "hidden",
  },
  navButton: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    paddingVertical: 8,
  },
  cartButton: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    paddingVertical: 8,
  },
  label: {
    fontSize: 11,
    color: "#2A2A2A",
    marginTop: 2,
    fontWeight: "500",
  },
});
