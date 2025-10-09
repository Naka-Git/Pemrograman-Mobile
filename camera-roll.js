import React, { useState } from "react";
import { View, Button, Image, ScrollView, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function App() {
  const [images, setImages] = useState([]);

  const pickImages = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsMultipleSelection: true,
      selectionLimit: 10, // pilih maksimal 10 gambar
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (!result.canceled) {
      setImages(result.assets);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Pilih 10 Gambar dari Galeri" onPress={pickImages} />

      <ScrollView contentContainerStyle={styles.gallery}>
        {images.map((img, i) => (
          <Image key={i} source={{ uri: img.uri }} style={styles.image} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 60, alignItems: "center" },
  gallery: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 20,
  },
  image: { width: 100, height: 100, margin: 5, borderRadius: 10 },
});
