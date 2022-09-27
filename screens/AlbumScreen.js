import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { getAlbumSongs } from "../firebase/firebase-config";
import { useState, useEffect } from "react";
import { TrackNavigation } from "../modules/common/TrackNavigation";

const AlbumScreen = ({ route, navigation }) => {
  const [lyrics, setLyrics] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const itemId = route.params.itemId;
  const featuredImg = route.params.featuredImg;
  const albumName = route.params.albumName;
  const artistName = route.params.artistName;

  const getEachLyrics = async () => {
    setIsLoading(true);
    const lyrics = await getAlbumSongs(itemId);
    let completeLyrics = [];
    lyrics.forEach((lyrics) => {
      completeLyrics.push({ id: lyrics.id, ...lyrics.data() });
    });
    setLyrics([...completeLyrics]);
    setIsLoading(false);
  };

  useEffect(() => {
    getEachLyrics();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.container}>
          <TrackNavigation />
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: featuredImg }}
              style={styles.featuredArtwork}
            />
            <Text style={styles.album}>{albumName}</Text>
            <Text style={styles.artist}>{artistName}</Text>
          </View>
          {lyrics.map((item, i) => (
            <View key={i}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Track", {
                    itemId: item.artistName,
                    youtubeId: item[0].youtube,
                    lyrics: item[0].lyrics,
                  });
                }}
                style={styles.wrapper}>
                <View style={styles.trackInfo}>
                  <View>
                    <Text style={styles.artist}>{item[0].trackName}</Text>
                  </View>
                </View>
                <View style={styles.viewCount}>
                  <Feather name="more-horizontal" size={24} color="white" />
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AlbumScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "black",
  },
  container: {
    padding: 15,
  },
  imageContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  wrapper: {
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: "grey",
    padding: 5,
  },
  featuredArtwork: {
    width: 250,
    height: 250,
  },
  trackInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  album: {
    color: "white",
    fontSize: 17,
    fontFamily: "Poppins500",
    marginVertical: 5,
  },
  artist: {
    color: "white",
    fontSize: 14,
    fontFamily: "Poppins500",
    textTransform: "uppercase",
    margin: 0,
  },
  track: {
    color: "white",
    fontSize: 11,
    fontFamily: "Poppins300",
  },
});
