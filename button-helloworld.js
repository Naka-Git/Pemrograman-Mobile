import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const App = () => {
  const [isTextVisible, setTextVisible] = useState(false);

  const toggleText = () => {
    setTextVisible((prevState) => !prevState);
  };

  return (
    <View style={styles.container}>
      {isTextVisible && <Text style={styles.text}>Hello World</Text>}
      <Button
        title={isTextVisible ? "Sembunyikan" : "Tampilkan"}
        onPress={toggleText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default App;
