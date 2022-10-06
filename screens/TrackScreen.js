import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Modal,
  Pressable,
  Text,
} from "react-native";
import { TrackNavigation } from "../modules/common/TrackNavigation";
import RenderLyrics from "../components/RenderLyrics";
import YoutubePlayer from "react-native-youtube-iframe";
import { LogBox } from "react-native";
LogBox.ignoreLogs(["Warning: ..."]);
LogBox.ignoreAllLogs();
import { useContext, useState, useEffect } from "react";
import { SongContext } from "../store/Song-Context";
import { FeedBack } from "../modules/common/Feedback";

export const TrackScreen = ({ route }) => {
  //Track params//
  const youtubeId = route.params.youtubeId;
  const lyrics = route.params.lyrics;
  const artist = route.params.artist;
  const track = route.params.track;
  const image = route.params.image;
  const itemId = route.params.itemId;

  // Context //
  const songCtx = useContext(SongContext);

  // Get Id Of Current Music //
  const [bookmarkedId, setBookmarkedId] = useState("");

  const checkId = (id) => {
    songCtx.markSongs.map((item) => {
      if (item.id === id) {
        setBookmarkedId(id);
      }
    });
  };

  useEffect(() => {
    checkId(itemId);
  }, [songCtx.markSongs]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TrackNavigation
          youtubeId={youtubeId}
          lyrics={lyrics}
          artist={artist}
          track={track}
          image={image}
          itemId={itemId}
          bookmarkedId={bookmarkedId}
        />
        <YoutubePlayer height={200} play={false} videoId={youtubeId} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.lyricsContainer}>
          <RenderLyrics lyrics={lyrics} />
        </ScrollView>
        <FeedBack />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "black",
  },
  container: {
    paddingHorizontal: 15,
    marginTop: 25,
    flex: 1,
  },
  lyricsContainer: {
    marginVertical: 5,
  },
  track: {
    color: "white",
    fontSize: 13,
    fontFamily: "Poppins600",
  },
});
