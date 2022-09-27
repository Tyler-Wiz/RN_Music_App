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
                  artist: item[0].artistName,
                  track: item[0].trackName,
                  youtubeId: item[0].youtube,
                  itemId: item.id,
                  lyrics: item[0].lyrics,
                  image: item[0].artwork,
                });
              }}>
              <Image source={{ uri: item[0].artwork }} style={styles.artwork} />
              <Text style={styles.artist}>{item[0].artistName}</Text>
              <Text style={styles.track}>{item[0].trackName}</Text>
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
  artist: {
    color: "white",
    fontSize: 13,
    fontFamily: "Poppins500",
  },
  artwork: {
    width: 140,
    height: 140,
    marginBottom: 10,
  },
  track: {
    color: "white",
    fontSize: 11,
    fontFamily: "Poppins300",
  },
});
