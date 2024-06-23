import { Spinner } from "@/components/spinner";
import { StyleSheet, View } from "react-native";

const PlaceholderImage = require("../assets/images/react-logo.png");

export default function Index() {
  return (
    <View style={styles.container}>
      <Spinner image={PlaceholderImage} />
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