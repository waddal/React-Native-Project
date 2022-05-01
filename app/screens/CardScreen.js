import React from "react";
import { View, StyleSheet } from "react-native";

import { colors } from "../colors";
import Card from '../components/Card';

function CardScreen() {
  return (
    <View style={styles.background}>
      <Card
        title="Jessies Feet Pics"
        subTitle="$100"
        image={require('../assets/jacket.jpg')}
      />
    </View>
  );
}

export default CardScreen;

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#fff",
    padding: 20,
    paddingTop: 100,
  },
});
