import React from "react";
import { ImageBackground, View, StyleSheet, Image, Text } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useNavigation } from "@react-navigation/native";

import LoginScreen from "./LoginScreen";
import { AppButton } from "../components/AppButton";

function WelcomeScreen({ navigation }) {

  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagline}>Hello Visitor!</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title={"Login"} handleOnPress={() => navigation.navigate('Login')}/>
        <AppButton title={"Register"} color={"secondary"} handleOnPress={() => navigation.navigate('Register')}/>
      </View>
    </ImageBackground>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  tagline: {
    fontSize: 25,
    fontWeight: '600',
    paddingVertical: 20,
  }
});
