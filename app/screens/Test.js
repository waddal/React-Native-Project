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

import React, { useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { StyleSheet } from 'react-native';

import Screen from '../components/Screen';

function Test() {
    const requestPermission = async () => {
        Permissions.askAsync(Permissions.CAMERA, Permissions.LOCATION_FOREGROUND)
        const { granted } = await ImagePicker.requestCameraPermissionsAsync();
        if(!granted) alert("You need to grant permission to access library.")
    }

    useEffect(() => {
        requestPermission()
    }, [])

    return (
        <Screen></Screen>
    );
}

export default Test;

const styles = StyleSheet.create({
    container: {},
})