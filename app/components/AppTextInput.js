import React from "react";
import { StyleSheet, View, TextInput, Platform } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput style={styles.textInput} {...otherProps} />
    </View>
  );
}

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: colors.light,
    flexDirection: "row",
    alignItems: 'center',
    padding: 15,
    marginVertical: 10,
    borderRadius: 25,
  },
  textInput: {
    color: colors.dark,
    ...Platform.select({
      ios: {
        fontSize: 20,
        fontFamily: "Avenir",
      },
      android: {
        fontSize: 18,
        fontFamily: "Roboto",
      },
    }),
  },
  icon: {
    marginRight: 20,
  },
});
