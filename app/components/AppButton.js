import React from "react";
import { StyleSheet, Platform, Text } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

import { colors } from '../colors';

export const AppButton = ({ title, color = "primary", accessibilityLabel, handleOnPress, handlePressOut }) => {

  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: pressed ? "crimson" : colors[color],
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
    width: "100%",
    padding: 15,
    borderRadius: 25,
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: Platform.OS === "android" ? 18 : 20,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
