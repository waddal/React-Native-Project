import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import WelcomeScreen from "../screens/WelcomeScreen";

const AuthNavigator = () => {
  const Auth = createNativeStackNavigator();
  const AuthNav = () => (
    <Auth.Navigator>
      <Auth.Screen name="Welcome" component={WelcomeScreen} />
      <Auth.Screen name="Login" component={LoginScreen} />
      <Auth.Screen name="Register" component={RegisterScreen} />
    </Auth.Navigator>
  );

  return (
    <NavigationContainer>
      <AuthNav />
    </NavigationContainer>
  );
};

export default AuthNavigator;
