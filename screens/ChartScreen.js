import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  Image,
} from "react-native";
import React from "react";
import { RenderSongs } from "../components/RenderSongs";
import { GlobalStyles } from "../constants/color";
import { PlaylistNavigation } from "../modules/common/PlaylistNavigation";
import { sortArray } from "../modules/hooks/sortArray";

export const ChartScreen = ({ route }) => {
  // Params from Homepage ChartData//
  const chartData = route.params.chart;
  const isLoading = route.params.isLoading;
  // Number State //
  let position = 0;
  // Sort by Name function //
  const [sort_by] = sortArray();
  const chart = chartData.sort(sort_by("album", false, (a) => a.toUpperCase()));

  return (
    <SafeAreaView style={styles.safeArea}>
      <PlaylistNavigation name="Top 20 Songs Of The Week " />
      <View style={styles.container}>
        <ScrollView
          alwaysBounceVertical={false}
          showsVerticalScrollIndicator={false}>
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: "https://tooxclusive.com/wp-content/uploads/2022/09/Top20.png",
              }}
              style={styles.featuredImg}
            />
          </View>
          {chart.map((item, i) => {
            let number = i + 1;
            return (
              <View key={i}>
                <RenderSongs item={item} position={number} />
              </View>
            );
          })}
        </ScrollView>
      </View>
      <ActivityIndicator size="small" animating={isLoading} color="grey" />
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
    flex: 1,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },
  featuredImg: {
    width: 250,
    height: 240,
  },
  description: {
    color: GlobalStyles.colors.primaryText,
    fontSize: 15,
    fontFamily: "Poppins500",
    marginVertical: 10,
    marginHorizontal: 10,
  },
});
