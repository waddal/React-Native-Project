import React from "react";
import { StyleSheet, Image, View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import { AppButton } from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import ErrorMessage from "../components/ErrorMessage";

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
          {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
            <>
              <AppTextInput
                autoCapitalize={"none"}
                autoCorrect={false}
                icon={"account-outline"}
                keyboardType={"email-address"}
                onBlur={() => setFieldTouched("email")}
                onChangeText={handleChange("email")}
                placeholder={"Email"}
                textContentType={"emailAddress"} //iOS only
              />
              <ErrorMessage error={errors.email} visible={touched.email} />
              <AppTextInput
                autoCapitalize={"none"}
                autoCorrect={false}
                icon={"lock-outline"}
                onBlur={() => setFieldTouched("password")}
                onChangeText={handleChange("password")}
                placeholder={"Password"}
                secureTextEntry //defaults to true
                textContentType={"password"}
                ellipsizeMode='end'
              />
              <ErrorMessage error={errors.password} visible={touched.password}/>
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
