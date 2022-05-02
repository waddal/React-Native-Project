import React, { useState } from "react";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";

import Screen from "../components/Screen";
import colors from "../config/colors";

function FormScreen() {
  const [firstName, setFirstName] = useState("");

  return (
    <Screen>
      <AppText>{firstName}</AppText>
      {/* <TextInput
        secureTextEntry //boolean defaults true - conceals input
        clearButtonMode="while-editing" //clear input - iOS only
        maxLength={5}
        onChangeText={(text) => setFirstName(text)}
        placeholder="firstName"
        style={{ borderBottomColor: "#ccc", borderBottomWidth: 1 }}
      /> */}
      <AppTextInput placeholder="Username" icon={"email"} />
    </Screen>
  );
}

export default FormScreen;
