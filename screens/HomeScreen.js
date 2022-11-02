import React from "react";
import { StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import { TrendingSongs } from "../components/Trending/components/TrendingSongs";
import { NewRelease } from "../components/NewReleases/components/NewRelease";
import { Chart } from "../components/Charts/components/Chart";
import { FeaturedAlbums } from "../components/Albums/FeaturedAlbums";
import { FeaturedArtist } from "../components/Search/FeaturedArtist";
import { GlobalStyles } from "../constants/color";

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <TrendingSongs />
          <FeaturedArtist />
          <NewRelease />
          <Chart />
          <FeaturedAlbums />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primaryBg,
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
