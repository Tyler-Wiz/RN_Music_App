import {
  StyleSheet,
  Text,
  ActivityIndicator,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import { NavWithSearch } from "../modules/common/NavWithSearch";
import { GlobalStyles } from "../constants/color";
import { AlbumLyricsConfig } from "../components/Albums/AlbumLyrics-config";

const AlbumScreen = ({ route, navigation }) => {
  const itemId = route.params.itemId;
  const featuredImg = route.params.featuredImg;
  const albumName = route.params.albumName;
  const artistName = route.params.artistName;
  const [lyrics, isLoading] = AlbumLyricsConfig(itemId);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.container}>
          <NavWithSearch />
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: featuredImg }}
              style={styles.featuredArtwork}
            />
            <View>
              <Text style={styles.albumCount}>{lyrics.length} Tracks </Text>
              <Text style={styles.album}>{albumName}</Text>
              <Text style={styles.artist}>{artistName}</Text>
            </View>
          </View>
          {lyrics.map((item, i) => {
            let number = i + 1;
            return (
              <View key={i}>
                <Pressable
                  onPress={() => {
                    navigation.navigate("Track", {
                      itemId: item.artistName,
                      youtubeId: item[0].youtube,
                      lyrics: item[0].lyrics,
                    });
                  }}
                  style={styles.wrapper}>
                  <View style={styles.trackInfo}>
                    <View style={styles.trackInfo}>
                      <View>
                        <Text style={styles.number}>{number}</Text>
                      </View>
                      <View>
                        <Text style={styles.track}>{item[0].trackName}</Text>
                        <Text style={styles.artist}>{artistName}</Text>
                      </View>
                    </View>
                  </View>
                  <View>
                    <Text style={styles.duration}>{item[0].duration}</Text>
                  </View>
                </Pressable>
              </View>
            );
          })}
        </View>
      </ScrollView>
      <ActivityIndicator size="small" animating={isLoading} color="grey" />
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
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  wrapper: {
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
  },
  featuredArtwork: {
    width: 140,
    height: 140,
    marginRight: 15,
  },
  number: {
    color: GlobalStyles.colors.primaryText,
    fontSize: 14,
    fontFamily: "Poppins500",
    textTransform: "capitalize",
    marginHorizontal: 5,
    width: 20,
  },
  trackInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 2,
  },
  album: {
    color: "white",
    fontSize: 16,
    fontFamily: "Poppins600",
    marginVertical: 3,
  },
  track: {
    color: GlobalStyles.colors.primaryText,
    fontSize: 13,
    fontFamily: "Poppins500",
    textTransform: "capitalize",
  },
  artist: {
    color: GlobalStyles.colors.secondaryText,
    fontSize: 11,
    fontFamily: "Poppins600",
    textTransform: "capitalize",
  },
  duration: {
    color: GlobalStyles.colors.secondaryText,
    fontSize: 14,
    fontFamily: "Poppins600",
    textTransform: "capitalize",
  },
  albumCount: {
    color: GlobalStyles.colors.secondaryText,
    fontSize: 15,
    fontFamily: "Poppins600",
    textTransform: "uppercase",
  },
});
