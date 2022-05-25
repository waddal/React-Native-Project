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
import AppFormImagePicker from "../components/forms/AppFormImagePicker";
import useLocation from "../components/hooks/useLocation";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(3).label("Title"),
  price: Yup.string().required().min(1).max(10000).label("Price"),
  description: Yup.string().required().max(256).label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image."),
});

const categories = [
  {
    label: "Furniture",
    value: 1,
    backgroundColor: "peru",
    icon: "chair-rolling",
  },
  {
    label: "Apparel",
    value: 2,
    backgroundColor: "darkkhaki",
    icon: "tshirt-crew",
  },
  {
    label: "Vehicles",
    value: 3,
    backgroundColor: "darkslateblue",
    icon: "car",
  },
  {
    label: "Electronics",
    value: 4,
    backgroundColor: "darkcyan",
    icon: "car-battery",
  },
  {
    label: "Games",
    value: 5,
    backgroundColor: "darksalmon",
    icon: "google-controller",
  },
  {
    label: "Sports",
    value: 6,
    backgroundColor: "darkmagenta",
    icon: "basketball",
  },
  {
    label: "Music & Movies",
    value: 7,
    backgroundColor: "olive",
    icon: "music-box",
  },
  { label: "Books", value: 8, backgroundColor: "plum", icon: "book-open" },
  {
    label: "Health",
    value: 9,
    backgroundColor: "crimson",
    icon: "heart-pulse",
  },
];

function ListingEditScreen() {
  const location = useLocation();

  return (
    <Screen>
      <View style={styles.container}>
        <AppForm
          initialValues={{
            title: "",
            price: "",
            description: "",
            category: null,
            images: [],
          }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <AppFormImagePicker name={"images"} />
          <AppFormField
            autoCapitalize={"none"}
            autoCorrect={false}
            // icon={"pencil-box-outline"}
            maxLength={256}
            name={"title"}
            placeholder={"Title"}
          />
          <AppFormField
            autoCapitalize={"none"}
            autoCorrect={false}
            // icon={"cash"}
            keyboardType={"numeric"}
            name={"price"}
            maxLength={8}
            placeholder={"Price"}
            width={120}
          />
          <AppFormPicker
            items={categories}
            // icon={"apps"}
            name={"category"}
            numberOfColumns={3}
            width={"40%"}
            PickerItemComponent={CategoryPickerItem}
            placeholder={"Category"}
          />
          <AppFormField
            // icon={"information-outline"}
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
