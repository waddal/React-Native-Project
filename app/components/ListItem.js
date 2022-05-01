import React from "react";
import { View, Image, StyleSheet } from "react-native";

import { colors } from "../colors";
import AppText from "./AppText";

function ListItem({ title, description, image }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.description}>{description}</AppText>
      </View>
    </View>
  );
}

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
      width: 70,
      height: 70,
      borderRadius: 35,
      marginRight: 10,
  },
  title: {
    fontWeight: '500',
  },
  description: {
      color: colors.grey,
  }
});
