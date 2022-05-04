import React, { useState } from "react";

import AppPicker from "../components/AppPicker";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";

const categories = [
  { label: "Energy", value: 1 },
  { label: "Carbon Removal", value: 2 },
  { label: "Transportation", value: 3 },
];

function FormScreen() {
  const [category, setCategory] = useState(categories[0]);

  return (
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        items={categories}
        icon={"apps"}
        placeholder={"Category"}
      />
      <AppTextInput icon={"email"} placeholder={"Username"} />
    </Screen>
  );
}

export default FormScreen;

{
  /* <TextInput
  secureTextEntry //boolean defaults true - conceals input
  clearButtonMode="while-editing" //clear input - iOS only
  maxLength={5}
  onChangeText={(text) => setFirstName(text)}
  placeholder="firstName"
  style={{ borderBottomColor: "#ccc", borderBottomWidth: 1 }}
/> */
}
