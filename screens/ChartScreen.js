import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  Image,
} from "react-native";
import { ChartDetails } from "../components/Charts/components/ChartDetails";
import { PlaylistNavigation } from "../modules/common/PlaylistNavigation";
import { sortArray } from "../modules/hooks/sortArray";

export const ChartScreen = ({ route }) => {
  const chartData = route.params.chart;
  const isLoading = route.params.isLoading;
  let position = 0;

  const [sort_by] = sortArray();
  const chart = chartData.sort(sort_by("album", false, (a) => a.toUpperCase()));

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView alwaysBounceVertical={false}>
          <PlaylistNavigation />
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: "https://tooxclusive.com/wp-content/uploads/2022/09/Top20.png",
              }}
              style={styles.featuredImg}
            />
            <Text style={styles.description}>Top 20 Songs Of The Week</Text>
          </View>
          {chart.map((item, i) => {
            let number = i + 1;
            return (
              <View key={i}>
                <ChartDetails item={item} position={number} />
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
    backgroundColor: "black",
  },
  container: {
    padding: 15,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  featuredImg: {
    width: 250,
    height: 240,
  },
  description: {
    color: "white",
    fontSize: 15,
    fontFamily: "Poppins500",
    marginVertical: 10,
    marginHorizontal: 10,
  },
});
