import React, { useEffect } from "react";
import { Alert, TouchableOpacity, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import colors from "../config/colors";

function ImageInput({ imageUri, onChangeImage }) {
  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) alert("You need to grant permission to access library.");
  };

  const handlePress = () => {
    if (!imageUri) selectImage();
    else {
      Alert.alert(
        "Delete",
        "Are you sure you want to delete this image?",
        [
          { text: "Yes", onPress: () => onChangeImage(null) },
          { text: "No" },
        ]
      );
    }
  };

  const selectImage = async () => {
    console.log("select");
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.1,
      });
      if (!result.cancel) onChangeImage(result.uri);
    } catch (error) {
      console.log("error reading an image!");
    }
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handlePress}
      activeOpacity={0.7}
    >
      {!imageUri && (
        <MaterialCommunityIcons color={colors.medium} name="camera" size={40} />
      )}
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
    </TouchableOpacity>
  );
}

export default ImageInput;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 100,
    backgroundColor: colors.light,
    borderRadius: 15,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
