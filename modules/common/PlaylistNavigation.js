import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { useContext, useState } from "react";
import { SongContext } from "../../store/Song-Context";
import { GlobalStyles } from "../../constants/color";

export const PlaylistNavigation = ({ name, bookmarkedId }) => {
  const [loved, setLoved] = useState(false);

  const navigation = useNavigation();
  const songCtx = useContext(SongContext);

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
  artists: {
    color: "white",
    fontSize: 16,
    fontFamily: "Poppins600",
    textTransform: "capitalize",
    marginVertical: 3,
  },
});
