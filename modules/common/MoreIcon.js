import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export const MoreIcon = ({
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
        <Feather name="more-horizontal" size={24} color="white" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  viewCount: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
});
