import React from "react";
//imrn
import { Text, StyleSheet, Platform } from "react-native";

function AppText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: 'tomato',
    ...Platform.select({
        ios: {
          fontSize: 18,
          fontFamily: "Avenir",
        },
        android: {
          fontSize: 18,
          fontFamily: "Roboto",
        },
      })
  },
});

//Responsive OS Styles
Platform.select({
  ios: {
    fontSize: 18,
    fontFamily: "Avenir",
  },
  android: {
    fontSize: 18,
    fontFamily: "Roboto",
  },
});

export default AppText;
