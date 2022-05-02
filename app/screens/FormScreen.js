import React, { useState } from "react";
import { Switch } from 'react-native'

import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";
import colors from "../config/colors";

function FormScreen() {
  const [firstName, setFirstName] = useState("");
  const [isNew, setIsNew] = useState(false);

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
      <Switch value={isNew} onValueChange={newValue => setIsNew(newValue)}/>
    </Screen>
  );
}

export default FormScreen;
