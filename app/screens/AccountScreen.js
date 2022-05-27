import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import colors from "../config/colors";
import Icon from "../components/Icon";
import Screen from "../components/Screen";
import { ListItem, ListItemSeparator } from "../components/lists";
import routes from '../navigation/routes';

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
    targetScreen: routes.MY_LISTINGS,
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: routes.MESSAGES,
  },
];

function AccountScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={"Alan Waddell"}
          description={"Sustainability Software Engineer"}
          image={require("../assets/alan.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem, index) => index.toString()}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              handlePressOut={() => navigation.navigate(`${item.targetScreen}`)}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
      <ListItem
        title={"Log Out"}
        IconComponent={<Icon name="logout" backgroundColor="#FFE66D" />}
      />
    </Screen>
  );
}

export default AccountScreen;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
});
