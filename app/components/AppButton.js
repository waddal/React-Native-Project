import React from "react";
import { Button, StyleSheet, Platform, Text } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

import { monochrome } from '../themes/themes.js';

export const AppButton = ({ title, color, accessibilityLabel, handleOnPress, handlePressOut }) => {

  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: pressed ? "crimson" : color,
        },
      ]}
      onPressIn={handleOnPress}
      onLongPress={() => console.log("Component is pressed...")}
      onPressOut={handlePressOut}
      accessibilityLabel={accessibilityLabel}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    width: "95%",
    borderRadius: 15,
    padding: 15,
    margin: 5,
  },
  text: {
    color: monochrome.white,
    fontSize: Platform.OS === "android" ? 18 : 20,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
