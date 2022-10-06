import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  Pressable,
  Modal,
} from "react-native";
import { useContext, useState } from "react";
import { SongContext } from "../store/Song-Context";
import { Description } from "../modules/common/Description";
import { Feather } from "@expo/vector-icons";
import { GlobalStyles } from "../constants/color";

export const FavoriteScreen = ({ navigation }) => {
  const songCtx = useContext(SongContext);

  const favorite = true;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {songCtx.markSongs ? (
          <Description title="Favorites" size="16" align="center" />
        ) : null}
        <ScrollView>
          {songCtx.markSongs.map((item, i) => (
            <View key={i} style={styles.wrapper}>
              <Pressable
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
                    <Text style={styles.track}>{item.track}</Text>
                    <Text style={styles.artist}>{item.artist}</Text>
                  </View>
                </View>
              </Pressable>
              <View style={styles.iconContainer}>
                <Feather
                  name="more-horizontal"
                  size={24}
                  color="white"
                  onPress={() => {
                    // songCtx.removeSong(item.itemId);
                    navigation.navigate("book", {
                      favorite: favorite,
                      itemId: item.id,
                    });
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
    color: GlobalStyles.colors.secondaryText,
    fontSize: 11,
    fontFamily: "Poppins400",
  },
  track: {
    color: GlobalStyles.colors.primaryText,
    fontSize: 12,
    fontFamily: "Poppins500",
  },
  artwork: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 5,
  },
  image: {
    width: 20,
    height: 25,
    resizeMode: "contain",
  },
  iconContainer: {
    position: "relative",
  },
});
