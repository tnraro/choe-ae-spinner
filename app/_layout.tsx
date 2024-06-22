import { Stack } from "expo-router";
import { StrictMode } from "react";

export default function RootLayout() {
  return (
    <StrictMode>
      <Stack>
        <Stack.Screen name="index" />
      </Stack>
    </StrictMode>
  );
}
