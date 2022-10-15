import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Modal,
} from "react-native";
import { TrackNavigation } from "../modules/common/TrackNavigation";
import RenderLyrics from "../components/RenderLyrics";
import YoutubePlayer from "react-native-youtube-iframe";
import { LogBox } from "react-native";
LogBox.ignoreLogs(["Warning: ..."]);
LogBox.ignoreAllLogs();
import { useContext, useState, useEffect } from "react";
import { SongContext } from "../store/Song-Context";
import { RenderBookmarkContent } from "../components/Bookmark/RenderBookmarkContent";
import { FeedBack } from "../modules/common/Feedback";

export const TrackScreen = ({ route }) => {
  //Track params//
  const youtubeId = route.params.youtubeId;
  const lyrics = route.params.lyrics;
  const artist = route.params.artist;
  const track = route.params.track;
  const image = route.params.image;
  const itemId = route.params.itemId;

  const songCtx = useContext(SongContext);
  const [isvisible, setIsVisible] = useState(false);
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
        <TrackNavigation setIsVisible={setIsVisible} track={track} />
        <YoutubePlayer height={200} play={false} videoId={youtubeId} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.lyricsContainer}>
          <RenderLyrics lyrics={lyrics} />
        </ScrollView>
        <Modal animationType="slide" transparent visible={isvisible}>
          <View style={styles.modalContainer}>
            <View style={styles.modalWrapper}>
              <RenderBookmarkContent
                youtubeId={youtubeId}
                lyrics={lyrics}
                artist={artist}
                track={track}
                image={image}
                id={itemId}
                bookmarkedId={bookmarkedId}
                setIsVisible={setIsVisible}
              />
            </View>
          </View>
        </Modal>
        {/* <FeedBack /> */}
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
  modalContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  modalWrapper: {
    height: "40%",
    width: "100%",
    backgroundColor: "#f5f5f5",
    borderRadius: 15,
  },
});
