import { StyleSheet, Text, View, Pressable, Image, Modal } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { RenderBookmarkContent } from "./Bookmark/RenderBookmarkContent";
import { GlobalStyles } from "../constants/color";

export const RenderSongs = ({ item }) => {
  const navigation = useNavigation();
  const [isvisible, setIsVisible] = useState(false);

  return (
    <View>
      <View style={styles.trackContainer}>
        <Pressable
          style={styles.singleTrackContainer}
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
          <Image source={{ uri: item.artwork }} style={styles.artwork} />
          <View>
            <Text style={styles.track}>{item.trackName}</Text>
            <Text style={styles.artist}>{item.artistName}</Text>
          </View>
        </Pressable>
        <Feather
          name="more-horizontal"
          size={24}
          color="white"
          onPress={() => {
            setIsVisible(true);
          }}
        />
      </View>
      <Modal animationType="slide" transparent visible={isvisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalWrapper}>
            <RenderBookmarkContent
              youtubeId={item.youtube}
              lyrics={item.lyrics}
              artist={item.artistName}
              track={item.trackName}
              image={item.artwork}
              id={item.id}
              setIsVisible={setIsVisible}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  trackContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  singleTrackContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 6,
  },
  track: {
    color: GlobalStyles.colors.primaryText,
    fontSize: 13,
    fontFamily: "Poppins500",
  },
  artwork: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 5,
  },
  artist: {
    color: GlobalStyles.colors.secondaryText,
    fontSize: 11,
    fontFamily: "Poppins400",
  },
  icon: {
    marginRight: 2,
  },
  viewCount: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  modalContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  modalWrapper: {
    height: "40%",
    width: "100%",
    backgroundColor: "#f5f5f5",
    borderRadius: 15,
  },
});
