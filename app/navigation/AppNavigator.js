import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import FeedNavigator from "./FeedNavigator";
import ListingEditScreen from "../screens/ListingEditScreen";
import AccountNavigator from "./AccountNavigator";
import NewListingButton from "./NewListingButton";
import routes from "../navigation/routes";

const Tab = createBottomTabNavigator();
const AppNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Tab.Screen
      name="FeedTab"
      component={FeedNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
        tabBarLabel: "Feed",
      }}
    />
    <Tab.Screen
      name="ListingEdit"
      component={ListingEditScreen}
      options={({ navigation }) => ({
        tabBarButton: () => (
          <NewListingButton
            onPress={() => navigation.navigate(routes.LISTING_EDIT)}
          />
        ),
      })}
    />
    <Tab.Screen
      name="AccountTab"
      component={AccountNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
        tabBarLabel: "Account",
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
