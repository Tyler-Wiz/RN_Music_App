import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import { useContext, useState, useEffect } from "react";
import { SongContext } from "../../store/Song-Context";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export const RenderBookmarkContent = ({
  artist,
  track,
  image,
  lyrics,
  youtubeId,
  id,
  bookmarkedId,
  setIsVisible,
}) => {
  const songCtx = useContext(SongContext);
  const navigation = useNavigation();

  const [date, setDate] = useState(null);
  let today = new Date();
  let now =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  useEffect(() => {
    setDate(now);
  }, [now]);

  const AddToFavorite = () => {
    songCtx.BookMarkSongs(artist, track, image, lyrics, youtubeId, id, date);
    setIsVisible(false);
  };

  return (
    <View>
      <View style={styles.trackInfo}>
        <Image source={{ uri: image }} style={styles.artwork} />
        <View style={styles.trackInfoSecondary}>
          {track ? <Text style={styles.track}>{track} - </Text> : null}
          {artist ? <Text style={styles.artist}>{artist} </Text> : null}
        </View>
        <Pressable
          onPress={() => {
            setIsVisible(false);
          }}>
          <Ionicons name="ios-close-outline" size={35} color="black" />
        </Pressable>
      </View>
      {bookmarkedId === id ? (
        <Pressable
          style={styles.bookmarkText}
          onPress={() => {
            songCtx.removedModal();
            songCtx.removeSong();
            setIsVisible(false);
          }}>
          <Ionicons name="md-heart-outline" size={24} color="black" />
          <Text style={styles.add}>Remove to favorites</Text>
        </Pressable>
      ) : (
        <Pressable
          style={styles.bookmarkText}
          onPress={() => {
            songCtx.AddedModal();
            AddToFavorite();
          }}>
          <Ionicons name="md-heart-outline" size={24} color="black" />
          <Text style={styles.add}>Add to favorites</Text>
        </Pressable>
      )}
      <Pressable
        style={styles.bookmarkText}
        onPress={() => {
          navigation.navigate("artist", {
            artist: artist,
          });
          setIsVisible(false);
        }}>
        <MaterialCommunityIcons
          name="account-music-outline"
          size={24}
          color="black"
        />
        <Text style={styles.add}>Go to Artist</Text>
      </Pressable>
      <Pressable style={styles.bookmarkText} onPress={() => {}}>
        <Ionicons name="md-heart-outline" size={24} color="black" />
        <Text style={styles.add}>Love</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  trackInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  trackInfoSecondary: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  artwork: {
    width: 45,
    height: 45,
  },
  track: {
    color: "black",
    fontSize: 11,
    fontFamily: "Poppins500",
    textAlign: "center",
  },
  artist: {
    color: "black",
    fontSize: 11,
    fontFamily: "Poppins400",
    textAlign: "center",
  },
  add: {
    color: "black",
    fontSize: 14,
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
