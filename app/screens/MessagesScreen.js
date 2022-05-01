import React from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import Constants from "expo-constants";
console.log(Constants);

import ListItem from "../components/ListItem";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
];

function MessagesScreen(props) {
  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            description={item.description}
            image={item.image}
          />
        )}
      />
    </SafeAreaView>
  );
}

export default MessagesScreen;

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    //   paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
