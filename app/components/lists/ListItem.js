import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Swipeable from "react-native-gesture-handler/Swipeable";

import PressableHighlight from "../PressableHighlight";
import AppText from "../AppText";
import colors from "../../config/colors";

function ListItem({ title, description, image, IconComponent, handlePressOut, renderRightActions }) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <PressableHighlight handlePressOut={handlePressOut}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
            {description && <AppText style={styles.description} numberOfLines={2}>{description}</AppText>}
          </View>
          <MaterialCommunityIcons color={colors.medium} name="chevron-right" size={25}/>
        </View>
      </PressableHighlight>
    </Swipeable>
  );
}

export default ListItem;

const styles = StyleSheet.create({
  container: {
    alignItems:"center",
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'center',
  },
  title: {
    fontWeight: "500",
  },
  description: {
    color: colors.medium,
  },
});
