import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
} from "react-native";

export default function App() {
  let blur = 10;
  let x = "Jessie is WONDERFUL! 😍";

  const handlePress = () => {
    blur--;
    console.log("blur: ", blur);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={0} onPress={handlePress}>
        {x}
      </Text>
      {/* <Image source={require('./assets/icon.png')} /> */}
      <TouchableNativeFeedback onPress={() => console.log('touch! i emember touch.')}>
        {/* <Image
          blurRadius={blur}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        /> */}
        <View style={{ width: 200, height: 70, backgroundColor: "dodgerblue" }}></View>
      </TouchableNativeFeedback>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
