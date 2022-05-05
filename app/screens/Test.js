import React from "react";
import { StyleSheet, Image, View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import { AppButton } from "../components/AppButton";
import Screen from "../components/Screen";
import AppFormField from "../components/AppFormField";

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
          {({ handleSubmit }) => (
            <>
              <AppFormField
                autoCapitalize={"none"}
                autoCorrect={false}
                icon={"account-outline"}
                keyboardType={"email-address"}
                name={"email"}
                placeholder={"Email"}
                textContentType={"emailAddress"}
              />
              <AppFormField
                autoCapitalize={"none"}
                autoCorrect={false}
                icon={"lock-outline"}
                name={"password"}
                placeholder={"Password"}
                secureTextEntry
                textContentType={"password"}
                ellipsizeMode='end'
              />
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
