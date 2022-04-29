import React from "react";
import { Button, StyleSheet, Platform } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import AppText from "./AppText";

export const AppButton = ({ title, color, accessibilityLabel }) => {
  const handleClick = () => {
    console.log("pressOut activated!");
  };

  const handleOnPress = () => {
    console.log("onPressIn!");
  };

  return (
    //android
    // <Button
    //   style={styles.button}
    //   title={title}
    //   color={color}
    //   accessibilityLabel={accessibilityLabel}
    // />

    //iOS
    <Pressable
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: pressed ? "white" : color,
        },
      ]}
      onPressIn={handleOnPress}
      onLongPress={() => console.log("HODL!")}
      onPressOut={handleClick}
      accessibilityLabel={accessibilityLabel}
    >
      <AppText style={styles.text}>{title}</AppText>
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
    margin: 5,
  },
  text: {
    color: "white",
    fontSize: Platform.OS === "android" ? 18 : 20,
  },
});
