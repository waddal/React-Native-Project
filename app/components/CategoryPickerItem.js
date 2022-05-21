import React from "react";
import { View, StyleSheet } from "react-native";
import Icon from "./Icon";
import AppText from "../components/AppText";

function CategoryPickerItem({ item, handleOnPress }) {
  return (
    <View style={styles.container}>
      <Icon backgroundColor={item.backgroundColor} name={item.icon} size={60} />
      <AppText style={styles.label}>{item.label}</AppText>
    </View>
  );
}

export default CategoryPickerItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    marginTop: 5,
    textAlign: "center",
  },
});
