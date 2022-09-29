import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TrendNewConfig } from "../Trending-Config";
import { Description } from "../../../modules/common/Description";
import { GlobalStyles } from "../../../constants/color";

export const TrendingSongs = () => {
  const [isLoading, trending] = TrendNewConfig();
  const navigation = useNavigation();

  const renderList = ({ item }) => {
    return (
      <View style={styles.trackContainer}>
        <TouchableOpacity
          style={styles.singleTrackContainer}
          onPress={() => {
            navigation.navigate("Track", {
              artist: item[0].artistName,
              track: item[0].trackName,
              youtubeId: item[0].youtube,
              itemId: item.id,
              lyrics: item[0].lyrics,
              image: item[0].artwork,
            });
          }}>
          <Image source={{ uri: item[0].artwork }} style={styles.artwork} />
          <View>
            <Text style={styles.track}>{item[0].trackName}</Text>
            <Text style={styles.artist}>{item[0].artistName}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <Description title="Most Played" size={15} margin={10} />
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
  trackContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 250,
  },
  singleTrackContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  track: {
    color: GlobalStyles.colors.primaryText,
    fontSize: 12,
    fontFamily: "Poppins600",
  },
  artwork: {
    width: 45,
    height: 45,
    marginRight: 10,
  },
  artist: {
    color: GlobalStyles.colors.secondaryText,
    fontSize: 11,
    fontFamily: "Poppins600",
  },
  icon: {
    marginRight: 2,
  },
});
