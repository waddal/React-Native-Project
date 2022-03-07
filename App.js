import React from "react";
import { View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center", // aligns line determines alignment of items in the line
        alignContent: "center", // determines alignment of all content within container
        flexWrap: "wrap",
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          // flexBasis: 100, // width or height on primary axis
          // flex: 1, // flexGrow has similar effect
          flexShrink: 1, // if item overflows, shrinks to give room to other elements
          height: 100,
          width: 400
        }}
      />
      <View
        style={{
          backgroundColor: "gold",
          height: 100,
          width: 100
        }}
      />
      <View
        style={{
          backgroundColor: "tomato",
          height: 100,
          width: 100
        }}
      />
      <View
        style={{
          backgroundColor: "grey",
          height: 100,
          width: 100
        }}
      />
      <View
        style={{
          backgroundColor: "greenyellow",
          height: 100,
          width: 100
        }}
      />
    </View>
  );
}
