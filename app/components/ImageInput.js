import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../config/colors";
import Icon from "./Icon";

function ImageInput({ imageUri, handleSelectImage }) {
  return (
    <TouchableOpacity style={styles.container} onPress={handleSelectImage}>
      {imageUri ? (
        <Image source={{ uri: imageUri }} style={styles.image} />
      ) : (
        <Icon
          name={"camera"}
          size={50}
          backgroundColor={colors.light}
          iconColor={colors.medium}
        />
      )}
    </TouchableOpacity>
  );
}

export default ImageInput;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 100,
    borderRadius: 15,
    backgroundColor: colors.light,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
