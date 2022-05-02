import React from "react";
import { View, Image, StyleSheet } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import PressableHighlight from "./PressableHighlight";
import AppText from "./AppText";
import colors from "../config/colors";

function ListItem({ title, description, image, handlePressOut, renderRightActions }) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <PressableHighlight handlePressOut={handlePressOut}>
        <View style={styles.container}>
          <Image style={styles.image} source={image} />
          <View>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.description}>{description}</AppText>
          </View>
        </View>
      </PressableHighlight>
    </Swipeable>
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
