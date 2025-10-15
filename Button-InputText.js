import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [displayText, setDisplayText] = useState("");

  const handleSubmit = () => {
    if (inputText.trim() === "") {
      Alert.alert("Peringatan", "Input tidak boleh kosong!");
      return;
    }
    setDisplayText(inputText);
    setInputText(""); // Mengosongkan input setelah submit
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setInputText(text)}
        value={inputText}
        placeholder="Ketik sesuatu di sini..."
      />
      <Button title="Submit" onPress={handleSubmit} />
      {displayText ? (
        <View style={styles.displayContainer}>
          <Text style={styles.displayText}>{displayText}</Text>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    gap: 10,
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  displayContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
  },
  displayText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default App;
