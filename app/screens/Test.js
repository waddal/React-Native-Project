import React from "react";
import { StyleSheet, Image, View } from "react-native";
import { useForm } from "react-hook-form";

import { AppButton } from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";

function Test() {
  const { register, setValue, handleSubmit, errors } = useForm();

  const onSubmit = (data) => console.log("Login: ", data);

  return (
    <Screen>
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <AppTextInput
          autoCapitalize={"none"}
          autoCorrect={false}
          icon={"account-outline"}
          keyboardType={"email-address"}
          onChangeText={(text) => setValue("username", text, true)}
          placeholder={"Username"}
          textContentType={"emailAddress"} //iOS only
          register={{ ...register("username") }}
        />
        <AppTextInput
          autoCapitalize={"none"}
          autoCorrect={false}
          icon={"lock-outline"}
          onChangeText={(text) => setValue("password", text)}
          placeholder={"Password"}
          secureTextEntry //defaults to true
          textContentType={"password"}
          register={{ ...register("username") }}
        />
        <AppButton title="Login" handleOnPress={handleSubmit(onSubmit)} />
      </View>
    </Screen>
  );
}

export default Test;

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
