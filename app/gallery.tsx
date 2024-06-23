import { selectedChoeAeAtom } from "@/constants/atoms/selected-choe-ae";
import { launchImageLibraryAsync } from "expo-image-picker";
import { useSetAtom } from "jotai";
import { Button, Text, View } from "react-native";

export default function ChoeAeGallery() {
  const setSelectedChoeAe = useSetAtom(selectedChoeAeAtom);
  const pickImage = async () => {
    const result = await launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedChoeAe(result.assets[0].uri);
    } else {
      alert("Canceled");
    }
  }
  return (
    <View>
      <Text>Hi!</Text>
      <Button
        title="Add new choe-ae"
        onPress={pickImage} />
    </View>
  )
}
