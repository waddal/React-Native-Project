import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "../components/AppText.js";
import { AppButton } from "../components/AppButton.js";

function TestComponent() {
  const handlePressOut = () => {
    console.log("Press released!");
  };

  const handleOnPress = () => {
    console.log("Component pressed..");
  };

  return (
    <View style={styles.container}>
      <View style={styles.icon}></View>
      <Text style={styles.text}>i love jessie ❤️ </Text>
      <AppText>test text</AppText>
      <MaterialCommunityIcons name="email" size={60} color="dodgerblue" />
      <AppButton
        title="Login"
        color="dodgerblue"
        accessibilityLabel="click me if you dare"
        handleOnPress={handleOnPress}
        handlePressOut={handlePressOut}
      />
      <AppButton
        title="Register"
        color="green"
        accessibilityLabel="click me if you dare"
      />
    </View>
  );
}

export default TestComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "papayawhip",
  },
  icon: {
    width: 100,
    height: 100,
    backgroundColor: "floralwhite",

    //BORDER
    borderWidth: 5,
    borderColor: "seashell",
    // borderRadius: 10,
    // borderTopWidth: 20,
    // borderTopLeftRadius: 50,
    // at least half of w/h to create circle
    borderRadius: 50,

    //SHADOW - iOS
    shadowOffset: { height: 10, width: 0 },
    shadowOpacity: 1,

    //SHADOW - Android
    elevation: 20,
  },
  text: {
    margin: 20,
    fontSize: 15,
    fontStyle: "italic",
    fontWeight: "600",
    textTransform: "capitalize",
    textAlign: "center",
    lineHeight: 50,
  },
});
