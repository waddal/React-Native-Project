import React from "react";
import { StyleSheet, Image, View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import { AppButton } from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";
import AppText from "../components/AppText";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function Test() {
  return (
    <Screen>
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />

        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          {({ handleChange, handleSubmit, errors }) => (
            <>
              <AppTextInput
                autoCapitalize={"none"}
                autoCorrect={false}
                icon={"account-outline"}
                keyboardType={"email-address"}
                onChangeText={handleChange("email")}
                placeholder={"Username"}
                textContentType={"emailAddress"} //iOS only
              />
              <AppText style={{ color: "red" }}>{errors.email}</AppText>
              <AppTextInput
                autoCapitalize={"none"}
                autoCorrect={false}
                icon={"lock-outline"}
                onChangeText={handleChange("password")}
                placeholder={"Password"}
                secureTextEntry //defaults to true
                textContentType={"password"}
              />
              <AppText style={{ color: "red" }}>{errors.password}</AppText>
              <AppButton title="Login" handleOnPress={handleSubmit} />
            </>
          )}
        </Formik>
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
