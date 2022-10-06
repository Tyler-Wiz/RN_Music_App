import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Description } from "../../../modules/common/Description";
import { GlobalStyles } from "../../../constants/color";
import { allSongsConfig } from "../../../modules/hooks/allSongs-config";

export const Recommended = () => {
  const [allSongs, isLoading] = allSongsConfig();
  const navigation = useNavigation();

  const Recommended = allSongs.filter((track) => {
    if (track.category.includes("Recommended")) {
      return track;
    }
  });

  return (
    <View>
      <Description title="Recommended For You" margin={14} />
      <ScrollView horizontal>
        {Recommended.map((item, i) => (
          <View key={i} style={styles.container}>
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
              <Image source={{ uri: item.artwork }} style={styles.artwork} />
              <Text style={styles.track}>{item.trackName}</Text>
              <Text style={styles.artist}>{item.artistName}</Text>
            </Pressable>
          </View>
        ))}
      </ScrollView>
      <ActivityIndicator size="small" animating={isLoading} color="grey" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
    marginVertical: 10,
  },
  description: {
    color: "white",
    fontSize: 18,
    fontFamily: "Poppins500",
    marginVertical: 10,
    marginHorizontal: 10,
  },
  track: {
    color: GlobalStyles.colors.primaryText,
    fontSize: 13,
    fontFamily: "Poppins600",
    maxWidth: "90%",
  },
  artwork: {
    width: 140,
    height: 140,
    marginBottom: 10,
    borderRadius: 5,
  },
  artist: {
    color: GlobalStyles.colors.secondaryText,
    fontSize: 11,
    fontFamily: "Poppins600",
  },
});
