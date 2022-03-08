import React from "react";
import { View, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.child, { backgroundColor: "dodgerblue" }]}></View>
      <View style={[styles.child, { backgroundColor: "gold" }]}></View>
      <View style={[styles.child, { backgroundColor: "tomato" }]}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    flexWrap: "wrap",
  },
  child: {
    backgroundColor: "grey",
    height: 100,
    width: 100,
  },
});
