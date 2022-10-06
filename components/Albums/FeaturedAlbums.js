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
  const [featuredAlbums, isLoading] = AlbumConfig();
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.seeMoreContainer}>
        <Description title="New Albums" />
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
    marginRight: 10,
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
    fontFamily: "Poppins600",
    maxWidth: "80%",
  },
  artwork: {
    width: 140,
    height: 140,
    marginBottom: 10,
    borderRadius: 5,
  },
  track: {
    color: GlobalStyles.colors.secondaryText,
    fontSize: 11,
    fontFamily: "Poppins600",
  },
});
