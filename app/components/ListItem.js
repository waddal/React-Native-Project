import React from "react";
import { View, Image, StyleSheet, Pressable } from "react-native";

import { colors } from "../colors";
import PressableHighlight from "./PressableHighlight";
import AppText from "./AppText";

function ListItem({ title, description, image, handlePressOut }) {
  return (
    <PressableHighlight handlePressOut={handlePressOut}>
      <View style={styles.container}>
        <Image style={styles.image} source={image} />
        <View>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.description}>{description}</AppText>
        </View>
      </View>
    </PressableHighlight>
  );
}

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  title: {
    fontWeight: "500",
  },
  description: {
    color: colors.medium,
  },
});
