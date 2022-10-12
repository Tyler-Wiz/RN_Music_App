import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { GlobalStyles } from "../../../constants/color";

export const ChartDetails = ({ item, position }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable
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
        <View style={styles.trackInfo}>
          <Text style={styles.position}>{position}</Text>
          <Image source={{ uri: item.artwork }} style={styles.artwork} />
          <View>
            <Text style={styles.track}>{item.trackName}</Text>
            <Text style={styles.artist}>{item.artistName}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  trackInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  position: {
    color: "white",
    fontSize: 20,
    fontFamily: "Poppins700",
    marginRight: 10,
  },
  artist: {
    color: GlobalStyles.colors.secondaryText,
    fontSize: 11,
    fontFamily: "Poppins600",
  },
  artwork: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  track: {
    color: GlobalStyles.colors.primaryText,
    fontSize: 13,
    fontFamily: "Poppins600",
  },
});
