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
import CategoryPickerItem from "../components/CategoryPickerItem";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(3).label("Title"),
  price: Yup.string().required().min(1).max(10000).label("Price"),
  description: Yup.string().required().max(256).label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  { label: "Furniture", value: 1, backgroundColor: "crimson", icon: "apps" },
  { label: "Apparel", value: 2, backgroundColor: "darkkhaki", icon: "email" },
  { label: "Vehicles", value: 3, backgroundColor: "darkslateblue", icon: "lock" },
  { label: "Electronics", value: 4, backgroundColor: "darkcyan", icon: "lock" },
  { label: "Games", value: 5, backgroundColor: "darksalmon", icon: "lock" },
  { label: "Sports", value: 6, backgroundColor: "darkmagenta", icon: "lock" },
  { label: "Music & Movies", value: 7, backgroundColor: "olive", icon: "lock" },
  { label: "Books", value: 8, backgroundColor: "plum", icon: "lock" },
  { label: "Health", value: 9, backgroundColor: "peru", icon: "lock" },
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
            numberOfColumns={3}
            width={"50%"}
            PickerItemComponent={CategoryPickerItem}
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
