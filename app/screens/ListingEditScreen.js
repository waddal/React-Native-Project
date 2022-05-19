import React from "react";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(3).label("Title"),
  price: Yup.string().required().min(1).max(10000).label("Price"),
  description: Yup.string().required().max(256).label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  { label: "Candy", value: 1 },
  { label: "Energy", value: 2 },
  { label: "Carbon Removal", value: 3 },
  { label: "Transportation", value: 4 },
];

function ListingEditScreen() {
  return (
    <Screen>
      <View style={styles.container}>
        <AppForm
          initialValues={{
            title: "",
            price: "",
            description: "",
            category: null,
          }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <AppFormField
            autoCapitalize={"none"}
            autoCorrect={false}
            icon={"pencil-box-outline"}
            maxLength={256}
            name={"title"}
            placeholder={"Title"}
          />
          <AppFormField
            autoCapitalize={"none"}
            autoCorrect={false}
            icon={"cash"}
            keyboardType={"numeric"}
            name={"price"}
            maxLength={8}
            placeholder={"Price"}
            width={130}
          />
          <AppFormPicker
            items={categories}
            icon={"apps"}
            name={"category"}
            width={"50%"}
            placeholder={"Category"}
          />
          <AppFormField
            icon={"information-outline"}
            maxLength={256}
            multiline
            numberOfLines={3}
            name={"description"}
            placeholder={"Description"}
          />
          <SubmitButton title="Post" />
        </AppForm>
      </View>
    </Screen>
  );
}

export default ListingEditScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
