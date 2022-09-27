import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useContext } from "react";
import { SongContext } from "../store/Song-Context";

export const BookmarkScreen = ({ navigation, route }) => {
  //Track params//
  const artist = route.params.artist;
  const track = route.params.track;
  const image = route.params.image;
  const lyrics = route.params.lyrics;
  const youtubeId = route.params.youtubeId;
  const id = route.params.itemId;
  const bookmarkedId = route.params.bookmarkedId;

  // Context //
  const songCtx = useContext(SongContext);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.trackInfo}>
          <Image source={{ uri: image }} style={styles.artwork} />
          <View>
            {artist ? <Text style={styles.artist}>{artist}</Text> : null}
            {track ? <Text style={styles.track}>{track}</Text> : null}
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Ionicons name="ios-close-outline" size={30} color="white" />
          </TouchableOpacity>
        </View>
        {bookmarkedId === id ? null : (
          <TouchableOpacity
            style={styles.bookmarkText}
            onPress={() => {
              songCtx.BookMarkSongs(
                artist,
                track,
                image,
                lyrics,
                youtubeId,
                id
              );
              songCtx.setIsVisible(true);
              navigation.goBack();
            }}>
            <MaterialIcons name="queue-music" size={24} color="white" />
            <Text style={styles.add}>Add Song to Library</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={styles.bookmarkText}
          onPress={() => {
            navigation.goBack();
          }}>
          <MaterialIcons name="library-music" size={24} color="white" />
          <Text style={styles.add}>Add Artist to Library</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bookmarkText}
          onPress={() => {
            navigation.goBack();
          }}>
          <Ionicons name="md-heart-outline" size={24} color="white" />
          <Text style={styles.add}>Love</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  wrapper: {
    height: "40%",
    width: "100%",
    backgroundColor: "#000",
  },
  trackInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: "white",
    borderBottomWidth: 0.2,
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  artwork: {
    width: 35,
    height: 35,
    marginRight: 10,
  },
  artist: {
    color: "white",
    fontSize: 15,
    fontFamily: "Poppins500",
    textAlign: "center",
  },
  track: {
    color: "white",
    fontSize: 11,
    fontFamily: "Poppins400",
    textAlign: "center",
  },
  add: {
    color: "white",
    fontSize: 12,
    fontFamily: "Poppins500",
    marginLeft: 15,
  },
  bookmarkText: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 13,
    paddingHorizontal: 25,
  },
});
