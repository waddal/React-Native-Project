import React from "react";
import { StyleSheet } from "react-native";

import Icon from "../components/Icon";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";

function AccountScreen() {
  return (
    <Screen>
      <Icon
        name={"mail"}
        size={50}
        backgroundColor={"red"}
        iconColor={"white"}
      />
      <ListItem  />
    </Screen>
  );
}

export default AccountScreen;

const styles = StyleSheet.create({});
