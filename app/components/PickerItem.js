import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import AppText from "./AppText";

function PickerItem({ item, handleOnPress }) {
  return (
    <TouchableOpacity onPress={handleOnPress}>
      <AppText style={styles.text}>{item.label}</AppText>
    </TouchableOpacity>
  );
}

export default PickerItem;

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});
