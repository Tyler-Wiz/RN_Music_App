import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useContext } from "react";
import { SongContext } from "../store/Song-Context";
import { Description } from "../modules/common/Description";
import { Feather } from "@expo/vector-icons";

export const FavoriteScreen = ({ navigation }) => {
  const songCtx = useContext(SongContext);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {songCtx.markSongs ? (
          <Description title="Recently Added" size="18" align="center" />
        ) : null}
        <ScrollView>
          {songCtx.markSongs.map((item, i) => (
            <View key={i} style={styles.wrapper}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Track", {
                    artist: item.artist,
                    track: item.track,
                    youtubeId: item.youtubeId,
                    itemId: item.id,
                    lyrics: item.lyrics,
                    image: item.image,
                  });
                }}>
                <View style={styles.imageWrapper}>
                  <Image source={{ uri: item.image }} style={styles.artwork} />
                  <View>
                    <Text style={styles.artist}>{item.artist}</Text>
                    <Text style={styles.artist}>{item.track}</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <View style={styles.iconContainer}>
                <Feather
                  name="more-horizontal"
                  size={24}
                  color="white"
                  onPress={() => {
                    songCtx.removeSong(item.itemId);
                  }}
                />
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
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
  wrapper: {
    marginHorizontal: 10,
    marginVertical: 7,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imageWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  artist: {
    color: "white",
    fontSize: 11,
    fontFamily: "Poppins500",
  },
  artwork: {
    width: 75,
    height: 75,
    marginRight: 10,
    borderRadius: 2,
  },
  image: {
    width: 20,
    height: 25,
    resizeMode: "contain",
  },
  iconContainer: {
    position: "relative",
  },
  delete: {
    position: "absolute",
    bottom: 20,
    right: 10,
    width: 150,
    zIndex: 3,
    borderColor: "white",
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: "center",
  },
});
