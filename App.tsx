import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Post from "./src/components/Post";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>PDM Social Network</Text>
      <StatusBar style="auto" />

      <Post author="Fulano" title="Happy Birthday" content="Bla bla bla" />
      <Post
        author="Cilano"
        title="Sell my Car"
        content="Bla bla bla $4000"
        likes={55}
      />
      <Post
        author="Beltrano"
        title="Looking for a Car"
        content="Bla bla bla 2"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
