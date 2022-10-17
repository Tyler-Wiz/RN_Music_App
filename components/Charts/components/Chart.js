import {
  View,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { allSongsConfig } from "../../../modules/hooks/allSongs-config";
import { ChartDetails } from "./ChartDetails";
import { useNavigation } from "@react-navigation/native";
import { GlobalStyles } from "../../../constants/color";
import { sortArray } from "../../../modules/hooks/sortArray";

export const Chart = () => {
  const [allSongs, isLoading] = allSongsConfig();
  const navigation = useNavigation();
  let position = 0;

  const chart = allSongs.filter((track) => {
    if (track.album.includes("top")) {
      return track;
    }
  });
  const [sort_by] = sortArray();
  const chartTop5 = allSongs.filter((track) => {
    if (track.album.includes("five")) {
      return track;
    }
  });
  const featuredChart = chartTop5.sort(
    sort_by("album", false, (a) => a.toUpperCase())
  );

  return (
    <View>
      <Text style={styles.chartDescription}>CHART</Text>
      <Text style={styles.chartSub}>Top 20 Songs</Text>
      <ScrollView>
        {featuredChart &&
          featuredChart.map((item, i) => {
            let number = i + 1;
            return (
              <View key={i}>
                <ChartDetails item={item} position={number} />
              </View>
            );
          })}
      </ScrollView>
      <TouchableOpacity
        style={styles.seeMoreChart}
        onPress={() => {
          navigation.navigate("Chart", {
            chart: chart,
            isLoading: isLoading,
          });
        }}>
        <Text style={styles.chartSub}>SEE MORE</Text>
      </TouchableOpacity>
      <ActivityIndicator size="small" animating={isLoading} color="grey" />
    </View>
  );
};
const styles = StyleSheet.create({
  chartDescription: {
    color: "white",
    fontSize: 25,
    fontFamily: "Poppins700",
    marginVertical: 5,
    textAlign: "center",
  },
  chartSub: {
    color: GlobalStyles.colors.accentPrimary,
    fontSize: 16,
    fontFamily: "Poppins700",
    marginVertical: 2,
    textAlign: "center",
  },
  seeMoreChart: {
    borderWidth: 1.2,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginVertical: 15,
  },
});
