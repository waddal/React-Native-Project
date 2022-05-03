import React, { useState } from "react";
import { StyleSheet, Image, View } from "react-native";
import { AppButton } from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";

function LoginScreen() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <Screen>
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <AppTextInput
          autoCapitalize={"none"}
          autoCorrect={false}
          icon={"account-outline"}
          keyboardType={"email-address"}
          onChangeText={(text) => setEmail(text)}
          placeholder={"Username"}
          textContentType={"emailAddress"} //iOS only
        />
        <AppTextInput
          autoCapitalize={"none"}
          autoCorrect={false}
          icon={"lock-outline"}
          onChangeText={(text) => setPassword(text)}
          placeholder={"Password"}
          secureTextEntry //defaults to true
          textContentType={"password"}
        />
        <AppButton
          title="Login"
          handleOnPress={() => console.log("login!", email, password)}
        />
      </View>
    </Screen>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
