import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { GlobalStyles } from "../../../constants/color";

export const RenderPlayList = ({ playlist, data }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.wrapper}
      onPress={() => {
        navigation.navigate("PlaylistSongs", {
          data: data,
          name: playlist.name,
          img: playlist.imageUrl,
        });
      }}>
      <Image source={{ uri: playlist.imageUrl }} style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.track}>{playlist.name}</Text>
        <Text style={styles.artists}>{playlist.artists}</Text>
        {/* <Text style={styles.updated}>Updated - {playlist.updated}</Text> */}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 7,
  },
  image: { width: 60, height: 60, marginRight: 10, borderRadius: 5 },
  container: {
    width: "70%",
    borderBottomWidth: 0.2,
    borderBottomColor: GlobalStyles.colors.secondaryText,
    paddingVertical: 3,
  },
  track: {
    color: GlobalStyles.colors.primaryText,
    fontSize: 13,
    fontFamily: "Poppins600",
    textTransform: "capitalize",
    marginBottom: 4,
  },
  artists: {
    color: GlobalStyles.colors.secondaryText,
    fontSize: 10,
    fontFamily: "Poppins300",
    textTransform: "capitalize",
  },
});
