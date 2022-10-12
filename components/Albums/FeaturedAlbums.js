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
import { AlbumConfig } from "./AlbumConfig";
import { Description } from "../../modules/common/Description";
import { GlobalStyles } from "../../constants/color";

export const FeaturedAlbums = () => {
  const [albums, isLoading] = AlbumConfig();

  const featuredAlbums = albums.filter((album) => {
    if (album[0].tag.includes("featured")) {
      return album[0];
    }
  });

  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.seeMoreContainer}>
        <Description title="New Albums" size={15} margin={15} />
        <Pressable
          onPress={() => {
            navigation.navigate("playlist");
          }}>
          <Text style={styles.seeMore}>See More</Text>
        </Pressable>
      </View>
      <ScrollView horizontal>
        {featuredAlbums.map((item, i) => (
          <View key={i} style={styles.container}>
            <Pressable
              onPress={() => {
                navigation.navigate("Album", {
                  itemId: item.id,
                  featuredImg: item[0].artwork,
                  albumName: item[0].AlbumName,
                  artistName: item[0].artistName,
                });
              }}>
              <Image source={{ uri: item[0].artwork }} style={styles.artwork} />
              <Text style={styles.artist}>{item[0].AlbumName}</Text>
              <Text style={styles.track}>{item[0].artistName}</Text>
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
    marginHorizontal: 8,
    marginVertical: 10,
  },
  seeMoreContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  seeMore: {
    color: GlobalStyles.colors.accentPrimary,
    fontSize: 12,
    fontFamily: "Poppins600",
  },
  artist: {
    color: GlobalStyles.colors.primaryText,
    fontSize: 13,
    fontFamily: "Poppins500",
    width: "95%",
  },
  artwork: {
    width: 150,
    height: 150,
    marginBottom: 10,
    borderRadius: 5,
  },
  track: {
    color: GlobalStyles.colors.secondaryText,
    fontSize: 11,
    fontFamily: "Poppins600",
  },
});
