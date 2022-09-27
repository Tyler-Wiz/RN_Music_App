import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const RenderPlayList = ({ playlist, data }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.wrapper}
      onPress={() => {
        navigation.navigate("PlaylistSongs", {
          data: data,
          name: playlist.name,
          img: playlist.imageUrl,
        });
      }}>
      <Image source={playlist.imageUrl} style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.track}>{playlist.name}</Text>
        <Text style={styles.artists}>{playlist.artists}</Text>
        <Text style={styles.updated}>Updated - {playlist.updated}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 7,
  },
  image: { width: 70, height: 70, marginRight: 15, borderRadius: 5 },
  container: {
    borderBottomWidth: 0.3,
    borderBottomColor: "white",
    paddingVertical: 5,
    width: "70%",
  },
  track: {
    color: "white",
    fontSize: 14,
    fontFamily: "Poppins600",
    textTransform: "capitalize",
  },
  artists: {
    color: "white",
    fontSize: 12,
    fontFamily: "Poppins400",
    textTransform: "capitalize",
    marginVertical: 3,
  },
  updated: {
    color: "white",
    fontSize: 11,
    fontFamily: "Poppins400",
    textTransform: "capitalize",
  },
});
