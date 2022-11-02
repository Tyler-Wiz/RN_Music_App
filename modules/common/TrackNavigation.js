import { StyleSheet, Text, View, Pressable, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { GlobalStyles } from "../../constants/color";

export const TrackNavigation = ({ setIsVisible, track }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          navigation.goBack();
        }}>
        <MaterialIcons
          name="keyboard-arrow-down"
          size={30}
          color={GlobalStyles.colors.iconColor}
          style={styles.icon}
        />
      </Pressable>
      <Text style={styles.title}>{track}</Text>
      <Pressable
        onPress={() => {
          setIsVisible(true);
        }}>
        <View style={styles.viewCount}>
          <Feather
            name="more-horizontal"
            size={20}
            color={GlobalStyles.colors.iconColor}
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
    marginTop: Platform.OS === "ios" ? 0 : 20,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
  },
  title: {
    color: GlobalStyles.colors.primaryText,
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
