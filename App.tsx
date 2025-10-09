import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import FixedDimensions from "./fixeddimensions";
import StylingText from "./stylingtext";
import FlexDimension from "./flexdimension";
import FlexDirection from "./flexdirection";
import JustifyContent from "./justifycontent";
import AlignItems from "./alignitems";
import BasicComponentView from "./basiccomponentview";
import BasicComponentText from "./basiccomponenttext";
import BasicComponentTextInput from "./basic-component-textinput";
import ButtonAlert from "./button-alert";
import CameraRoll from "./camera-roll";

export default function App() {
  const [screen, setScreen] = useState<
    | "home"
    | "fixed"
    | "styling"
    | "flex"
    | "direction"
    | "justify"
    | "align"
    | "basic"
    | "text"
    | "textinput"
    | "buttonalert"
    | "cameraroll"
  >("home");

  if (screen === "fixed") {
    return <FixedDimensions />; // tidak ada tombol kembali
  }

  if (screen === "styling") {
    return <StylingText />; // tidak ada tombol kembali
  }

  if (screen === "flex") {
    return <FlexDimension />; // tidak ada tombol kembali
  }

  if (screen === "direction") {
    return <FlexDirection />; // tidak ada tombol kembali
  }

  if (screen === "justify") {
    return <JustifyContent />; // tidak ada tombol kembali
  }

  if (screen === "align") {
    return <AlignItems />; // tidak ada tombol kembali
  }

  if (screen === "basic") {
    return <BasicComponentView />; // tidak ada tombol kembali
  }

  if (screen === "text") {
    return <BasicComponentText />; // tidak ada tombol kembali
  }

  if (screen === "textinput") {
    return <BasicComponentTextInput />; // tidak ada tombol kembali
  }

  if (screen === "buttonalert") {
    return <ButtonAlert />; // tidak ada tombol kembali
  }

  if (screen === "cameraroll") {
    return <CameraRoll />; // tidak ada tombol kembali
  }

  // Home Screen
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ini adalah Home Screen</Text>

      <Button title="Buka FixedDimensions" onPress={() => setScreen("fixed")} />
      <View style={{ height: 10 }} />

      <Button title="Buka StylingText" onPress={() => setScreen("styling")} />
      <View style={{ height: 10 }} />

      <Button title="Buka flex dimension" onPress={() => setScreen("flex")} />
      <View style={{ height: 10 }} />

      <Button
        title="Buka Flex Direction"
        onPress={() => setScreen("direction")}
      />
      <View style={{ height: 10 }} />

      <Button
        title="Buka justify content"
        onPress={() => setScreen("justify")}
      />
      <View style={{ height: 10 }} />

      <Button title="Buka Align item" onPress={() => setScreen("align")} />
      <View style={{ height: 10 }} />

      <Button
        title="Buka Basic Component View"
        onPress={() => setScreen("basic")}
      />
      <View style={{ height: 10 }} />

      <Button
        title="Buka Basic Component Text"
        onPress={() => setScreen("text")}
      />
      <View style={{ height: 10 }} />
      <Button
        title="Buka Basic Component Text Input"
        onPress={() => setScreen("textinput")}
      />
      <View style={{ height: 10 }} />
      <Button
        title="Buka Button Alert"
        onPress={() => setScreen("buttonalert")}
      />
      <View style={{ height: 10 }} />

      <Button
        title="Buka Camera Roll"
        onPress={() => setScreen("cameraroll")}
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
