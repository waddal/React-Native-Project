import React from "react";
import { StyleSheet, Platform, Text, Pressable } from "react-native";
import colors from "../config/colors";

export const AppButton = ({
  title,
  color = "primary",
  pressColor = "medium",
  accessibilityLabel,
  handleOnPress,
}) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: pressed ? colors[pressColor] : colors[color],
        },
      ]}
      onPressIn={handleOnPress}
      onLongPress={() => console.log("onLongPress...")}
      onPressOut={() => console.log("onPressOut!")}
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
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
