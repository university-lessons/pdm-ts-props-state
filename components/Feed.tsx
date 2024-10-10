import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import Post from "./Post/Post";

export default function Feed() {
  return (
    <ScrollView>
      <Text style={styles.title}>PDM Social Network</Text>

      <Post author="Fulano" photo="yellow" />

      <Post author="Ciclano" photo="orange" />

      <Post author="Beltrano" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
});
