import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MoreIcon } from "../../../modules/common/MoreIcon";
import { GlobalStyles } from "../../../constants/color";

export const ChartDetails = ({ item, position }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
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
        <View style={styles.trackInfo}>
          <Text style={styles.position}>{position}</Text>
          <Image source={{ uri: item[0].artwork }} style={styles.artwork} />
          <View>
            <Text style={styles.track}>{item[0].trackName}</Text>
            <Text style={styles.artist}>{item[0].artistName}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <MoreIcon
        youtubeId={item[0].youtube}
        lyrics={item[0].lyrics}
        artist={item[0].artistName}
        track={item[0].trackName}
        image={item[0].artwork}
        itemId={item.id}
      />
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
