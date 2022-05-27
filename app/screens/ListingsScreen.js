import React from "react";
import { StyleSheet, FlatList } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import routes from '../navigation/routes';

const listings = [
  {
    id: 1,
    title: "Happy Man for Sale",
    price: 20,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Dilapidated Couch",
    price: 80,
    image: require("../assets/couch.jpg"),
  },
];

const ListingsScreen = ({ navigation }) => {
  return (
    <Screen style={styles.container}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={`$` + item.price}
            image={item.image}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
};

export default ListingsScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.light,
  },
});
