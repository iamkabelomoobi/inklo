import { Stack } from "expo-router";
import { StatusBar, StyleSheet, View } from "react-native";

const RootLayout = () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} translucent={false} />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(auth)" />
      </Stack>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});

export default RootLayout;
