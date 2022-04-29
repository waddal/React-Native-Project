import React from "react";
import { StyleSheet, View, Text } from "react-native";

import AppText from '../components/AppText.js';

function TestComponent() {
  return (
    <View style={styles.container}>
      <View style={styles.icon}></View>
      <Text style={styles.text}>i love rice ❤️ </Text>
      <AppText>test text</AppText>
    </View>
  );
}

export default TestComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "papayawhip",
  },
  icon: {
    width: 100,
    height: 100,
    backgroundColor: 'floralwhite',

    //BORDER
    borderWidth: 5,
    borderColor: "seashell",
    // borderRadius: 10,
    // borderTopWidth: 20,
    // borderTopLeftRadius: 50,
    // at least half of w/h to create circle
    borderRadius: 50,

    //SHADOW - iOS
    shadowColor: "grey",
    shadowOffset: { height: 10, width: 0 },
    shadowOpacity: 1,

    //SHADOW - Android
    elevation: 20,
  },
  text: {
    margin: 20,
    fontSize: 15,
    fontStyle: 'italic',
    fontWeight: '600',
    textTransform: 'capitalize',
    textAlign: 'center',
    lineHeight: 50,
  },
});
