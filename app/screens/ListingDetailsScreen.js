// import React from 'react';
// import { View, Image, StyleSheet } from 'react-native';

// function ListingDetailsScreen() {
//     return (
//         <View>
//             <Image style={styles.image}source={require('../assets/jacket.jpg')}/>
//         </View>
//     );
// }

// export default ListingDetailsScreen;

// const styles = StyleSheet.create({
//     image: {
//         width: "100%",
//         height: 300,
//     }
// })

import React from "react";
import { View, Image, StyleSheet } from "react-native";

import AppText from "../components/AppText";
import { ListItem } from "../components/lists";
import colors from "../config/colors";

function ListingDetailsScreen() {
  return (
    <View style={styles.background}>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title} numberOfLines={1}>
          Happy Pills for sale
        </AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/mosh.jpg")}
            title="Mosh"
            description="3 Listings"
          />
        </View>
      </View>
    </View>
  );
}

export default ListingDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.secondary,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
});
