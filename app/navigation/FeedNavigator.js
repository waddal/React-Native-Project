import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListingsScreen from '../screens/ListingsScreen';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';
import ListingEditScreen from '../screens/ListingEditScreen';


const Stack = createNativeStackNavigator();

const FeedNavigator = () => {
    <Stack.Navigator>
        <Stack.Screen name={"Listings"} component={ListingsScreen}/> 
        <Stack.Screen name={"ListingEdit"} component={ListingEditScreen}/> 
        <Stack.Screen name={"ListingDetails"} component={ListingDetailsScreen}/> 
    </Stack.Navigator>
}