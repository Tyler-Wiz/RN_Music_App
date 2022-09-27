import { StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import { TrackNavigation } from "../modules/common/TrackNavigation";
import RenderLyrics from "../components/RenderLyrics";
import YoutubePlayer from "react-native-youtube-iframe";
import { LogBox } from "react-native";
LogBox.ignoreLogs(["Warning: ..."]);
LogBox.ignoreAllLogs();
import { FeedBack } from "../modules/common/FeedBack";
import { useContext, useState, useEffect } from "react";
import { SongContext } from "../store/Song-Context";

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
  }, []);

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
        <YoutubePlayer height={210} play={false} videoId={youtubeId} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.lyricsContainer}>
          <RenderLyrics lyrics={lyrics} />
        </ScrollView>
      </View>
      <FeedBack />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "black",
  },
  container: {
    padding: 15,
    flex: 1,
  },
  lyricsContainer: {
    marginVertical: 5,
  },
});