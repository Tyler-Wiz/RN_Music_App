import { StyleSheet, View, ScrollView, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AlbumConfig } from "./AlbumConfig";
import { Description } from "../../modules/common/Description";
import { GlobalStyles } from "../../constants/color";
import { RenderAlbums } from "../RenderAlbums";

export const FeaturedAlbums = () => {
  //Albums From Firebase //
  const [albums, isLoading] = AlbumConfig();
  //filtered Featured Albums/
  const featuredAlbums = albums.filter((album) => {
    if (album[0].tag.includes("featured")) {
      return album[0];
    }
  });
  // Navigation //
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.seeMoreContainer}>
        <Description title="New Albums" size={15} margin={15} />
      </View>
      <ScrollView horizontal>
        {featuredAlbums.map((item, i) => (
          <View key={i}>
            <RenderAlbums
              item={item}
              width={150}
              height={150}
              flex="column"
              bottom={10}
            />
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
