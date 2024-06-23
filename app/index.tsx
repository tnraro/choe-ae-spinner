import { Spinner } from "@/components/spinner";
import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";

const PlaceholderImage = require("../assets/images/react-logo.png");

export default function Index() {
  return (
    <View style={styles.container}>
      <Spinner image={PlaceholderImage} />
      <Link href="/gallery">Gallery</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});