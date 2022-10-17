import { StyleSheet, Text, View, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { GlobalStyles } from "../../constants/color";

export const NavWithSearch = ({
  description,
  setIsVisible,
  isVisible,
  animatedSearch,
}) => {
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
      <Text style={styles.description}>{description}</Text>
      <Ionicons
        name="ios-search-outline"
        size={24}
        color="white"
        onPress={() => {
          setIsVisible(!isVisible);
          animatedSearch();
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
    paddingVertical: 15,
    marginVertical: Platform.OS === "ios" ? 0 : 30,
  },
  search: { marginRight: 10 },
  description: {
    color: GlobalStyles.colors.accentPrimary,
    fontSize: 15,
    fontFamily: "Poppins600",
  },
});
