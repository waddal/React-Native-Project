import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import AppPicker from "../components/AppPicker";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(3).label("Title"),
  price: Yup.string().required().label("Price"),
  category: Yup.string().required().label("Category"),
  description: Yup.string().required().max(128).label("Description"),
});

const categories = [
  { label: "Category", value: 1 },
  { label: "Energy", value: 2 },
  { label: "Carbon Removal", value: 3 },
  { label: "Transportation", value: 4 },
];

function ListingEditScreen() {
  const [category, setCategory] = useState(categories[0]);

  return (
    <Screen>
      <View style={styles.container}>
        <AppForm
          initialValues={{
            title: "",
            price: "",
            category: "",
            description: "",
          }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <AppFormField
            autoCapitalize={"none"}
            autoCorrect={false}
            icon={"pencil-box-outline"}
            name={"title"}
            placeholder={"Title"}
            textContentType={"title"}
          />
          <AppFormField
            autoCapitalize={"none"}
            autoCorrect={false}
            icon={"cash"}
            keyboardType={"numeric"}
            name={"price"}
            placeholder={"Price"}
            textContentType={"price"}
          />
          <AppPicker
            selectedItem={category}
            onSelectItem={(item) => setCategory(item)}
            items={categories}
            icon={"apps"}
            placeholder={"Category"}
          />
          <AppFormField
            autoCapitalize={"none"}
            autoCorrect={false}
            icon={"information-outline"}
            name={"description"}
            placeholder={"Description"}
            secureTextEntry
            textContentType={"description"}
          />
          <SubmitButton title="Register" />
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
