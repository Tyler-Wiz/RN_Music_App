import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { GlobalStyles } from "../../constants/color";

export const TrackNavigation = ({
  youtubeId,
  lyrics,
  artist,
  track,
  image,
  itemId,
  bookmarkedId,
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <MaterialIcons
        name="keyboard-arrow-down"
        size={30}
        color="white"
        style={styles.icon}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Text style={styles.title}>{track}</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("book", {
            artist: artist,
            track: track,
            youtubeId: youtubeId,
            lyrics: lyrics,
            image: image,
            itemId: itemId,
            bookmarkedId: bookmarkedId,
          });
        }}>
        <View style={styles.viewCount}>
          <Feather
            name="more-horizontal"
            size={24}
            color={GlobalStyles.colors.secondaryText}
          />
        </View>
      </TouchableOpacity>
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
});
