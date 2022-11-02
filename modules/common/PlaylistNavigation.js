import { StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { GlobalStyles } from "../../constants/color";

export const PlaylistNavigation = ({ name }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          navigation.goBack();
        }}>
        <MaterialIcons
          name="arrow-back-ios"
          size={18}
          color={GlobalStyles.colors.primaryText}
          style={styles.icon}
        />
      </Pressable>
      <Text style={styles.title}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  icon: {
    marginRight: 10,
  },
  title: {
    color: GlobalStyles.colors.primaryText,
    fontSize: 14,
    fontFamily: "Poppins700",
    textTransform: "capitalize",
    marginRight: 10,
  },
});
