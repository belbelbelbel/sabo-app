import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{
        headerShown:false
      }}/>
        <Stack.Screen name="OnboardingScreen" options={{
          headerShown:false
        }}/>
        <Stack.Screen name="SignUp" options={{
          headerShown:false
        }}></Stack.Screen>
        <Stack.Screen name="OtpPage" options={{
          headerShown:false
        }}/>
    </Stack>
  
  );
}
