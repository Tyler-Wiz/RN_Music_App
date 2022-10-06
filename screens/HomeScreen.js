import { StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import { TrendingSongs } from "../components/Trending/components/TrendingSongs";
import { NewRelease } from "../components/NewReleases/components/NewRelease";
import { Chart } from "../components/Charts/components/Chart";
import { FeaturedAlbums } from "../components/Albums/FeaturedAlbums";
import { Recommended } from "../components/Recommended/components/Recommended";
import { FeaturedArtist } from "../components/Search/FeaturedArtist";
import { NewsContent } from "../components/News/NewsContent";

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.container}>
          <TrendingSongs />
          <NewsContent />
          <FeaturedArtist />
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
    paddingHorizontal: 15,
    marginTop: 40,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "none",
  },
});
