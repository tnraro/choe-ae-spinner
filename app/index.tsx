import { Spinner } from "@/components/spinner";
import { selectedChoeAeAtom } from "@/constants/atoms/selected-choe-ae";
import { Link } from "expo-router";
import { useAtomValue } from "jotai";
import { StyleSheet, View } from "react-native";

const PlaceholderImage = require("../assets/images/react-logo.png");

export default function Index() {
  const selectedChoeAe = useAtomValue(selectedChoeAeAtom);
  const image = selectedChoeAe ? { uri: selectedChoeAe } : PlaceholderImage;
  return (
    <View style={styles.container}>
      <Spinner image={image} />
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