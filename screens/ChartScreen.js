import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  Image,
} from "react-native";
import { ChartConfig } from "../components/Charts/ChartConfig";
import { ChartDetails } from "../components/Charts/components/ChartDetails";
import { TrackNavigation } from "../modules/common/TrackNavigation";

export const ChartScreen = () => {
  const [featuredChart, isLoading, chart] = ChartConfig();

  let position = 0;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView alwaysBounceVertical={false}>
          <TrackNavigation />
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
