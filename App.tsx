import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import LotsOfGreet from "./lotsofgreet";
import LoveBlink from "./loveblink";
import BlinkApp from "./blinkapp";
import ButtonHelloWorld from "./button-helloworld";
import ButtonInput from "./Button-InputText";

export default function App() {
  const [screen, setScreen] = useState<
    "home" | "greet" | "blink" | "blinkap" | "button" | "buttoninput"
  >("home");

  if (screen === "greet") {
    return <LotsOfGreet />; // tidak ada tombol kembali
  }
  if (screen === "blink") {
    return <LoveBlink />; // tidak ada tombol kembali
  }
  if (screen === "blinkap") {
    return <BlinkApp />; // tidak ada tombol kembali
  }
  if (screen === "button") {
    return <ButtonHelloWorld />; // tidak ada tombol kembali
  }
  if (screen === "buttoninput") {
    return <ButtonInput />; // tidak ada tombol kembali
  }
  // Home Screen
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ini adalah Home Screen</Text>
      <Button title="Buka lots of greet" onPress={() => setScreen("greet")} />
      <View style={{ height: 10 }} />
      <Button title="Buka love blink" onPress={() => setScreen("blink")} />
      <View style={{ height: 10 }} />
      <Button title="Buka BlinkApp" onPress={() => setScreen("blinkap")} />
      <View style={{ height: 10 }} />
      <Button
        title="Buka Button Hello World"
        onPress={() => setScreen("button")}
      />
      <View style={{ height: 10 }} />
      <Button
        title="Buka Button Input"
        onPress={() => setScreen("buttoninput")}
      />
      <View style={{ height: 10 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  extraText: {
    fontSize: 22,
    textAlign: "center",
    marginTop: 50,
  },
});
