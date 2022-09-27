import {
  View,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { ChartConfig } from "../ChartConfig";
import { ChartDetails } from "./ChartDetails";
import { useNavigation } from "@react-navigation/native";

export const Chart = () => {
  const [featuredChart, isLoading] = ChartConfig();
  const navigation = useNavigation();
  let position = 0;

  return (
    <View>
      <Text style={styles.chartDescription}>CHART</Text>
      <Text style={styles.chartSub}>Top 20 Songs</Text>
      <ScrollView>
        {featuredChart.map((item, i) => {
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
          navigation.navigate("Chart");
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
    color: "#7C53D0",
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
