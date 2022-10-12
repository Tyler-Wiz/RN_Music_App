import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { GlobalStyles } from "../../constants/color";

export const TrackNavigation = ({ setIsVisible, track }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <MaterialIcons
        name="arrow-back-ios"
        size={20}
        color="white"
        style={styles.icon}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Text style={styles.title}>{track}</Text>
      <Pressable
        onPress={() => {
          setIsVisible(true);
        }}>
        <View style={styles.viewCount}>
          <Feather
            name="more-horizontal"
            size={20}
            color={GlobalStyles.colors.primaryText}
          />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
  },
  title: {
    color: "white",
    fontSize: 13,
    fontFamily: "Poppins600",
  },
  viewCount: {
    width: 28,
    height: 28,
    backgroundColor: GlobalStyles.colors.secondaryText,
    borderRadius: 28 / 2,
    justifyContent: "center",
    alignItems: "center",
  },
});
