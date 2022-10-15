import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { allSongsConfig } from "../modules/hooks/allSongs-config";
import { ImgConfig } from "../modules/hooks/Img-Config";
import { AlbumConfig } from "../components/Albums/AlbumConfig";
import { GlobalStyles } from "../constants/color";
import { MaterialIcons } from "@expo/vector-icons";
import { RenderSongs } from "../components/RenderSongs";
import { RenderAlbums } from "../components/RenderAlbums";

export const ArtistScreen = ({ route, navigation }) => {
  // Data from Firebase //
  const [allSongs, isLoading] = allSongsConfig();
  const [albums] = AlbumConfig();
  const [allImgs] = ImgConfig();
  // Props from userArtist//
  const artist = route.params.artist;
  // filtered data from Artiist //
  const data = allSongs.filter((track) => {
    if (track.artistName.includes(artist)) {
      return track;
    }
  });
  // filtered first 6 data from Artiist //
  const popularData = data.slice(0, 6);
  // Grab artist Image and filter //
  const image = allImgs.filter((img) => {
    if (img.name.includes(artist)) {
      return img;
    }
  });
  // Grab artist album and filter //
  const featuredAlbums = albums.filter((album) => {
    if (album[0].artistName.includes(artist)) {
      return album[0];
    }
  });

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.container}>
          <Pressable
            onPress={() => {
              navigation.navigate("home");
            }}>
            <MaterialIcons
              name="arrow-back-ios"
              size={18}
              color="white"
              style={styles.icon}
            />
          </Pressable>
          {image &&
            image.map((item, i) => (
              <View key={i} style={styles.imgContainer}>
                <Image source={{ uri: item.url }} style={styles.image} />
              </View>
            ))}
          <Text style={styles.artistName}>{artist}</Text>
          <View style={styles.descContainer}>
            <Text style={styles.description}>Popular Songs</Text>
            <Pressable
              onPress={() => {
                navigation.navigate("songs", {
                  data: data,
                });
              }}>
              <Text style={styles.viewMore}>View all</Text>
            </Pressable>
          </View>
          {popularData &&
            popularData.map((item, i) => (
              <View key={i}>
                <RenderSongs item={item} />
              </View>
            ))}
        </View>
        <ActivityIndicator size="small" animating={isLoading} color="grey" />
        <View style={styles.albumsWrapper}>
          {featuredAlbums.length === 0 ? null : (
            <Text style={styles.description}>Albums</Text>
          )}
          <ScrollView horizontal>
            {featuredAlbums &&
              featuredAlbums.map((item, i) => (
                <View key={i}>
                  <RenderAlbums item={item} />
                </View>
              ))}
          </ScrollView>
        </View>
      </ScrollView>
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
    marginTop: 20,
    flex: 1,
  },
  artistName: {
    color: GlobalStyles.colors.primaryText,
    fontSize: 20,
    fontFamily: "Poppins600",
    marginRight: 10,
    textAlign: "center",
    marginBottom: 30,
  },
  imgContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    marginVertical: 10,
  },
  descContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  viewMore: {
    color: GlobalStyles.colors.accentPrimary,
    fontSize: 14,
    fontFamily: "Poppins600",
  },
  albumsWrapper: {
    marginHorizontal: 10,
    marginVertical: 20,
  },
  description: {
    color: GlobalStyles.colors.primaryText,
    fontSize: 17,
    fontFamily: "Poppins600",
  },
});
