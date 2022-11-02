import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  Modal,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { RenderBookmarkContent } from "./Bookmark/RenderBookmarkContent";
import { GlobalStyles } from "../constants/color";

export const RenderSongs = ({ item, position }) => {
  const navigation = useNavigation();
  const [isvisible, setIsVisible] = useState(false);
  let length = 35;
  return (
    <View>
      <View style={styles.trackContainer}>
        <TouchableOpacity
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
          {position && <Text style={styles.position}>{position}</Text>}
          <Image source={{ uri: item.artwork }} style={styles.artwork} />
          <View>
            <Text style={styles.track}>
              {item.trackName.length > length
                ? item.trackName.trimStart().substring(0, length - 3) + "..."
                : item.trackName.trimStart()}
            </Text>
            <Text style={styles.artist}>{item.artistName.trimStart()}</Text>
          </View>
        </TouchableOpacity>
        <Pressable
          onPress={() => {
            setIsVisible(true);
          }}>
          <Feather
            name="more-horizontal"
            size={24}
            color={GlobalStyles.colors.primaryText}
          />
        </Pressable>
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
  position: {
    color: GlobalStyles.colors.primaryText,
    fontSize: 14,
    fontFamily: "Poppins700",
    marginRight: 10,
    width: 20,
  },
  track: {
    color: GlobalStyles.colors.primaryText,
    fontSize: 12,
    fontFamily: "Poppins500",
    textTransform: "capitalize",
  },
  artwork: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 5,
  },
  artist: {
    color: GlobalStyles.colors.secondaryText,
    fontSize: 10,
    fontFamily: "Poppins400",
    textTransform: "capitalize",
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
    height: "35%",
    width: "100%",
    backgroundColor: GlobalStyles.colors.iconColor,
    borderRadius: 15,
  },
});
