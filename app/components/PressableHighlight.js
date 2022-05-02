import React from "react";
import { Pressable } from "react-native";

import colors from "../config/colors";

function PressableHighlight({ children, handlePressOut }) {
  return (
    <Pressable
      style={({ pressed }) => [{ backgroundColor: pressed ? colors.light : null }]}
      onPressOut={handlePressOut}
    >
      {children}
    </Pressable>
  );
}

export default PressableHighlight;
