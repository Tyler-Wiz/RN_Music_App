import { StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

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
          color="white"
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
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
  },
  title: {
    color: "white",
    fontSize: 20,
    fontFamily: "Poppins600",
    textTransform: "capitalize",
    marginRight: 10,
  },
});
