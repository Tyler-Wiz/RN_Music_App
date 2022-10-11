import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export const NavWithSearch = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Ionicons
        name="chevron-back"
        size={24}
        color="white"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Ionicons
        name="ios-search-outline"
        size={24}
        color="white"
        onPress={() => {
          navigation.navigate("search");
        }}
        style={styles.search}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 45,
    marginTop: 20,
  },
  search: { marginRight: 10 },
});
