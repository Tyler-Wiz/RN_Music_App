import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  Image,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Description } from "../../../modules/common/Description";
import { GlobalStyles } from "../../../constants/color";
import { allSongsConfig } from "../../../modules/hooks/allSongs-config";
import { Ionicons } from "@expo/vector-icons";

export const TrendingSongs = ({ active }) => {
  //All Songs From Firebase //
  const [allSongs, isLoading] = allSongsConfig(active);
  // Navigation //
  const navigation = useNavigation();
  //filtered Trending Songs //
  const trending = allSongs.filter((track) => {
    if (track.tag.includes("trending")) {
      return track;
    }
  });

  // Rendering List to flatlist//
  const renderList = ({ item }) => {
    return (
      <View style={styles.trackContainer}>
        <Pressable
          onPress={() => {
            navigation.navigate("Track", {
              artist: item.artistName,
              track: item.trackName,
              youtubeId: item.youtube,
              itemId: item.id,
              lyrics: item.lyrics,
              image: item.artwork,
            });
          }}>
          <View style={styles.trackInfoContainer}>
            <View style={styles.singleTrackContainer}>
              <Image source={{ uri: item.artwork }} style={styles.artwork} />
              <View>
                <Text style={styles.track}>{item.trackName}</Text>
                <Text style={styles.artist}>{item.artistName}</Text>
              </View>
            </View>
          </View>
        </Pressable>
      </View>
    );
  };

  return (
    <View>
      <View style={styles.descContainer}>
        <Description title="Trending" size={15} margin={10} />
        <View style={styles.trendingIcon}>
          <Ionicons name="trending-up-sharp" size={25} color="red" />
        </View>
      </View>
      <ScrollView horizontal>
        <FlatList
          data={trending}
          renderItem={renderList}
          keyExtractor={(item) => item.id}
          numColumns={2}
          alwaysBounceVertical={false}
        />
      </ScrollView>
      <ActivityIndicator size="small" animating={isLoading} color="grey" />
    </View>
  );
};

const styles = StyleSheet.create({
  descContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  trendingIcon: {
    marginRight: 10,
  },
  trackContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 250,
    marginVertical: 5,
  },
  trackInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 10,
  },
  singleTrackContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  track: {
    color: GlobalStyles.colors.primaryText,
    fontSize: 12,
    fontFamily: "Poppins600",
    marginRight: 10,
    textTransform: "capitalize",
  },
  artwork: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 5,
  },
  artist: {
    color: GlobalStyles.colors.secondaryText,
    fontSize: 11,
    fontFamily: "Poppins600",
    marginRight: 10,
    textTransform: "capitalize",
  },
  icon: {
    marginRight: 5,
  },
});
