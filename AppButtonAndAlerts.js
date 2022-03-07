import { StyleSheet, SafeAreaView, Button, Alert, Platform, StatusBar } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title={"Click Me"}
        color={"black"}
        // onPress={() =>
        //   Alert.alert("My Title", "My Message", [
        //     { text: "Yes", onPress: () => console.log('Yes!')},
        //     { text: "No", onPress: () => console.log('No!!') },
        //   ])
        // }
        //iOS only - Alert.prompt
        onPress={() => {
          Alert.prompt("My Title", "My Message", (text) => console.log(`${text}\n`));
        }}
      />
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: "orange" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // justifyContent: "center",
    // alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
});
