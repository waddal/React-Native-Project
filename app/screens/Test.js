// import React from "react";
// import { StyleSheet, Image, View } from "react-native";
// import * as Yup from "yup";

// import Screen from "../components/Screen";
// import AppFormField from "../components/forms/AppFormField";
// import SubmitButton from "../components/SubmitButton";
// import AppForm from "../components/forms/AppForm";

// const validationSchema = Yup.object().shape({
//   email: Yup.string().required().email().label("Email"),
//   password: Yup.string().required().min(4).label("Password"),
// });

// function Test() {
//   return (
//     <Screen>
//       <View style={styles.container}>
//         <Image style={styles.logo} source={require("../assets/logo-red.png")} />

//         <AppForm
//           initialValues={{ email: "", password: "" }}
//           onSubmit={(values) => console.log(values)}
//           validationSchema={validationSchema}
//         >
//           <AppFormField
//             autoCapitalize={"none"}
//             autoCorrect={false}
//             icon={"account-outline"}
//             keyboardType={"email-address"}
//             name={"email"}
//             placeholder={"Email"}
//             textContentType={"emailAddress"}
//           />
//           <AppFormField
//             autoCapitalize={"none"}
//             autoCorrect={false}
//             icon={"lock-outline"}
//             name={"password"}
//             placeholder={"Password"}
//             secureTextEntry
//             textContentType={"password"}
//             ellipsizeMode="end"
//           />
//           <SubmitButton title="Login" />
//         </AppForm>
//       </View>
//     </Screen>
//   );
// }

// export default Test;

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//   },
//   logo: {
//     width: 80,
//     height: 80,
//     alignSelf: "center",
//     marginTop: 50,
//     marginBottom: 20,
//   },
// });

// /* REACT-FORM-HOOKS
// import React from "react";
// import { StyleSheet, Image, View } from "react-native";
// import { useForm } from "react-hook-form";

// import { AppButton } from "../components/AppButton";
// import AppTextInput from "../components/AppTextInput";
// import Screen from "../components/Screen";

// function LoginScreen() {
//   const { register, setValue, handleSubmit, errors } = useForm();

//   const onSubmit = (data) => console.log("Login: ", data);

//   return (
//     <Screen>
//       <View style={styles.container}>
//         <Image style={styles.logo} source={require("../assets/logo-red.png")} />
//         <AppTextInput
//           autoCapitalize={"none"}
//           autoCorrect={false}
//           icon={"account-outline"}
//           keyboardType={"email-address"}
//           onChangeText={(text) => setValue("username", text, true)}
//           placeholder={"Username"}
//           textContentType={"emailAddress"} //iOS only
//           register={{ ...register("username") }}
//         />
//         <AppTextInput
//           autoCapitalize={"none"}
//           autoCorrect={false}
//           icon={"lock-outline"}
//           onChangeText={(text) => setValue("password", text)}
//           placeholder={"Password"}
//           secureTextEntry //defaults to true
//           textContentType={"password"}
//           register={{ ...register("username") }}
//         />
//         <AppButton title="Login" handleOnPress={handleSubmit(onSubmit)} />
//       </View>
//     </Screen>
//   );
// }

// export default LoginScreen;
// */

// import React, { useEffect, useState } from "react";
// import * as ImagePicker from "expo-image-picker";
// import * as Permissions from "expo-permissions";
// import { StyleSheet, Image, Button } from "react-native";

// import Screen from "../components/Screen";
// import ImageInputList from "../components/ImageInputList";

// function Test() {
//   const [imageUris, setImageUris] = useState([]);

//   const handleAdd = (uri) => {
//     setImageUris([...imageUris, uri]);
//   };

//   const handleRemove = (uri) => {
//     setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
//   };

//   return (
//     <Screen>
//       <ImageInputList
//         imageUris={imageUris}
//         onAddImage={handleAdd}
//         onRemoveImage={handleRemove}
//       />
//     </Screen>
//   );
// }

// export default Test;

// const styles = StyleSheet.create({
//   container: {},
// });

// REACT NAVIGATION
// REACT NAVIGATION

import React from "react";
import { Text, Button } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "../components/Screen";

// const Link = () => {
//   //alternate way to access navigation if not Screen
//   const navigation = useNavigation();

//   return (
//     <Button title="View Tweets" onPress={() => navigation.navigate("TweetDetails")} />
//   );
// };

const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweets</Text>
    {/* <Button
      title="View Tweet"
      onPress={() => navigation.navigate("TweetDetails", { id: 1 })}
    /> */}
  </Screen>
);

const TweetDetails = ({ route }) => (
  //useRoute() if not Screen component
  <Screen>
    <Text>Tweet Details {route.params.id}</Text>
  </Screen>
);

const Account = () => (
  <Screen>
    <Text>Account!</Text>
  </Screen>
);

export default function Test() {
  const Stack = createNativeStackNavigator();
  const StackNavigator = () => {
    return (
      <Stack.Navigator
        // screenOptions={{
        //   headerStyle: { backgroundColor: "tomato" },
        //   headerTintColor: "white",
        // }}
      >
        <Stack.Screen name="Tweets" component={Tweets} />
        <Stack.Screen name="TweetDetails" component={TweetDetails} />
      </Stack.Navigator>
    );
  };

  const Tab = createBottomTabNavigator();
  const TabNavigator = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "white",
          tabBarActiveBackgroundColor: "grey",
          tabBarInactiveTintColor: "plum",
          tabBarInactiveBackgroundColor: "white",
          // tabBarShowLabel: false,
          // tabBarStyle: {
          //   // paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          //   // height: 99
          //   backgroundColor: "tomato",
          // },
        }}
      >
        <Tab.Screen
          name="Feed"
          component={StackNavigator}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={Account}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
