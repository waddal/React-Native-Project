import {
  Dimensions,
  StyleSheet,
  SafeAreaView,
  View,
  Platform,
  StatusBar,
} from "react-native";
import { useDeviceOrientation, useDimensions } from '@react-native-community/hooks';

export default function App() {
  // set 'orientation' to 'default' in app.json to enable portrait/landscape views
  // console.log('Determine screen/window size', Dimensions.get("screen"));
  // console.log(useDimensions());
  // console.log(useDeviceOrientation());
  const { landscape } = useDeviceOrientation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ 
        backgroundColor: "dodgerblue", 
        width: "100%", 
        height: landscape ? "100%" : "30%"
         }}></View>
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: "orange" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
