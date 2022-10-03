import { StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import { TrendingSongs } from "../components/Trending/components/TrendingSongs";
import { NewRelease } from "../components/NewReleases/components/NewRelease";
import { Chart } from "../components/Charts/components/Chart";
import { FeaturedAlbums } from "../components/Albums/FeaturedAlbums";
import { Recommended } from "../components/Recommended/components/Recommended";
import { Ionicons } from "@expo/vector-icons";
import { FeaturedArtist } from "../components/Search/FeaturedArtist";
import AudioPlayer from "../misc/AudioPlayer";

export const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerContainer}>
        <View>
          <Ionicons name="musical-notes" size={24} color="white" />
        </View>
        <View>
          <Ionicons
            name="ios-search-outline"
            size={24}
            color="white"
            onPress={() => {
              navigation.navigate("search");
            }}
          />
        </View>
      </View>
      <ScrollView>
        <View style={styles.container}>
          <FeaturedArtist />
          <TrendingSongs />
          <NewRelease />
          <Chart />
          <FeaturedAlbums />
          <Recommended />
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
    padding: 15,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "none",
  },
});
