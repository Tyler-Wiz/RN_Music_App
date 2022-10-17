import { StyleSheet, Platform, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export const SearchNavigation = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.icon}>
      <Ionicons
        name="chevron-back"
        size={24}
        color="white"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Ionicons
        name="search-outline"
        size={24}
        color="white"
        onPress={() => {
          navigation.navigate("search");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginVertical: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: Platform.OS === "ios" ? 0 : 30,
  },
});
