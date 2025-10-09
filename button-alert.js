import React from "react";
import { View, Button, Alert } from "react-native";

const App = () => {
  const showAlert = () => {
    Alert.alert("Primakara Luar Biasa");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Tampilkan Alert" onPress={showAlert} />
    </View>
  );
};

export default App;
