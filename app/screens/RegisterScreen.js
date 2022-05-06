import React from "react";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(3).label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen() {
  return (
    <Screen>
      <View style={styles.container}>
        <AppForm
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <AppFormField
            autoCapitalize={"none"}
            autoCorrect={false}
            icon={"account-outline"}
            name={"name"}
            placeholder={"Name"}
            textContentType={"name"}
          />
          <AppFormField
            autoCapitalize={"none"}
            autoCorrect={false}
            icon={"email-outline"}
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
            ellipsizeMode="end"
          />
          <SubmitButton title="Register" />
        </AppForm>
      </View>
    </Screen>
  );
}

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
