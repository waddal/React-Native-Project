import React from "react";
import { View, StyleSheet, Image } from "react-native";

import { colors } from "../colors";
import AppText from "./AppText";

/*
    <Card
    title="Jessies Feet Pics"
    subTitle="$100"
    image={require('../assets/jacket.jpg')}
    />
*/

function Card({ title, subTitle, image }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

export default Card;

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
  },
  subTitle: {
    fontWeight: "800",
    color: colors.secondary,
  },
});
