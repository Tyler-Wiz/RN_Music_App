import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Description } from "../../../modules/common/Description";
import { NewReleaseConfig } from "../NewReleaseConfig";
import { GlobalStyles } from "../../../constants/color";

export const NewRelease = () => {
  const [isLoading, newRelease] = NewReleaseConfig();
  const navigation = useNavigation();

  return (
    <View>
      <Description title="New Releases" margin={10} />
      <ScrollView horizontal>
        {newRelease.map((item, i) => (
          <View key={i} style={styles.container}>
            <TouchableOpacity
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
            </TouchableOpacity>
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
  },
  artwork: {
    width: 140,
    height: 140,
    marginBottom: 10,
  },
  artist: {
    color: GlobalStyles.colors.secondaryText,
    fontSize: 11,
    fontFamily: "Poppins600",
  },
});
