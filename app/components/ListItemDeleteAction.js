import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { colors } from "../colors";

function ListItemDeleteAction({ handleOnPressOut }) {
  return (
    <TouchableWithoutFeedback onPressOut={handleOnPressOut}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="trash-can"
          size={35}
          color={colors.white}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

export default ListItemDeleteAction;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.danger,
    width: 70,
  },
});
