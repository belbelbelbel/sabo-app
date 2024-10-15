import Onboarding from "@/app/OnboardingScreen";
import SplashScreen from "@/components/SplashScreen";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#050D2A",
      }}
    >
      <StatusBar style="light" />
      <SplashScreen />
    </View>
  );
}
